checkSEO = function(){
  if (FlowRouter.current().route.group && FlowRouter.current().route.group.name === 'company'){
    Session.set('seo', true);
  } else{
    Session.set('seo', false);
  }
}

sorting = function(name, order){
  switch (name) {
    case "rating":
      return { "rating" : order, "name" : 1, 'average_salary': -1, 'people_rating': -1};
      break;
    case "name":
      return { "name" : order, "rating" : -1};
      break;
    case "headquarters":
      return { "headquarters" : order, "rating" : -1};
      break;
    case "workers_count":
      return { "workers_count" : order, "rating" : -1};
      break;
    case "average_salary":
      return { "average_salary" : order, "rating" : -1};
      break;
    case "culture":
      return { "culture" : order, "rating" : -1};
      break;
    case "people_rating":
      return { "people_rating" : order, "rating" : -1};
      break;
    case "work_life_balance":
      return { "work_life_balance" : order, "rating" : -1};
      break;
    case "interview_experience":
      return { "interview_experience" : order, "rating" : -1};
      break;
    default:
      return false;
  }
}
