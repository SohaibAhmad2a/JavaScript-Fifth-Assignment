/* 
The Geometrizer:
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
a. Pass the radius to the function.
b. Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
a. Pass the radius to the function.
b. Calculate the area based on the radius, and output "The area is NN".
Circumference of circle = 2πr
Area of circle = πr^2
*/

var radius=parseFloat(prompt("Please enter the radius in meters: "));

function calcCircumference(radius){       //Parameter named radius is a local variable, it is not same as the radius variable defined on line 15 which is a global variable.
    return (2*(Math.PI)*radius).toFixed(2);            //However, If I don't specify any variable as parameter, then function will regard radius variable in this line as global variable, 
}                                         //and take value from line 15.
function calcArea(radius){
    return ((Math.PI)*radius*radius).toFixed(2);
}
console.log("The circumference of the circle is: ",calcCircumference(radius),"\n","The Area of the circle is: ",calcArea(radius));