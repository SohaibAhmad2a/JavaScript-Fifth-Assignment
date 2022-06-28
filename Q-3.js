/*
Write a JavaScript function that checks whether a passed string is a
palindrome or not? A palindrome is the word, phrase, or sequence
that reads the same backward as forward, e.g., madam, Tibit.
*/

var gstring=prompt("Please enter the string: ");

function palindromee(giveString){
    var lStg=giveString.length;
    var bol=true;
    for (i=1;i<=lStg;i++){
        if ((giveString.charAt(i-1)).toLowerCase()!==(giveString.charAt(lStg-i)).toLowerCase()){
            bol=false;
            return "The given string is not a Palindrome.";
        }
    }
    if(bol){
        return "The string is a Palindrome."
    }
}

console.log(palindromee(gstring));