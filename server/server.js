Meteor.startup(function(){
    SyncedCron.start();
    // Companies.remove({});
    // if (Companies.find().count() === 0) insert_beta_companies();
    update_all_company();
    update_all_rating();
    sitemap();
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
