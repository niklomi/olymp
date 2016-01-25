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
    }
});

Template.company.events({
    'click .tr-company': function(event, template){
        template.show_full_info.set(! template.show_full_info.get());
    },
    'click .admin_edit': function(event,template){
        let id = this._id;
        Session.set('update', id);
        FlowRouter.go("/calabria/update");
    },
    'click .edit': function(){
        let id = this._id,
        data = {
            template: "user_edit",
            id: id
        }
        Session.set('overlay', data);
    },
    'click #faq-grades':function(event){
        let data = {
            template: "grade_FAQ"
        }
        Session.set('overlay', data);
    }
})
