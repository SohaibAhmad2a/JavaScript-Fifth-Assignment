/*
Write a JavaScript program act as number guessing game and
give user chance to try 3 times if guess incorrect and then ask user if
he/she wants to play game again
a. Generate Random number between 1 to 100
b. Ask user to guess number
c. User will have 3 chances, if user enters incorrect number it
should say that “Incorrect, Please try again”
d. If user guess right on first, second or third try is should say “You
are right, You won”
e. Then it asks the user if he/she wants to play again, if user says
yes, then the whole process starts from point (a) again
f. If user says no then game end saying “Thank you for playing
with use today”
g. After point ( c ) if user failed 3 times then it should say “You
Lose” and game should ask if user wants to play again, if user
say yes then it should start from point (a) again.
*/


var number = Math.floor(Math.random()*100+1);
var i=0;
while (i<3){
    var numb=parseInt(prompt("Enter the Number between 1 to 100: "));
    if (numb===number){
        alert("You are right, You won!")
        var playagain=prompt("Do you want to play again, Say Yes or No: ");
        if (playagain.toLowerCase()==="yes"){
            number = Math.floor(Math.random()*100+1);
            i=-1;
        }
        else if (playagain.toLowerCase()==="no"){
            alert("Thank you for playing with us today.")
            break;
        }
        else{
            alert("You have entered a wrong input.")
            alert("Thank you for playing with us today.")
            break;
        }
    }
    if (numb!==number && i===2){
        alert("You Lose.");
        var playagain=prompt("Do you want to play again, Say Yes or No: ");
        if (playagain.toLowerCase()==="yes"){
            number = Math.floor(Math.random()*100+1);
            i=-1;
        }
        else if (playagain.toLowerCase()==="no"){
            alert("Thank you for playing with us today.")
            break;
        }
        else{
            alert("You have entered a wrong input.")
            alert("Thank you for playing with us today.")
            break;
        }
    }
    i++;
}

