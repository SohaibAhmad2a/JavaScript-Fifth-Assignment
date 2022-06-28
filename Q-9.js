/*
Write a function to add weeks in current date
*/


function Add(weeky){
    var todayDate=new Date();
    todayDate.setDate(todayDate.getDate() + weeky*7);
    return todayDate;
}
console.log(Add(1));

function Addy(year){                                         //It is not the demand of the question, I created it for my understanding. It is to add years in current date
    var todayDate=new Date();
    todayDate.setFullYear(todayDate.getFullYear() + year);
    return todayDate;
}
console.log(Addy(1));

function Addm(month){                                       //It is not the demand of the question, I created it for my understanding. It is to add months in current date
    var todayDate=new Date();
    todayDate.setMonth(todayDate.getMonth() + month);
    return todayDate;
}
console.log(Addm(1));



