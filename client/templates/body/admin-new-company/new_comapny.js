Template.new_company.onCreated(function(){
    let self = this;
    self.autorun(function(){
        self.subscribe('companies', Companies.findOne()._id);
    });
});

Template.new_company.helpers({
    one() { return Companies.findOne() }
})
