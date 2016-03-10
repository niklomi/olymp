Template.registerHelper("grade", function(data){
  return letterGrade(data);
});

Template.registerHelper("grade_color", function(data){
  return letterGradeColor(data);
});

Template.registerHelper("interviewDifficultyGrade", function(data){
  return interviewDifficultyGrade(data);
});

Template.registerHelper("interviewDiffGradeColor", function(data){
  return interviewDiffGradeColor(data);
});

Template.registerHelper("interviewExpGrade", function(data){
  return interviewExpGrade(data);
});

Template.registerHelper("interviewExpGradeColor", function(data){
  return interviewExpGradeColor(data);
});

Template.registerHelper("ratingGradeColor", function(data){
  return ratingGradeColor(data);
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

Template.registerHelper("myTwitter", function(){
  return "Zero___Hero"
});

Template.registerHelper("myEmail", function(){
  return "techfightsmail@gmail.com"
});
