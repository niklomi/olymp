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
