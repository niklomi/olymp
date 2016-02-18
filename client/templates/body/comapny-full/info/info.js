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
        let text = encodeURI(`$${this.salaries.soft_engineer} - Average salary of Sofware Engineer in ${this.name_low}`),
        url = encodeURI(`http://techfights.com/c/${this.name_low}/info`),
        hashtags = encodeURI(this.name.toLowerCase()),
        data = {text,url,hashtags};

        return data;
    },
    revenue: function(){
        let revenue = this.revenue;
        if (revenue > 100000)
            return '$100+ Billion'
        else if (revenue > 50000)
            return '$50+ Billion'
        else if (revenue > 10000)
            return '$10+ Billion'
        else if (revenue > 1000)
            return '$1+ Billion'
        else if (revenue > 500)
            return '$500+ Million'
        else if (revenue > 100)
            return '$100+ Million'
        else if (revenue > 1)
            return '$1+ Million'
        else return 'Lees than $1 Million'
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
