Companies.before.update(function (userId, doc, fieldNames, modifier, options) {
    let set = modifier["$set"];
    if (fieldNames.length === 1 && fieldNames[0] === 'rating'){
        set.rating = rating(doc);
    } else if (set.rating){
        set.average_salary = set['salaries.soft_engineer'];
        set.rating = rating(set);
    } else if (set['salaries.soft_engineer']){
        set.average_salary = set['salaries.soft_engineer'];
    }

    modifier["$set"] = set;
});

Companies.after.insert(function (userId, doc) {
  tweetNewCompany(doc);
});

Companies.before.insert(function (userId, doc) {
    doc.average_salary = doc.salaries.soft_engineer;
    doc.rating = rating(doc);
});

update_all_rating = function(make_null = false){
    let companies = Companies.find().fetch();

    _.each(companies, function(data){
        if (make_null){
            data.rating = 0;
            data.average_salary = 0;
        }

        Companies.update(data._id, {$set : {rating: 0}});
    });
}

update_all_company= function(){
    // _.each(Companies.find().fetch(), function(sss){
    //     if (!sss.name_low) Companies.update(sss._id, {$set : {name :sss.name}})
    // });
    // if (Companies.findOne().revenue <= 1000){
    //     _.each(Companies.find().fetch(), function(company){
    //         Companies.update(company._id, {$set : {revenue : company.revenue * 1000}})
    //     });
    // }
    //
    // if (Companies.findOne().workers_count <= 1000){
    //     _.each(Companies.find().fetch(), function(company){
    //         Companies.update(company._id, {$set : {workers_count : company.workers_count * 1000}})
    //     });
    // }
    //
    // if (Companies.findOne().average_salary <= 1000){
    //     _.each(Companies.find().fetch(), function(company){
    //         for (var key in company.salaries){
    //             if (key === 'soft_engineer')
    //                 Companies.update(company._id, { $set : {'salaries.soft_engineer' : company.salaries[key] * 1000}})
    //             if (key === 'soft_senior_engineer')
    //                 Companies.update(company._id, { $set : {'salaries.soft_senior_engineer' : company.salaries[key] * 1000}})
    //             if (key === 'product_manager')
    //                 Companies.update(company._id, { $set : {'salaries.product_manager' : company.salaries[key] * 1000}})
    //             if (key === 'product_senior_manager')
    //                 Companies.update(company._id, { $set : {'salaries.product_senior_manager' : company.salaries[key] * 1000}})
    //             if (key === 'system_engineer')
    //                 Companies.update(company._id, { $set : {'salaries.system_engineer' : company.salaries[key] * 1000}})
    //             if (key === 'project_manager')
    //                 Companies.update(company._id, { $set : {'salaries.project_manager' : company.salaries[key] * 1000}})
    //         }
    //     });
    // }
}

Meteor.methods({
    insert_company: function(data){
        if (!Meteor.user() && !Roles.userIsInRole(Meteor.userId(), ['admin'])) return false;
        Schema.CompaniesSchema.validate(data);

        Companies.insert(data);
    },
    update_company: function(data, id){
        if (!Meteor.user() && !Roles.userIsInRole(Meteor.userId(), ['admin'])) return false;
        check(id, String);
        Schema.CompaniesSchema.validate(data, {modifier: true});

        Companies.update(id, data);
    },
    user_edit: function(data){
        check(data,{
            key: String,
            value: String,
            url: String,
            name: String
        });

        Slack.send({
          text: "Edit",
          channel: "olymp_user_edit",
          attachments: [
            {
              fallback: "Edit company",
              fields: [
                { title: "Key", value: data.key },
                { title: "Value", value: data.value },
                { title: "Approve", value: data.url },
                { title: "Company Name", value: data.name }
              ]
            }
          ]
        });
    }
})

insert_beta_companies = function(){
    _.each(beta_companies, function(data){
        let new_data = {
            salaries : {}
        };

        new_data.name = data.name;

        if (data.link)
        new_data.link = addhttp(data.link);

        new_data.image = data.image;
        new_data.big_image = data.big_image;

        if (data.nationality)
        new_data.country = _Countries.getName(data.country);

        if (data.interview_difficulty)
        new_data.interview_difficulty = parseFloat(data.interview_difficulty);

        if (data.workers_count) new_data.workers_count = parseInt(data.workers_count);

        if (data.work_life_balance) new_data.work_life_balance = parseFloat(data.work_life_balance);

        new_data.full_name = data.full_name;
        new_data.founded = data.founded;

        if (data.revenue)
        new_data.revenue = parseFloat(data.revenue);

        new_data.headquarters = data.headquarters;

        if (data.program_lang)
        new_data.program_lang = data.program_lang.split(';');

        if (data.top_universities)
        new_data.top_universities = parseInt(data.top_universities.replace('%',''));

        if (data.people_rating)
        new_data.people_rating = parseFloat(data.people_rating);

        if (data.senior_management)
        new_data.senior_management = parseFloat(data.senior_management);

        if (data.culture)
        new_data.culture = parseFloat(data.culture);

        if (data.benefits)
        new_data.benefits = parseFloat(data.benefits);

        if (data.opportunities)
        new_data.opportunities = parseFloat(data.opportunities);

        new_data.remote_friendly = data.remote_friendly === 'yes' ? true : false;

        if (data.nationality){
            let array = [];
            _.each(data.nationality.split(';'), function(country){
                array.push(_Countries.getName(country));
            });
            new_data.nationality = array;
        }

        if (data.entry_schools)
        new_data.entry_schools = data.entry_schools.split(';');

        if (data.entry_major)
        new_data.entry_major = data.entry_major.split(';');

        if (data.entry_degree)
        new_data.entry_degree = parseInt(data.entry_degree.replace('%',''));

        if (data.interview_experience)
        new_data.interview_experience = parseFloat(data.interview_experience);

        if (data.soft_engineer)
        new_data.salaries.soft_engineer = parseFloat(data.soft_engineer);

        if (data.soft_senior_engineer)
        new_data.salaries.soft_senior_engineer = parseFloat(data.soft_senior_engineer);

        if (data.product_manager)
        new_data.salaries.product_manager = parseFloat(data.product_manager);

        if (data.product_senior_manager)
        new_data.salaries.product_senior_manager = parseFloat(data.product_senior_manager);

        if (data.system_engineer)
        new_data.salaries.system_engineer = parseFloat(data.system_engineer);

        if (data.project_manager)
        new_data.salaries.project_manager = parseFloat(data.project_manager);

        Companies.insert(new_data);
    });
}
