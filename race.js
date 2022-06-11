let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
const adultRunners = 19;
const youthRunners = 17;
let runnerAge = 18;
// Condition checking
if(registerEarly && adultRunners){
console.log((raceNumber += 1000))
}else{
  console.log("false");
}

// // Condition Adult runner + Enregistrement à l'avance
if(runnerAge > 18 && registerEarly){
  console.log(`Your race start at 9:30 am, and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !registerEarly) {
  console.log(`Your race start at 11:00 am, and your race number is ${raceNumber}`);
  // Condition pour les YouthRunner + raceNumber attention car déjà initié plus haut en +1000
}else if(runnerAge <= 17){
  console.log(`Your race will start at 12:30 pm, and your race number is ${raceNumber -= 1000}`);
} else{
  console.log(`Your race start at 9:30 am, and your race number is ${raceNumber = Math.floor(Math.random()*18)}`);
}
