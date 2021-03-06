Meteor.setInterval(function() {
	try {
		HTTP.get('https://slack.com/api/rtm.start', {params: {
			token: Meteor.settings.private.slack.token
		}}, function(err, res) {
			if (!err && res.data && res.data.users) {
				var users = res.data.users;
				var total = users.length;
				var active = _.filter(users, function(user) {
					return 'active' == user.presence;
				}).length;

				var data = {
					_id: 'slack',
					online: active,
					registered: total
				};
				_.extend(data, _.pick(res.data.team, 'name', 'domain'));

				Slack_c.upsert({_id: 'slack'}, data);
			}
		});
	} catch(e) {
		console.log(e);
	}
}, 60000);

Meteor.publish('slack', function() {
	return Slack_c.find({_id:'slack'});
});

Meteor.methods({
	invite: function(email) {
		check(email, String);
		if (!this.isSimulation && Slack_c.find().count() === 1) {
			var domain = Slack_c.findOne().domain;

			if (domain) {
				var url = "https://" + domain + ".slack.com/api/users.admin.invite";
				var data = {
					email: email,
					token: Meteor.settings.private.slack.token,
					set_active: true
				};

				try {
					var data = HTTP.call("POST", url, {
						params: data
					}).data;
				} catch(e) {
					console.log(e);
				}

				return data;
			}
		}
	}
});
