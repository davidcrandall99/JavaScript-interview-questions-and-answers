let palindrome = x => {

    //conversts x to string, in case a number is passed. If using TS or with a conditional statement, this can be validated more strictly
    x = x.toString();

    //define regex to remove whitespace and special characters
    let cleaner = /[\W_]/g;

    //remove all spaces and special characters to test the palindrome
    let lowercased = x.toLowerCase().replace(cleaner, "");

    //make a copy of the truncated string, and reverse it to compare
    let reversed = lowercased.split("").reverse().join("");

    //compare the two. If a palindrome, it will return 'true'. Otherwise, it will return 'false'
    return reversed === lowercased;
}

console.log(palindrome("racecar")); //return true
console.log(palindrome("cars")); // return false
console.log(palindrome(1234321)); // return true
console.log(palindrome('rats live on no evil star')); // return true
console.log(palindrome('go hang a salami, i\'m a lasagna hog')); //should return true
console.log(palindrome('god! a red nugget! A fat egg under a dog!')); //should return true
console.log(palindrome('all you need is love. love is all you need')); //should return false