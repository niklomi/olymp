Template.layout.onCreated(function(){
	Session.setDefault('overlay',false);
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
