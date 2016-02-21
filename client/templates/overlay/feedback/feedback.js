Template.showFeedback.events({
    'click #feedback': function(event){
        let data = {
            template: "feedback"
        }
        Session.set('overlay', data);
    }
});

Template.feedback.onCreated(function(){
    let self = this;
    self.error = new ReactiveVar(false),
    self.good = new ReactiveVar(false);
});

Template.feedback.helpers({
    error: function(){
        return Template.instance().error.get();
    },
    good: function(){
        return Template.instance().good.get();
    }
});

Template.feedback.events({
    'submit #form_feedback': function(event,template){
        event.preventDefault();

        let text = event.target.textarea.value.trim();
        if (text.length === 0) return false;

        Meteor.call('feedback', text, function(err,res){
            if (err){
                template.error.set(err.reason);
            } else {
                template.good.set("Thank you for your feedback :)");
                document.getElementById("form_feedback").reset();
            }
        })
    }
});
