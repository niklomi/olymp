Companies.permit(['update', 'remove','insert']).ifHasRole('admin').apply();

Meteor.publish('all.preview', function(){
    return Companies.find({},
        {
            sort : {rating: -1, average_salary: -1, company: -1, people_rating: -1},
            fields: {
                name: 1, rating: 1, image:1, headquarters:1, workers_count: 1, average_salary: 1,
                people_rating: 1, work_life_balance: 1, interview_experience: 1
            }
        }
    );
});

Meteor.publish('single', function(id){
    check(id, String);
    return Companies.find(id);
});

Meteor.publish('single.edit', function(id){
    check(id, String);
    return Companies.find(id, {fields: {name: 1}});
});

Companies.before.update(function (userId, doc, fieldNames, modifier, options) {
    let set = modifier["$set"];

    if (fieldNames.length === 1 && fieldNames[0] === 'rating'){
        set.rating = rating(doc);
    }else {
        set.average_salary = set.s_soft_engineer;
        set.rating = rating(set);
    }

    modifier["$set"] = set;
});

Companies.before.insert(function (userId, doc) {
    doc.average_salary = doc.s_soft_engineer;
    doc.rating = rating(doc);
});
