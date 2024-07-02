function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!";
  }  
  else if (feet <= 2000) {  
    return "That will be twenty bucks.";}
  else if (feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
  }

  // Write your code here!


function ternaryCheckCity(checkCity){
  if (checkCity==='NYC'){
  return "Ok, sounds good."
}
else if(checkCity!='NYC'){
  return "No go."

}
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    default:
      return 'Bye.'
  }
  // Write your code here!
}