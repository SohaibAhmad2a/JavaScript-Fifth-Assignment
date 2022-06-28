/* Write a function that computes the factorial of a number*/

//This solution can be crafted with for loop much easily but we are supposed to do with recursive function. 
var provideNumber=prompt("Please Enter the Number Whose Factorial You Want to Calculate");
function factorial(number){ 
    if (number<0){
        console.log("Invalid Number");
    }
    else if(number===0){
        return 1;
    }
    else if (number===1){
        return number;
    }
    else{
        return number*factorial(number-1);
    }
}
console.log(factorial(provideNumber));