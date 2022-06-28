/* 
Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables 
*/

// I will only write code for the second part

var length=parseFloat(prompt("Please enter the length: "));
var width=parseFloat(prompt("Please enter the width: "));
function area(paralen,parawid){       // You can write function without the parameter to calculate area, but I am forced to have two parameter because of the requirement of question.
    return (paralen*parawid).toFixed(2);
}
console.log("The area of the rectangle is: ", area(length,width));