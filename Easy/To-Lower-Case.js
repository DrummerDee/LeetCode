/*Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.*/

const toLowerCase = function(s) {
    //split the string 
   let splitTheStr = s.split('');
   //init empty array 
   let result = [];
   //create for loop 
   for(let i = 0; i < splitTheStr.length; i++){
       result.push(splitTheStr[i].toLowerCase())
   }
       //return array but join elements 
       return result.join('')
   };