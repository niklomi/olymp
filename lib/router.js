var adminRoutes = FlowRouter.group({
	prefix: '/calabria',
	name: 'admin',
	triggersEnter: [admincheck]
});

FlowRouter.route('/', {
	name: "home",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights - Rating of the best technology companies and startups";

		var metaInfo = [{name: "description", content: description},
			{name: "twitter:url", content: "http://techfights.com/"},
			{name: "og:url", content: "http://techfights.com/"},
			{name: "twitter:description", content:description},
			{name: "og:description", content:description},
			{name: "og:title", content:title},
			{name: "twitter:title", content:title},
			{name: "twitter:image", content:"http://techfights.com/images/logo.png"},
			{name: "og:type", content:"website"},
			{name: "og:local", content:"en_US"}]

		DocHead.setTitle(title);
		_.each(metaInfo,function(title){
			DocHead.addMeta(title);
		});

		BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'join_slack'});
	},
	fastRender: true
});

FlowRouter.route('/not/login', {
	name: "login",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights - Rating of the best technology companies and startups";

		var metaInfo = [{name: "description", content: description},
			{name: "twitter:url", content: "http://techfights.com/"},
			{name: "og:url", content: "http://techfights.com/"},
			{name: "twitter:description", content:description},
			{name: "og:description", content:description},
			{name: "og:title", content:title},
			{name: "twitter:title", content:title},
			{name: "twitter:image", content:"http://techfights.com/images/logo.png"},
			{name: "og:type", content:"website"},
			{name: "og:local", content:"en_US"}]

		DocHead.setTitle(title);
		_.each(metaInfo,function(title){
			DocHead.addMeta(title);
		});

		BlazeLayout.render('layout', {header: 'header', body: 'table', login: 'login', poloska: 'join_slack' });
	}
});

FlowRouter.route('/about', {
	name: "about",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Learn more about Tech Fights and ranking system in startups",
		title = "Tech Fights | About";

		var metaInfo = [{name: "description", content: description},
			{name: "twitter:url", content: "http://techfights.com/"},
			{name: "og:url", content: "http://techfights.com/"},
			{name: "twitter:description", content:description},
			{name: "og:description", content:description},
			{name: "og:title", content:title},
			{name: "twitter:title", content:title},
			{name: "twitter:image", content:"http://techfights.com/images/logo.png"},
			{name: "og:type", content:"website"},
			{name: "og:local", content:"en_US"}]

		DocHead.setTitle(title);
		_.each(metaInfo,function(title){
			DocHead.addMeta(title);
		});

		BlazeLayout.render('layout', {header: 'header', body: 'about', poloska: 'join_slack'});
	}
});

FlowRouter.route('/slack', {
	name: "slack",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Join community where people can share their work experience and be able to find new useful contacts",
		title = "Tech Fights | Join Slack";

		var metaInfo = [{name: "description", content: description},
			{name: "twitter:url", content: "http://techfights.com/"},
			{name: "og:url", content: "http://techfights.com/"},
			{name: "twitter:description", content:description},
			{name: "og:description", content:description},
			{name: "og:title", content:title},
			{name: "twitter:title", content:title},
			{name: "twitter:image", content:"http://techfights.com/images/logo.png"},
			{name: "og:type", content:"website"},
			{name: "og:local", content:"en_US"}]

		DocHead.setTitle(title);
		_.each(metaInfo,function(title){
			DocHead.addMeta(title);
		});

		BlazeLayout.render('layout', {body: 'slack'});
	}
});

adminRoutes.route('/create', {
	name: "create",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights - Rating of the best technology companies and startups";
		DocHead.setTitle(title);
		DocHead.addMeta({name: "og:description", content:description});

		BlazeLayout.render('layout', {header: 'header', body: 'new_company'});
	}
});

adminRoutes.route('/update', {
	name: "update",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights - Rating of the best technology companies and startups";
		DocHead.setTitle(title);
		DocHead.addMeta({name: "og:description", content:description});
		BlazeLayout.render('layout', {header: 'header', body: 'update_company'});
	}
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('layout', {body: 'notFound',header: 'header', poloska: 'join_slack'});
	}
};

function trackRouteEntry(context) {
	DocHead.removeDocHeadAddedTags();
}

function admincheck(context, redirect, stop) {
	if (!Meteor.user()) redirect('/');
	if (Meteor.user() && !Roles.userIsInRole(Meteor.userId(), ['admin'])) {
		redirect('/');
	}
}
