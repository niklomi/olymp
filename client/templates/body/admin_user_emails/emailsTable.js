Template.emailsTable.onCreated(function(){
  let self = this;
  self.subscribe('emails');
});

Template.emailsTable.helpers({
  emails: function(){
    return Emails.find();
  },
  emailsCount: function(){
    return Emails.find().count();
  }
});
