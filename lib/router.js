setSEO = function(title, description, url = 'http://techfights.com/', image = "http://techfights.com/images/mockup.png"){

	var metaInfo = [{name: "description", content: description},
	{name: "twitter:url", content: url},
	{name: "og:url", content: url},
	{name: "twitter:description", content:description},
	{name: "og:description", content:description},
	{name: "og:title", content:title},
	{name: "twitter:title", content:title},
	{name: "twitter:image", content: image},
	{name: "og:type", content:"website"},
	{name: "og:local", content:"en_US"}]

	DocHead.setTitle(title);
	_.each(metaInfo,function(title){
		DocHead.addMeta(title);
	});
}

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
		title = "Tech Fights — Rating of The Best Technology Companies and Startups";
		setSEO(title, description);

		BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'join_slack'});
	},
	fastRender: true
});

var companyRoute = FlowRouter.group({
	prefix: '/c/:name',
	name: "company",
	triggersEnter: [trackRouteEntry]
});

companyRoute.route('/info', {
	name: "company_info",
	action: function() {
		BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'join_slack'});
	}
});

companyRoute.route('/reviews', {
	name: "company_reviews",
	action: function() {
		BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'join_slack'});
	}
});

companyRoute.route('/interviews', {
	name: "company_interviews",
	action: function() {
		BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'join_slack'});
	}
});

FlowRouter.route('/not/login', {
	name: "login",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights — Rating of The Best Technology Companies and Startups";

		setSEO(title, description);

		BlazeLayout.render('layout', {header: 'header', body: 'table', login: 'login', poloska: 'join_slack' });
	}
});

FlowRouter.route('/about', {
	name: "about",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Learn more about Tech Fights and ranking system in startups",
		title = "Tech Fights | About";

		setSEO(title, description, 'http://techfights.com/about');

		BlazeLayout.render('layout', {header: 'header', body: 'about', poloska: 'join_slack'});
	}
});

FlowRouter.route('/slack', {
	name: "slack",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Join community where people can share their work experience and be able to find new useful contacts",
		title = "Tech Fights | Join Slack";

		setSEO(title, description, 'http://techfights.com/slack', 'http://techfights.com/images/seo-slack.png');

		BlazeLayout.render('layout', {body: 'slack'});
	}
});

adminRoutes.route('/create', {
	name: "create",
	triggersEnter: [trackRouteEntry],
	action: function() {
		var description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..",
		title = "Tech Fights — Rating of the best technology companies and startups";
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
		FlowRouter.go('/');
		// BlazeLayout.render('layout', {body: 'notFound',header: 'header', poloska: 'join_slack'});
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
