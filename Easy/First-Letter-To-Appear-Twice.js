/*Given a string s consisting of lowercase English letters, return the first letter to appear twice.*/

const repeatedCharacter = function(s) {
    
    let removeDupes = new Set();
    //iterate through each item  
       for (let string of s) {
    // check if set has string value
           if (removeDupes.has(string)) {
               return string;
           }
           removeDupes.add(string);
       }
   };
   