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

Template.registerHelper("my_twitter", function(){
	return "Zero___Hero"
});

Template.registerHelper("my_project", function(){
	return "Tech Fights"
});

Template.registerHelper("my_email", function(){
	return "techfightsmail@gmail.com"
});
