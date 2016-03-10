rating = function({average_salary: salary, work_life_balance: work_life, people_rating, benefits, opportunities, senior_management: management}){
    let rating = (salary / 1800 * 0.6) + ((work_life - 50) * 0.5) + ((management - 50) * 0.4) + ((benefits - 50) * 0.3) + ((opportunities - 50) * 0.6) + (people_rating - 50);
    return Math.round(rating);
}
