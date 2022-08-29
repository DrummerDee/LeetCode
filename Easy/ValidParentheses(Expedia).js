/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */
var isValid = function(s) {
    const newStr = s.replace(/\(\)|\{\}|\[\]/g, '');
     
     if (s.length === newStr.length) return false;
     if (!newStr) return true;
 
     return isValid(newStr);
 };
// This problem solutin uses regular expression and a conditional  