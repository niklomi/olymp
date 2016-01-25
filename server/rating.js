rating = function(data){
    let salary = data.average_salary,
    work_life = data.work_life_balance,
    people_rating = data.people_rating,
    benefits = data.benefits,
    opportunities = data.opportunities,
    management = data.senior_management;

    let rating = ((salary / 1.8) * 0.5 ) + (work_life * 0.05) + (management * 0.05) + (benefits * 0.05) + (opportunities * 0.05) + (people_rating * 0.3);
    return Math.round(rating);
}



Meteor.startup(function(){

    if (Companies.find().count() === 3){
        for (let i=0;i<25;i++){

        let data = {
            name: Fake.word(),
            link: Fake.word(),
            image: 'google.png',
            big_image: 'google-big.jpg',
            country: Fake.word(),
            interview_difficulty: random(),
            workers_count: random(),
            work_life_balance: random(),
            full_name: Fake.word(),
            founded: random(),
            revenue: random(),
            headquarters: Fake.word(),
            program_lang: ['sjava','c#','php'],
            top_universities: random(),
            people_rating:random(),
            senior_management: random(),
            culture: random(),
            benefits: random(),
            opportunities: random(),
            remote_friendly: 'Yes',
            nationality: ['USA','India','Russia'],
            entry_schools: '',
            entry_major: '',
            entry_degree: '',
            interview_experience: random(),
            s_soft_engineer: random(80,180),
            s_soft_senior_engineer: random(80,180),
            s_product_manager: random(80,180),
            s_product_senior_manager: random(80,180),
            s_system_engineer: random(80,180),
            s_project_manager: random(80,180)
        }

        // insert_company(data);

        }
    }
});
