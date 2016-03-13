Template.company_interviews.onCreated(function(){
    this.application = new ReactiveVar(true);
    this.interview = new ReactiveVar(true);
});

Template.company_interviews.helpers({
    big: function(data){
        if (data === 'application')
            return this.application.length > 499;
        if (data === 'interview')
            return this.interview.length > 499;
    },
    application: function(){
        if (this.application.length > 450){
            if (Template.instance().application.get())
                return this.application.substring(0, 500).trim();
            else
                return this.application;
        }
        return this.application;
    },
    interview: function(){
        if (this.interview.length > 450){
            if (Template.instance().interview.get())
                return this.interview.substring(0, 500).trim();
            else
                return this.interview;
        }
        return this.interview;
    },
    hide: function(data){
        if (data === 'application')
            return Template.instance().application.get();
        if (data === 'interview')
            return Template.instance().interview.get();
    }
});

Template.company_interviews.events({
    'click .show_more' : function(e,t){
        let name = e.currentTarget.id;
        if (name === 'application')
            t.application.set(! t.application.get());
        if (name === 'interview')
            t.interview.set(! t.interview.get());
    }
})
