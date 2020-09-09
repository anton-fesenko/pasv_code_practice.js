// Modify the spacify function so that it returns the given string with
// spaces inserted between each character.
function spacify(str) {
    let newStr = '';
    for (let i = 0; i < str.length - 1; i++){
        newStr += str[i] + ' ';
    }
    console.log (newStr);
    return newStr + str[str.length - 1];
}

// Complete the solution so that it reverses the string passed into it.
function solution(str){
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

// Implement the function unique_in_order which takes as argument a sequence and returns
// a list of items without any elements with the same value next to
// each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
    let arr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i]);
        }
    }
    return arr;
}

// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    let str = '';
//   x = x.toLowerCase();
    for (i = 0; i < x.length; i++) {
        str = x[i] + str;
    }
    return str.toLowerCase() ===  x.toLowerCase();
}