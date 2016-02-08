Template.company.onCreated(function(){
    let self = this;
    self.show_full_info = new ReactiveVar(false);
});

Template.company.onRendered(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
})

Template.company.helpers({
    show_full_info: () => Template.instance().show_full_info.get(),
    average_salary: function(){
        return `$ ${this.average_salary},000`
    },
    workers_count: function(){
        return `${this.workers_count}K`;
    },
    twitt_it: function(){
        let text = encodeURI(`$${this.average_salary},000 - Average salary of Sofware Engineer in ${this.name}`),
        url = encodeURI("http://techfights.com"),
        hashtags = encodeURI(this.name.toLowerCase()),
        data = {text,url,hashtags};

        return data;
    }
});

Template.company.events({
    'click .td-tweet , click .tr-company': function(e,t){
        e.stopPropagation;
        t.show_full_info.set(! t.show_full_info.get());
    }
})
