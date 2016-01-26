Template.overlay_text.helpers({
    title: function(){
        return Session.get('overlay').title;
    },
    text: function(){
        return Session.get('overlay').text;
    }
})
