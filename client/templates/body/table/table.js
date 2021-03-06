Template.table.onCreated(function(){
    console.log();
    let self = this,
    handle = false;

    self.ready = new ReactiveVar();
    self.active = new ReactiveVar();
    self.piar = new ReactiveVar(_.first(_.shuffle(piarArray), 3));

    self.autorun(function(){
        FlowRouter.watchPathChange();
        if (Session.get('seo')){
            handle = _tableSub.subscribe('companies', undefined, FlowRouter.getParam('name'));
        }else {
            handle = _tableSub.subscribe('companies');
        }
        self.ready.set(handle.ready());
    });
});

Template.table.helpers({
    companies: function(){
        let sorting = {sort : {rating: -1, name: 1, average_salary: -1, people_rating: -1}},
        piar = Template.instance().piar.get();
        if (Session.get('sort')){
            sorting = { 'sort' : Session.get('sort')};
        }
        if (Session.get('seo')){
            // 1 компания
            let companies = Companies.find({name_low : FlowRouter.getParam('name')}, sorting).fetch();
            return companies;
        }
        else{
            let companies = Companies.find({}, sorting).fetch(), count = 0;
            if (companies.length > 20)
                _.each(piar, function(ad){
                    companies.splice(10 + count, 0, ad);
                    count += 11;
                });
            return companies;
        }
    },
    ready: function(){
        return Template.instance().ready.get();
    },
    active: function(data){
        return Template.instance().active.get() === data ? true : false;
    },
    single: function(){
        return Session.get('seo');
    }
});

Template.table.events({
    'click #add_new_company': function(){
        let data = {
            template: "overlay_text",
            title: "How to add new company?",
            text: "Currently most of the data is dependent on the opinions of employees. If your company can be found on <a href='https://www.glassdoor.com' target='_blank' rel='nofollow' >glassdoor.com</a> or you can provide all the necessary data (like every company has in list) then <a href='/about#contact'>contact</a>  me."
        }
        Session.set('overlay', data);
    },
    'click th': function(e,t){
        let query = e.currentTarget.id;
        query = query.substring(4, query.length);
        Session.set('sortorder',  Session.get('sortorder') * -1 );
        Session.set('sort', sorting(query, Session.get('sortorder')));
        t.active.set(query);
    }
});
