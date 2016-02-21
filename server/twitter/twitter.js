tweetNewCompany = function(company){
  let message = `NEW: ${company.name} come to list with rating ${company.rating}pts 🔥 Check Salaries here ${Meteor.absoluteUrl()}c/${company.name_low}/info`;
  if (message.length > 140) message = `We add ${company.name} with rating ${company.rating}pts, more  ➡ ${Meteor.absoluteUrl()}c/${company.name_low}/info`;
  tweet(message);
}

let tweet = function(tweet){
  if (inProduction()){
    T.post('statuses/update', { status: tweet }, function(err, data, response) {
      if (err) console.log('! TWITTER | ' + err + moment().format());
    });
  }
};

if (inProduction()){
  function randIndex (arr) {
    let index = Math.floor(arr.length*Math.random());
    return arr[index];
  };

  let favorite_words = '@tech_fights OR #tech_fights',
  query_word = 'IT companies OR tech wars';

  SyncedCron.add({
    name: 'Twi_make_favorite',
    schedule: function(parser) {
      return parser.text('every 5 minutes');
    },
    job: function() {
      T.get('search/tweets', {q: query_word, resulttype: "recent"}, function (err, data,response) {
        if (!err && data.statuses.length > 0) {
          var tweets = data.statuses;
          var randomTweet = randIndex(tweets);
          T.post('favorites/create', {id : randomTweet.id},function (err, response) {
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
      return parser.text('every 30 minutes');
    },
    job: function() {
      T.get('search/tweets', {q: query_word, resulttype: "recent"}, function (err, reply) {
          if(err) console.log('search/tweets and follow Error: ', err)

          var tweets = reply.statuses;

        if (!tweets || tweets.length < 1) return false;
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
