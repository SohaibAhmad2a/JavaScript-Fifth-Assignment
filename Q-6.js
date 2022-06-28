/*
Write a function that will take an array and generate a mirror array of
it.
*/

var gArray=[2,1,5,6,3,-3];
function mirror(givenArray){                    //The goal can also be achieved with recurrsive function and if/else condition.
    var len=(givenArray.length)-1;
    for (i=len;i>=0;i--){
        givenArray.push(givenArray[i]);
    }
    return givenArray;
}
console.log(mirror(gArray));