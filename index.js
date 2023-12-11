let ride = 0;
let city = "NYC";
let tip = "Generous";
function scuberGreetingForFeet(ride){
  if(ride <= 400){
    console.log("This one is on me!");
    return("This one is on me!")
  }
  if(ride >= 401 && ride <= 2000){
    console.log("That will be twenty bucks.")
    return("That will be twenty bucks.")
  }
  if(ride >= 2001 && ride <=2500){
    return("I will gladly take your thirty bucks.")
  }
  if(ride >=2501){
    return("No can do.")
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.' 
}
  


function switchOnCharmFromTip(tip){
  switch (tip){
    case tip = "generous":
      console.log("Thank you so much.");
      return("Thank you so much.");
    case tip = "not as generous":
      console.log("Thank you.");
      return("Thank you.");
    default:
      console.log("Bye.");
      return("Bye.");

  }
}