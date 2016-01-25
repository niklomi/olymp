String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

random = function(min = 1, max = 100){
    return Math.round(Math.random() * (max - min) + min);
}

letter_grade = function(data){
	let grade;
	if (data >= 95) {
        grade = "A+";
    }
    else if (85 <= data && data <= 94) {
        grade = "A";
    }
    else if (80 <= data && data <= 84) {
        grade = "B+";
    }
    else if (70 <= data && data <= 79) {
        grade = "B";
    }
    else if (65 <= data && data <= 69) {
        grade = "C+";
    }
    else if (55 <= data && data <= 64) {
        grade = "C";
    }
    else {
        grade = "F";
    }
	return grade;
}

letter_grade_color = function(data){
	let grade;
	if (data >= 85) {
        grade = "aa";
    }
    else if (data >= 70) {
        grade = "bb";
    }
    else if (data >= 55) {
        grade = "cc";
    }
    else {
        grade = "ff";
    }
	return grade;
}

interview_difficulty_color = function(data){
	let grade;
	if (data >= 90) {
        grade = "ff";
    }
    else if (65 <= data && data <= 89) {
        grade = "cc";
    }
    else if (35 <= data && data <= 64) {
        grade = "bb";
    }
    else {
        grade = "aa";
    }
	return grade;
}

grade_interview_difficulty = function(data){
    let grade;
	if (data >= 90) {
        grade = "very hard";
    }
    else if (65 <= data && data <= 89) {
        grade = "hard";
    }
    else if (35 <= data && data <= 64) {
        grade = "average";
    }
    else {
        grade = "easy";
    }
	return grade;
}

grade_interview_experience = function(data){
    let grade;
    if (53.3 <= data && data <= 80) {
        grade = "good";
    }
    else if (26.6 <= data && data <= 53.2) {
        grade = "normal";
    }
    else {
        grade = "bad";
    }
    return grade;
}

interview_experience_color = function(data){
    let grade;
    if (53.3 <= data && data <= 80) {
        grade = "aa";
    }
    else if (26.6 <= data && data <= 53.2) {
        grade = "bb";
    }
    else {
        grade = "cc";
    }
    return grade;
}

rating_color = function(data){
    let grade;
    if (data >= 66) {
        grade = "aa";
    }
    else if (33 <= data && data <= 65) {
        grade = "bb";
    }
    else{
        grade = "cc";
    }
    return grade;
}