function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return "This one is on me!";
  }
  else if(distance > 2000 && distance < 2500){
    return "I will gladly take your thirty bucks.";
  } 
  else{
    return "No can do.";
  }
  // Write your code here!
}
// console.log('====================================');
// console.log(scuberGreetingForFeet(200));
// console.log('====================================');
// console.log('====================================');
// console.log(scuberGreetingForFeet(2200));
// console.log('====================================');
// console.log('====================================');
// console.log(scuberGreetingForFeet(2600));
// console.log('====================================');
// let nyc = 'ncfnc'

function ternaryCheckCity(city){
  // Write your code here!
  // if(city === 'NYC'){
  //   return "Ok, sounds good.";
  // }
  // else{
  //   return "No go.";
  // }
return city === 'NYC' ? `Ok, sounds good.` : `No go.`;
}
// console.log('====================================');
// console.log(ternaryCheckCity('paris'));
// console.log('====================================');

function switchOnCharmFromTip(swtchrm){
  // Write your code here!
  switch(swtchrm){
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
      return `Thank you.`;
    default:
     return `Bye.`;
  }
}

// let name = 'john';
// if (name == 'john') {
//   console.log('it is john');
// } else {
//   console.log('it is not john');
// }

// false ? console.log('it is john') : console.log('it is not john') ;