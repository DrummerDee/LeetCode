/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.*/
const isAnagram = function(s, t) {
    let sortS = s.split('').sort().join('');
    let sortT = t.split('').sort().join('');
    
    if(sortS == sortT){
        return true
    }else {
        return false
    }
        
    };
// P - two strings 
// R - a boolean 
// E - str1= 'racecar' , str2 = 'racecar' => true

module.exports = {isAnagram}