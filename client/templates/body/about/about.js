var _ids = ["contact", "newcompany"];

Template.about.onRendered(function(){
    _.each(_ids, function(data){
        if (FlowRouter.current().context.pathname.indexOf(data) > 0)
    		document.getElementById(data).scrollIntoView();
    })
});

Template.about.events({
    'click #grades':function(event){
        let data = {
            template: "grade_FAQ"
        }
        Session.set('overlay', data);
    },
    'click #add_new_company': function(){
        let data = {
            template: "overlay_text",
            title: "How to add new company?",
            text: "Currently most of the data is dependent on the opinions of employees and if you can provide all the necessary data (like every company has in list), or show me where I can take it, then <a href='/about#contact'>contact</a>  me."
        }
        Session.set('overlay', data);
    }
})
