rating = function(data){
    let salary = data.average_salary,
    work_life = data.work_life_balance,
    people_rating = data.people_rating,
    benefits = data.benefits,
    opportunities = data.opportunities,
    management = data.senior_management;

    let rating = ((salary / 1.8) * 0.40 ) + (work_life * 0.1) + (management * 0.05) + (benefits * 0.05) + (opportunities * 0.15) + (people_rating * 0.25);
    return Math.round(rating);
}
