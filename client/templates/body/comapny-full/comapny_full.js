Template.company_full.onCreated(function(){
    let self = this, _id = this.data._id;
    self.ready = new ReactiveVar();

    self.autorun(function(){
        let handle = PostSubs.subscribe('single', _id);
        self.ready.set(handle.ready());
    });
});

Template.company_full.helpers({
    sub_ready: () => Template.instance().ready.get(),
    national: function(){
        let national = this.join(', ');
        return national;
    },
    schools: function(){
        return this.join('<br>');
    },
    major: function(){
        return this.join('<br>');
    },
});
