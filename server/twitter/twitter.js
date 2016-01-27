if (inProduction()){
	function randIndex (arr) {
		var index = Math.floor(arr.length*Math.random());
		return arr[index];
	};

	var favorite_words = '@tech_fights OR #tech_fights',
	query_word = 'IT companies';

	SyncedCron.add({
		name: 'Twi_make_favorite',
		schedule: function(parser) {
			return parser.text('every 2 minute');
		},
		job: function() {
			T.get('search/tweets', {q: query_word, resulttype: "recent"}, function (err, data,response) {
				if (!err && data.statuses.length > 0) {
					var tweets = data.statuses;
					var randomTweet = randIndex(tweets);
					T.post('favorites/create', {id : randomTweet.id_str},function (err, response) {
						if (err && err.code !== 139) console.log('/ query_favorites/create Error: ', err);
					});
				}
				else if(err) { console.log('search/tweet Error: ', err);}
			});

			T.get('search/tweets', {q: favorite_words }, function (err, data,response) {
				if (!err && data.statuses.length > 0) {
					var tweets = data.statuses;
					var randomTweet = randIndex(tweets);
					T.post('favorites/create', {id : randomTweet.id_str},function (err, response) {
						if (err && err.code !== 139) console.log('/ my_favorites/create Error: ', err);
					});
				}
				else if (err){ console.log('search/tweet Error: ', err);}
			});
		}
	});

	SyncedCron.add({
		name: 'Twi_folower_freind',
		schedule: function(parser) {
			return parser.text('every 5 minute');
		},
		job: function() {
			T.get('followers/ids', function(err, reply) {
				if(err) {  console.log('followers/ids Error ', err);}
				else{
					var followers = reply.ids
					, randFollower = randIndex(followers);

					T.get('friends/ids', { user_id: randFollower }, function(err, reply) {
						if(err) { console.log('/ friends/ids Error: ', err); }
						else{
							var friends = reply.ids
							, target  = randIndex(friends);

							T.post('friendships/create', { id: target },  function(err, reply){
								if(err) { console.log('// friendships/create Error ', err); }
							});
						}
					})
				}
			});

			T.get('search/tweets', {q: query_word, resulttype: "recent"}, function (err, reply) {
			    if(err) console.log('search/tweets and follow Error: ', err)

			    var tweets = reply.statuses;

				if (tweets.length < 1) return false;
			    var target = randIndex(tweets).user.id_str;

			    T.post('friendships/create', { id: target },  function(err, reply){
					if(err) { console.log('/ friendships/create Error ', err); }
				});
			});

			T.get('search/tweets', {q: favorite_words, resulttype: "recent"}, function (err, reply) {
			    if(err) console.log('search/tweets and follow Error: ', err)

			    var tweets = reply.statuses;
			    var target = randIndex(tweets).user.id_str;

			    T.post('friendships/create', { id: target },  function(err, reply){
					if(err) { console.log('/ friendships/create Error ', err); }
				});
			});
		}
	});
}
