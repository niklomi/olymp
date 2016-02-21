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
    },
    emailSubscribe(email){
        check(email, String);
        if (__checkEmail(email)){
            if(Emails.findOne({email : email})) throw new Meteor.Error("emailSubscribe", "You already subscribed");
            Emails.insert({email: email});
        }else throw new Meteor.Error("emailSubscribe", "Wrong email!");
    }
})
