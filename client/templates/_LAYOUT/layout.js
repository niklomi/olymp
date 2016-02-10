Template.layout.onCreated(function(){
	Session.setDefault('overlay', false);
	Session.setDefault('sortorder', 1);
	Session.setDefault('sort', false);
	Session.setDefault('seo', false);

	this.autorun(function(){
        FlowRouter.watchPathChange();
        checkSEO();
    });
});

Template.layout.onRendered(function(){
    $(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
});

Template.layout.helpers({
	show_overlay: function(){
		if (Session.get('overlay')) return true;
	}
});
