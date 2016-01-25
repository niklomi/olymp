Template.table.onCreated(function(){
    let self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        let handle = PostSubs.subscribe('all.preview');
        self.ready.set(handle.ready());
    });
});

Template.table.helpers({
    companies: function(){
        let sorting = {};
        return Companies.find({}, sorting);
    },
    ready: function(){
        return Template.instance().ready.get();
    }
});
