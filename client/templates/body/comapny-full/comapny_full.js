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
    twitt_it: function(){
        let text = encodeURI(`$${this.s_soft_engineer},000 - Average salary of Sofware Engineer in ${this.name}`),
        url = encodeURI("http://techfights.com"),
        hashtags = encodeURI(this.name.toLowerCase()),
        data = {text,url,hashtags};

        return data;
    }
});
