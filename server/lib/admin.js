Meteor.startup(function(){
	if ( Meteor.users.find().count() === 0 ) {
		var user = Accounts.createUser({
			username: Meteor.settings.private.admin.username,
			password: Meteor.settings.private.admin.password
		});
		Roles.addUsersToRoles(user, ['admin']);
	}
	Accounts.config({
		forbidClientAccountCreation: true
	});
});
