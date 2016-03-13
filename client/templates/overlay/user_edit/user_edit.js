Template.user_edit.onCreated(function(){
    let self = this;
    self.error = new ReactiveVar(false),
    self.good = new ReactiveVar(false);

    if (Session.get('user_edit'))
        self.subscribe('single.edit', Session.get('overlay').id);
});

Template.user_edit.helpers({
    who_improve: function(){
        if (Companies.findOne(Session.get('overlay').id)) return true;
    },
    name: function(){
        return Companies.findOne(Session.get('overlay').id).name;
    },
    error: function(){
        return Template.instance().error.get();
    },
    good: function(){
        return Template.instance().good.get();
    }
});

Template.user_edit.events({
    'submit #user_edit_form':function(event, template){
        event.preventDefault();
        let key = event.target.key.value.trim(),
        value = event.target.value.value.trim(),
        url = event.target.url.value.trim(),
        data = {
            key: key,
            value: value,
            url: url
        }

        if (key.length === 0 || value.length === 0 || url.length === 0) return false;

        data.name = Companies.findOne(Session.get('overlay').id).name;

        Meteor.call('user_edit', data, function(err,res){
            if (err){
                template.error.set(err.reason);
            } else {
                template.good.set("Thank you for this information :)");
                document.getElementById("user_edit_form").reset();
            }
        });
    }
})
