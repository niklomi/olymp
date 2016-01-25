Template.slack.onCreated(function() {
	var self = this;
	self.invite = new ReactiveVar(false);
	self.error = new ReactiveVar("");
	self.autorun(function() {
		self.subscribe('slack');
	});
});

Template.slack.helpers({
	invite: function() {
		var instance = Template.instance();
		return instance.invite.get();
	},
	slack: function() {
		return Slack_c.findOne();
	},
	error: function() {
		var instance = Template.instance();
		return instance.error.get();
	}
});

Template.slack.events({
	'submit #slack-form': function(e,t) {
		e.preventDefault();
		var email = t.find('input').value;
		if (email.length < 1) return false;
		Meteor.call('invite', email, function(err, res) {
			if (!err && res.ok) {
				t.error.set("");
				t.invite.set(true);
			}
			else if (!err){
				t.error.set(res.error);
			}
			else {
				t.error.set('Someting is broken here.');
			}
		});
	}
});
