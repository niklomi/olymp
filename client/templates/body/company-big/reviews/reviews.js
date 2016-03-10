Template.company_reviews.onCreated(function(){
    this.pros = new ReactiveVar(true);
    this.cons = new ReactiveVar(true);
    this.advice = new ReactiveVar(true);
});

Template.company_reviews.helpers({
    big: function(data){
        console.log(this.cons.length > 499, data);
        if (data === 'cons' && this.cons.length > 499)
            return true;
        if (data === 'pros' && this.pros.length > 499)
            return true;
        if (data === 'advice' && this.advice.length > 499)
            return true;
        return false;
    },
    pros: function(){
        if (this.pros.length > 499){
            if (Template.instance().pros.get())
                return this.pros.substring(0, 500).trim();
            else
                return this.pros;
        }
        return this.pros;
    },
    cons: function(){
        if (this.cons.length > 499){
            if (Template.instance().cons.get())
                return this.cons.substring(0, 500).trim();
            else
                return this.cons;
        }
        return this.cons;
    },
    advice: function(){
        if (this.advice.length > 499){
            if (Template.instance().advice.get())
                return this.advice.substring(0, 500).trim();
            else
                return this.advice;
        }
        return this.advice;
    },
    hide: function(data){
        if (data === 'cons')
            return Template.instance().cons.get();
        if (data === 'pros')
            return Template.instance().pros.get();
        if (data === 'advice')
            return Template.instance().advice.get();
    }
});

Template.company_reviews.events({
    'click .show_more' : function(e,t){
        let name = e.currentTarget.id;
        if (name === 'pros')
            t.pros.set(! t.pros.get());
        if (name === 'cons')
            t.cons.set(! t.cons.get());
        if (name === 'advice')
            t.advice.set(! t.advice.get());
    }
})
