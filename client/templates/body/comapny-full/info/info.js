Template.company_info.helpers({
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
        let text = encodeURI(`$${this.salaries.soft_engineer},000 - Average salary of Sofware Engineer in ${this.name}`),
        url = encodeURI("http://techfights.com"),
        hashtags = encodeURI(this.name.toLowerCase()),
        data = {text,url,hashtags};

        return data;
    }
});

Template.company_info.events({
    'click #faq-grades':function(event){
        let data = {
            template: "grade_FAQ"
        }
        Session.set('overlay', data);
    }
})
