/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 25;
if (votingAge > 18) {
  console.log("Can Vote");
} else if (votingAge < 18) {
  console.log("Can Not Vote");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let declared = "declared";
let conditional = 2;
if (conditional === 2) {
  declared = "Declared now changed";
}
console.log(declared);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var value = Number("1999");
console.log(value);

//Task d: Write a function to multiply a*b



function mul(a,b) {
  var c = a * b;
  console.log(c);
}
mul(10,8);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

let dogS = 7;

function dogYears(myAge) {
  var inDogYears = myAge * dogS;
  return (inDogYears);
}
console.log(dogYears(32));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// had to define dogs age

function feeding(dogsAge, dogsWeight) {
  let food = "";
  if(dogsAge <=.332){
    food = dogsWeight *.1
  }
  else if (dogsWeight <= 5 || dogsAge <= .5831) {
    food = dogsWeight * 0.05;
  } else if (dogsWeight >= 6 && dogsWeight <= 10) {
    food = dogsWeight * 0.04;
  } else if (dogsWeight >= 11 && dogsWeight <= 15) {
    food = dogsWeight * 0.03;
  } else if (dogsWeight > 15) {
    food = dogsWeight * 0.02;
  }
  console.log(food);
}
feeding(1,15);

/************************************************************** Task 4 **************************************************************/
// Rock (0), Paper (1), Sissors (2)
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// had to define rock paper sissors

let rock = 0
let paper = 1
let sissor = 2
function annoyingGame(userMove) {
  let computerMove = Math.floor(Math.random() * 3);
  //  computer has rock
  if (computerMove == 0 && userMove === 0) {
    console.log("Draw");
  } else if (computerMove === 0 && userMove === 1) {
    console.log("Win");
  } else if (computerMove === 0 && userMove === 2) {
    console.log("Lose");
  }
  // computer has paper
  else if (computerMove === 1 && userMove === 0) {
    console.log("Win");
  } else if (computerMove === 1 && userMove === 1) {
    console.log("Draw");
  } else if (computerMove === 1 && userMove === 2) {
    console.log("Lose");
  }
  // computer has sissors
  else if (computerMove === 2 && userMove === 0) {
    console.log("Win");
  } else if (computerMove === 2 && userMove === 1) {
    console.log("Lose");
  } else if (computerMove === 2 && userMove === 2) {
    console.log("Draw");
  }
}
annoyingGame(rock);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilometers = 45;
function kMconversion() {
  let miles = kilometers * 0.62137119;
  console.log(Math.round(miles));
}
kMconversion();

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 205;
function cm() {
  let centimeters = feet * 30.48;
  console.log(Math.round(centimeters));
}
cm();

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
let bottleA = 99;
do {
  console.log(
    `${bottleA} bottles of soda on the wall, ${bottleA} bottles of soda, take one down pass it around ${
      bottleA - 1
    } bottles of soda on the wall`
  );
  bottleA--;
} while (bottleA > 0);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
function gradeing(gradePoint) {
  if (gradePoint >= 90) {
    console.log("A");
  } else if (gradePoint >= 80 && gradePoint < 90) {
    console.log("B");
  } else if (gradePoint >= 70 && gradePoint < 80) {
    console.log("C");
  } else if (gradePoint >= 60 && gradePoint < 70) {
    console.log("D");
  } else if (gradePoint < 60) {
    console.log("F");
  }
}
gradeing(75);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
