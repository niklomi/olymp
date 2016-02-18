Template.registerHelper("grade", function(data){
	return letter_grade(data);
});

Template.registerHelper("grade_color", function(data){
	return letter_grade_color(data);
});

Template.registerHelper("grade_interview_difficulty", function(data){
	return grade_interview_difficulty(data);
});

Template.registerHelper("interview_difficulty_color", function(data){
	return interview_difficulty_color(data);
});

Template.registerHelper("capitalize", function(data){
	return data.capitalize();
});

Template.registerHelper("grade_interview_experience", function(data){
	return grade_interview_experience(data);
});

Template.registerHelper("interview_experience_color", function(data){
	return interview_experience_color(data);
});

Template.registerHelper("rating_color", function(data){
	return rating_color(data);
});

Template.registerHelper('workersCount', function(data){
	if (data > 500000)
		return '500K+'
	else if (data > 100000)
		return '100K+'
	else if (data > 50000)
		return '50K+'
	else if (data > 10000)
		return '10K+'
	else if (data > 5000)
		return '5K+'
	else if (data > 1000)
		return '1K+'
	else if (data > 500)
		return '500+'
	else if (data > 100)
		return '100+'
	else return '10+'
});

Template.registerHelper("makeSalary", function(data){
	data = data.toString();
	let insert;
	if (data.length === 6)
		insert = data.slice(0, 3) + "," + data.slice(3);
	else if (data.length === 5)
		insert = data.slice(0, 2) + "," + data.slice(2);
	return `$ ${insert}`;
});

Template.registerHelper("my_twitter", function(){
	return "Zero___Hero"
});

Template.registerHelper("my_project", function(){
	return "Tech Fights"
});

Template.registerHelper("my_email", function(){
	return "techfightsmail@gmail.com"
});
