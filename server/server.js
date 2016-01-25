SlackAPI = Meteor.npmRequire( 'node-slack' );
Slack = new SlackAPI( Meteor.settings.private.slack.hook );
_Countries = Meteor.npmRequire('country-list')();

Meteor.startup(function(){
    update_all_rating();
    sitemap();
    Companies.remove({});
    if (Companies.find().count() === 0) insert_beta_companies();
});

Meteor.methods({
    insert_company: function(data){
        if (!Meteor.user() && !Roles.userIsInRole(Meteor.userId(), ['admin'])) return false;
        Schema.CompaniesSchema.validate(data);

        Companies.insert(data);
    },
    update_company: function(data, id){
        if (!Meteor.user() && !Roles.userIsInRole(Meteor.userId(), ['admin'])) return false;
        check(id, String);
        Schema.CompaniesSchema.validate(data, {modifier: true});

        Companies.update(id, data);
    },
    user_edit: function(data){
        check(data,{
            key: String,
            value: String,
            url: String,
            name: String
        });

        Slack.send({
          text: "Edit",
          channel: "olymp_user_edit",
          attachments: [
            {
              fallback: "Edit company",
              fields: [
                { title: "Key", value: data.key },
                { title: "Value", value: data.value },
                { title: "Approve", value: data.url },
                { title: "Company Name", value: data.name }
              ]
            }
          ]
        });
    },
    feedback: function(text){
        check(text, String);

        Slack.send({
            text: text,
            channel: "olymp_user_edit"
        });
    }
})
