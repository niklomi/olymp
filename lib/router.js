setSEO = function(title, description, url = 'http://techfights.com/', image = "http://techfights.com/images/mockup.png"){
  if (!title){
    title = "Tech Fights — Rating of The Best Technology Companies and Startups";
  }
  if (!description){
    description = "Ranking of the most popular technology companies and startups based on average salary and employee rating. Here you can find out what it's like to work in Facebook, uber, Twitter..";
  }
  let metaInfo = [{name: "description", content: description},
    {name: "og:url", content: url},
    {name: "og:description", content:description},
    {name: "og:title", content:title},
    {name: "og:type", content:"website"},
    {name: "og:local", content:"en_US"},
    {name: "og:image", content: image},
    {name: "twitter:url", content: url},
    {name: "twitter:description", content:description},
    {name: "twitter:title", content:title},
    {name: "twitter:image", content: image},
    {name: "twitter:site", content: `@remote_wolfy`},
    {name: "twitter:creator", content: `@remote_wolfy`},
    {name: "twitter:image:src", content: image}
    ];

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
    setSEO();

    BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'poloskaSubscribe'});
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
    BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'poloskaSubscribe'});
  }
});

companyRoute.route('/reviews', {
  name: "company_reviews",
  action: function() {
    BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'poloskaSubscribe'});
  }
});

companyRoute.route('/interviews', {
  name: "company_interviews",
  action: function() {
    BlazeLayout.render('layout', {header: 'header', body: 'table', poloska: 'poloskaSubscribe'});
  }
});

FlowRouter.route('/not/login', {
  name: "login",
  triggersEnter: [trackRouteEntry],
  action: function() {

    setSEO();

    BlazeLayout.render('layout', {header: 'header', body: 'table', login: 'login', poloska: 'poloskaSubscribe' });
  }
});

FlowRouter.route('/about', {
  name: "about",
  triggersEnter: [trackRouteEntry],
  action: function() {
    var description = "Learn more about Tech Fights and ranking system in startups",
    title = "Tech Fights | About";

    setSEO(title, description, 'http://techfights.com/about');

    BlazeLayout.render('layout', {header: 'header', body: 'about', poloska: 'poloskaSubscribe'});
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
    setSEO('Create');

    BlazeLayout.render('layout', {header: 'header', body: 'new_company'});
  }
});

adminRoutes.route('/update', {
  name: "update",
  triggersEnter: [trackRouteEntry],
  action: function() {
    setSEO('Upadte');

    BlazeLayout.render('layout', {header: 'header', body: 'update_company'});
  }
});

adminRoutes.route('/emails', {
  name: "emails",
  triggersEnter: [trackRouteEntry],
  action: function() {
    setSEO('Emails');

    BlazeLayout.render('layout', {header: 'header', body: 'emailsTable'});
  }
});

FlowRouter.notFound = {
  action() {
    FlowRouter.go('/');
    // BlazeLayout.render('layout', {body: 'notFound',header: 'header', poloska: 'poloskaSubscribe'});
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
