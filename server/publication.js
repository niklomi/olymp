Companies.permit(['update', 'remove','insert']).ifHasRole('admin').apply();
Slack_c.permit(['update', 'remove','insert']).ifHasRole('admin').apply();

Meteor.publish('companies', function(id = undefined, name = undefined){
    check(id, Match.OneOf(String, null, undefined));
    check(name,Match.OneOf(String, null, undefined));
    if (name){
        return Companies.find({name_low : name});
    }
    if (id){

        return Companies.find(id);
    }
    return Companies.find({},
        {
            sort : {rating: -1, name: 1, average_salary: -1, people_rating: -1},
            fields: {
                name: 1, rating: 1, image:1, headquarters:1, workers_count: 1, average_salary: 1,
                people_rating: 1, work_life_balance: 1, interview_experience: 1, culture : 1
            }
        }
    );
});

Meteor.publish('single.edit', function(id){
    check(id, String);
    return Companies.find(id, {fields: {name: 1}});
});
