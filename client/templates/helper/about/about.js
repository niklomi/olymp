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
    }
})
