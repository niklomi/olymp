tweetNewCompany = function(company){
  let message = `NEW: ${company.name} come to list with rating ${company.rating}pts 🔥 Check more here ${Meteor.absoluteUrl()}c/${company.name_low}/info`;
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

  let favorite_words = '@tech_fights OR techfights',
  query_word = 'best IT companies OR best startups';

  SyncedCron.add({
    name: 'Twi_make_favorite',
    schedule: function(parser) {
      return parser.text('every 5 minutes');
    },
    job: function() {
      T.get('search/tweets', {q: query_word, resulttype: "recent"}, function (err, data,response) {
        if (!err && data.statuses.length > 0) {
          let tweets = data.statuses;
          let randomTweet = randIndex(tweets);
          T.get('statuses/show', {id : randomTweet.id_str}, function(err, response) {
            if(!response.favorited) {
              T.post('favorites/create', {id : randomTweet.id_str},function (err, response) {
                if (err && err.code !== 139) console.log('/ query_favorites/create Error: ', err);
              });
            }
          });
        }
        else if(err) { console.log('search/tweet Error: ', err);}
      });

      T.get('search/tweets', {q: favorite_words }, function (err, data,response) {
        if (!err && data.statuses.length > 0) {
          let tweets = data.statuses;
          let randomTweet = randIndex(tweets);
          T.get('statuses/show', {id : randomTweet.id_str}, function(err, response) {
            if(!response.favorited) {
              T.post('favorites/create', {id : randomTweet.id_str},function (err, response) {
                if (err && err.code !== 139) console.log('/ my_favorites/create Error: ', err);
              });
            }
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

          let tweets = reply.statuses;

        if (!tweets || tweets.length < 1) return false;
          let target = randIndex(tweets).user.id_str;

          T.post('friendships/create', { id: target },  function(err, reply){
          if(err) { console.log('/ friendships/create Error ', err); }
        });
      });

      T.get('search/tweets', {q: favorite_words, resulttype: "recent"}, function (err, reply) {
          if(err) console.log('search/tweets and follow Error: ', err)

          let tweets = reply.statuses;
          let target = randIndex(tweets).user.id_str;

          T.post('friendships/create', { id: target },  function(err, reply){
          if(err) { console.log('/ friendships/create Error ', err); }
        });
      });
    }
  });
}
