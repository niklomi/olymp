Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

sorting = function(name, order){
	switch (name) {
		case "rating":
			return { "rating" : order, "name" : 1, 'average_salary': -1, 'people_rating': -1};
			break;
		case "name":
			return { "name" : order, "rating" : -1};
			break;
		case "headquarters":
			return { "headquarters" : order};
			break;
		case "workers_count":
			return { "workers_count" : order};
			break;
		case "average_salary":
			return { "average_salary" : order};
			break;
		case "people_rating":
			return { "people_rating" : order};
			break;
		case "work_life_balance":
			return { "work_life_balance" : order};
			break;
		case "interview_experience":
			return { "interview_experience" : order};
			break;
		default:
			return false;
	}
}
