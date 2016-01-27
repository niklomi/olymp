Template.table.onCreated(function(){
    let self = this;
    self.ready = new ReactiveVar();
    self.active = new ReactiveVar();
    self.autorun(function(){
        let handle = PostSubs.subscribe('all.preview');
        self.ready.set(handle.ready());
    });
});

Template.table.helpers({
    companies: function(){
        let sorting = Session.get('sort') || {};
        if (Session.get('sort')){
            sorting = { 'sort' : Session.get('sort')};
        }
        return Companies.find({}, sorting);
    },
    ready: function(){
        return Template.instance().ready.get();
    },
    active: function(data){
        return Template.instance().active.get() === data ? true : false;
    }
});

Template.table.events({
    'click #add_new_company': function(){
        let data = {
            template: "overlay_text",
            title: "How to add new company?",
            text: "Currently most of the data is dependent on the opinions of employees and if you can provide all the necessary data (like every company has in list), or show me where I can take it, then <a href='/about#contact'>contact</a>  me."
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
