


function scuberGreetingForFeet(a){
 if (a <= 400)
 return ('This one is on me!');
 else if (a >= 2000 && a < 2500 )
 return ('I will gladly take your thirty bucks.');
 else  (a < 2500) 
 return ('No can do.');
}




function ternaryCheckCity(b){
  if (b == 'NYC')
  return ('Ok, sounds good.')
  else return ('No go.')
}


function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return ('Thank you so much.');
      break;
  case 'not as generous': 
      return ("Thank you.");
      break;
  default:
      return ("Bye.");
  }
}