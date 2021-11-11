/***
 - it asks us to enter a maximum no 
 - you then have to guess the no b/w 1 and the maximum no. if its above the correct answer, is states too high. If below it states too low
 -  if im correct it tells me how many guesses 
 - using q quit thes game immediately.
 */

 /**
  * create a prompt that asks user to pick max number
  * create a prompt that asks user guess correct no 
  * create a variable that select random nos for the answer
  * logic to check how high or low 
  * logic to check if correct and vise versa
  * q to quit
  * quality improvements. write so that if number is less than omne it deos not accept it.
  * if its not a number flag
  * */

//logic

let maxNumber= parseInt(prompt("Please enter the max number to proceed"));

 while(!maxNumber){
     maxNumber= parseInt(prompt('Please enter a valid number'));
 } 
 
 const answer= Math.floor(Math.random()*maxNumber+1)
 console.log(maxNumber);
 console.log(answer);
let pickNumber=prompt("Please enter the correct number")
let attempts=1;

while(parseInt(pickNumber)!==answer){
    if(pickNumber==='q'){
        console.log('Quitting now')
        break};
    attempts++;
    if (parseInt(pickNumber)<answer){
        pickNumber= prompt("Number too low. Please try again");
     }else {
        pickNumber= prompt("Number is too High. Please try again");
     } 
}

 if(parseInt(pickNumber)===answer){
     alert (`Congrats! it took you ${attempts} try(s) to get the correct answer`);
 }


