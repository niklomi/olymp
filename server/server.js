Meteor.startup(function(){
    SyncedCron.start();
    update_all_rating();
    sitemap();
    Companies.remove({});
    if (Companies.find().count() === 0) insert_beta_companies();
});

Meteor.methods({
    feedback: function(text){
        check(text, String);

        Slack.send({
            text: text,
            channel: "olymp_user_edit"
        });
    }
})
