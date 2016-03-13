Template.registerHelper("grade", function(data){
  return gradeLetter(data);
});

Template.registerHelper("gradeColor", function(data){
  return gradeColor(data);
});

Template.registerHelper("gradeInterviewDifficulty", function(data){
  return gradeInterviewDifficulty(data);
});

Template.registerHelper("gradeColorInterviewDifficulty", function(data){
  return gradeColorInterviewDifficulty(data);
});

Template.registerHelper("gradeInterviewExperience", function(data){
  return gradeInterviewExperience(data);
});

Template.registerHelper("gradeColorInterviewExperience", function(data){
  return gradeColorInterviewExperience(data);
});

Template.registerHelper("gradeColorRating", function(data){
  return gradeColorRating(data);
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
