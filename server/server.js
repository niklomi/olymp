Meteor.startup(function(){
    SyncedCron.start();
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
