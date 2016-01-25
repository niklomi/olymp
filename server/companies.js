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

insert_beta_companies = function(){
    _.each(beta_companies, function(data){
        if (data.nationality)
        data.country = _Countries.getName(data.country);

        if (data.link)
        data.link = addhttp(data.link);

        if (data.interview_difficulty)
        data.interview_difficulty = parseFloat(data.interview_difficulty);

        if (data.workers_count)
        data.workers_count = parseInt(data.workers_count);

        if (data.work_life_balance)
        data.work_life_balance = parseFloat(data.work_life_balance);

        if (data.revenue)
        data.revenue = parseFloat(data.revenue);

        if (data.program_lang)
        data.program_lang = data.program_lang.split(';');

        if (data.top_universities)
        data.top_universities = parseInt(data.top_universities.replace('%',''));

        if (data.people_rating)
        data.people_rating = parseFloat(data.people_rating);

        if (data.senior_management)
        data.senior_management = parseFloat(data.senior_management);

        if (data.culture)
        data.culture = parseFloat(data.culture);

        if (data.benefits)
        data.benefits = parseFloat(data.benefits);

        if (data.opportunities)
        data.opportunities = parseFloat(data.opportunities);

        if (data.nationality){
            let array = [];
            _.each(data.nationality.split(';'), function(country){
                array.push(_Countries.getName(country));
            });
            data.nationality = array;
        }

        if (data.entry_schools)
        data.entry_schools = data.entry_schools.split(';');

        if (data.entry_major)
        data.entry_major = data.entry_major.split(';');

        if (data.entry_degree)
        data.entry_degree = parseInt(data.entry_degree.replace('%',''));

        if (data.interview_experience)
        data.interview_experience = parseFloat(data.interview_experience);

        if (data.s_soft_engineer)
        data.s_soft_engineer = parseFloat(data.s_soft_engineer);

        if (data.s_soft_senior_engineer)
        data.s_soft_senior_engineer = parseFloat(data.s_soft_senior_engineer);

        if (data.s_product_manager)
        data.s_product_manager = parseFloat(data.s_product_manager);

        if (data.s_product_senior_manager)
        data.s_product_senior_manager = parseFloat(data.s_product_senior_manager);

        if (data.s_system_engineer)
        data.s_system_engineer = parseFloat(data.s_system_engineer);

        if (data.s_project_manager)
        data.s_project_manager = parseFloat(data.s_project_manager);

        Companies.insert(data);
    });
}
