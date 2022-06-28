/*
Write a function to test whether a given date is a weekend? If not how
many days to weekend
*/


function weekend(){
    var date=new Date(prompt("Please enter the date in mm/dd/yyyy format: "));
    var day=date.getDay();
    if (day===6 || day===0){
        return "It is a weekend.";
    }
    else{
        var remainingDays=6-day;
        return remainingDays;
    }
}
console.log(weekend());