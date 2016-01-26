SlackAPI = Meteor.npmRequire( 'node-slack' );
Slack = new SlackAPI( Meteor.settings.private.slack.hook );
_Countries = Meteor.npmRequire('country-list')();
Twit = Meteor.npmRequire('twit');

T = new Twit({
	consumer_key: Meteor.settings.private.twitter.consumer_key,
	consumer_secret: Meteor.settings.private.twitter.consumer_key_secret,
	access_token: Meteor.settings.private.twitter.access_token,
	access_token_secret: Meteor.settings.private.twitter.access_token_secret
});
