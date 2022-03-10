let readLineSync = require("readline-sync");
console.log("Welcome to Naruto Game!!")
console.log("Press Enter to continue");
let placeHolder = readLineSync.question("");

let usrName = readLineSync.question("Please Enter your name ");
console.log("Hii " + usrName);
console.log("Press enter to start the Naruto game ");
let placeHolder2 = readLineSync.question("");

let questionArr = ["What is Naruto's favourite food? ", "Who is only member of team 7 from the Uchiha clan? ", "Who was Naruto's 1st Sensei? ", "What is Sasuke elder brother's name? ", "Sasuke is reincarnation of...", "Who is the coolest character of Naruto series? "];
let answerArr = ["ramen", "sasuke", "iruka", "itachi", "indra", "minato"];
let score = 0;

function narutoGame(questionP, answerP){
  let usrAns = readLineSync.question(questionP);
  if(usrAns === answerP){
    console.log("That's right!");
    score = score + 1;
    console.log("Your score is " + score);
  }else{
    console.log("That's wrong!");
    console.log("Correct answer is " + answerP);
    console.log("Your score is " + score);
  }
}
for(let i = 0; i<questionArr.length; i++){
  narutoGame(questionArr[i], answerArr[i]);
}
if(score === 6){
  console.log("Wow! You know a lot about Naruto Mr."+usrName + " You have my respect")
  console.log("Your final score is " + score);
}
console.log("Thanks for playing " + usrName);
