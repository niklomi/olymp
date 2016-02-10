Template.company_full.onCreated(function(){
    let self = this, _id = this.data._id;
    self.ready = new ReactiveVar();
    self.template = new ReactiveVar('company_info');

    self.autorun(function(){
        let handle = _singleSub.subscribe('companies', _id);
        self.ready.set(handle.ready());
    });

    self.autorun(function(){
        FlowRouter.watchPathChange();
        checkSEO();
        if (Session.get('seo')){
            let description, title, url, routeName = FlowRouter.getRouteName(), name = Template.currentData().name, image = Template.currentData().big_image;

            if (routeName === 'company_info'){
                description = `What employees say it's like to work at ${name}. Salaries, reviews, work/life balance, benefits..`,
                title = `Working at ${name} | TechFights`;
                setSEO(title, description, `http://techfights.com/c/${routeName}/info`,`http://techfights.com/images/c/${image}`);
            } else if (routeName === 'company_reviews'){
                description = `${name} reviews. Inside look at ${name} work process`,
                title = `${name} Reviews | TechFights`;
                setSEO(title, description, `http://techfights.com/c/${routeName}/reviews`,`http://techfights.com/images/c/${image}`);
            } else if (routeName === 'company_interviews'){
                description = `${name} interview question. What ${name} secret interview process?`,
                title = `${name} Interviews | TechFights`;
                setSEO(title, description, `http://techfights.com/c/${routeName}/Interviews`,`http://techfights.com/images/c/${image}`);
            }
        }
    });
});

Template.company_full.helpers({
    sub_ready: () => Template.instance().ready.get(),
    template: () => Template.instance().template.get(),
    single: () => Session.get('seo'),
    active: function(data){
        if (Session.get('seo')){
            if (FlowRouter.current().path.indexOf(data) > 0)
                Template.instance().template.set(`company_${data}`);
            return FlowRouter.current().path.indexOf(data) > 0;
        }else {
            let tmp = `company_${data}` === Template.instance().template.get() ? true : false;
            return tmp;
        }
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
        t.template.set(`company_${e.target.id}`);
    }
})
