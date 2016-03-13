Template.poloskaSubscribe.onCreated(function(){
  this.error = new ReactiveVar();
});

Template.poloskaSubscribe.helpers({
  error: () => Template.instance().error.get()
});

Template.poloskaSubscribe.events({
  'submit #subscribeEmail': function(e, t){
    e.preventDefault();
    let email = e.target.email.value.trim();
    if (email.length === 0) return false;
    if (!checkEmail(email)) {
      $('#email').addClass('animated shake');
    } else {
      Meteor.call('emailSubscribe', email, function(err, res){
        if (!err){
          e.target.email.value = '';
          $('#emailSubscribeButton').text('Great!');
          setTimeout(function () {$('#emailSubscribeButton').text('Subscribe');}, 3000);
        } else if (err) {
          t.error.set(`${err.reason}`);
          setTimeout(function () {t.error.set(false)}, 6000);
        }
      });
    }
  }
})
