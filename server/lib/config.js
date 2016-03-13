SlackAPI = Meteor.npmRequire( 'node-slack' );
Slack = new SlackAPI( Meteor.settings.private.slack.hook );
_Countries = Meteor.npmRequire('country-list')();
Twit = Meteor.npmRequire('twit');

if (inProduction()){
  Kadira.connect('F24b7y8phkQ9WJhaH', '50c8ae65-f15f-4a16-9ce1-ada03e60719b');
  process.env.KADIRA_PROFILE_LOCALLY = 1
}

T = new Twit({
  consumer_key: Meteor.settings.private.twitter.consumer_key,
  consumer_secret: Meteor.settings.private.twitter.consumer_key_secret,
  access_token: Meteor.settings.private.twitter.access_token,
  access_token_secret: Meteor.settings.private.twitter.access_token_secret
});
