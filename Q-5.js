/*
A cashier has currency notes of denominations 10, 50 and 100. If the
amount to be withdrawn is input through the keyboard,
find the total number of currency notes of each denomination the
cashier will have to give to the withdrawer.
*/ 


var amount=parseInt(prompt("Please enter the amount in multiples of hundred: "));
var notesHundred=Math.trunc((amount/100)); //parseInt() and .toFixed() can also be used instead of Math.trunc().
var notesFifty=Math.trunc((amount%100)/50);
var notesTen=Math.trunc(((amount%100)%50)/10);
console.log("Number of Notes of Hundred: ",notesHundred,"\n","Number of Notes of Fifty: ",notesFifty,"\n","Number of Notes of Ten: ",notesTen);