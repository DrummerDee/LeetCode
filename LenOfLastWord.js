//Given a string s consisting of words and spaces, return the length of the last word in the string.

// input is string 
// output is the length of the LAST word within the string 
// Hello world -> world 
// last word = s[s.length - 1]

var lengthOfLastWord = function(s) {
    let separate = s.trim().split(' ');
    let last = separate[separate.length - 1];
    return last.length
};