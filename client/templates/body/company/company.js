Template.company.onCreated(function(){
    let self = this;
    self.show_full_info = new ReactiveVar(false);
    self.autorun(function(){
        if (Session.get('seo')){
            self.show_full_info.set(true);
        }
    });
});

Template.company.onRendered(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
})

Template.company.helpers({
    show_full_info: () => Template.instance().show_full_info.get()
});

Template.company.events({
    'click .td-tweet , click .tr-company': function(e,t){
        e.stopPropagation;
        t.show_full_info.set(! t.show_full_info.get());
    }
})
