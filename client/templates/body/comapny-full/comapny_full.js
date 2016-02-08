Template.company_full.onCreated(function(){
    let self = this, _id = this.data._id;
    self.ready = new ReactiveVar();
    self.template = new ReactiveVar('company_info');

    self.autorun(function(){
        let handle = _singleSub.subscribe('companies', _id);
        self.ready.set(handle.ready());
    });
});

Template.company_full.helpers({
    sub_ready: () => Template.instance().ready.get(),
    template: () => Template.instance().template.get(),
    active: function(data){
        let tmp = data === Template.instance().template.get() ? true : false;
        return tmp;
    }
});

Template.company_full.events({
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
    'click .menu-switch': function(e,t){
        t.template.set(e.target.id);
    }
})
