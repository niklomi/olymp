Template.overlay.onRendered(function(){
    $(window).on('keydown', function(e){
		if (e.which === 27) Session.set('overlay',false);
	});
    $('.overlay').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.overlay_wrap').css('overflow','auto');
    });

});

Template.overlay.events({
    'click .button--close, click a': function(event){
        Session.set('overlay',false);
    }
});

Template.overlay.helpers({
    data: function(){
        let data = Session.get('overlay');
        return data.template;
    }
})
