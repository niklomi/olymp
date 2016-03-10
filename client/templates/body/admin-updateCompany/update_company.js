Template.update_company.onCreated(function(){
    let self = this;
    self.autorun(function(){
        let id = Session.get('update');
        self.subscribe('companies', id);
    });
});

Template.update_company.helpers({
    one() { return Companies.findOne(Session.get('update')) }
});
