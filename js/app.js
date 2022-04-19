function btn1() {
  document.getElementById("btn1").style.background = "green";
}
function btn2() {
  document.getElementById("btn2").style.background = "green";
}
function btn3() {
  document.getElementById("btn3").style.background = "green";
}
function btn4() {
  document.getElementById("btn4").style.background = "green";
}


let userAnswers = [] ;
function firstQues(){
  let answer1 = prompt("Do you like watching matches?") ;
  if (answer1 == ""){
    answer1 = "invalid";
    alert("invalid answer");
  }
  userAnswers.push(answer1); 
  
}
function secondQues(){
 let answer2 = prompt("Do you have a dog?");
  if (answer2 == ""){
    answer2 = "invalid";
    alert("invalid answer");
  }
  userAnswers.push(answer2); 
  
}
function thirdQues(){
  let answer3 = prompt("Are you enjoying learning JS?");
   if (answer3 == ""){
     answer3 = "invalid";
     alert("invalid answer");
   }
   userAnswers.push(answer3); 
 }

 firstQues();
 secondQues();
 thirdQues();
console.log(userAnswers);


