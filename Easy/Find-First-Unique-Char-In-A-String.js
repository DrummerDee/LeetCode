/**
 * @param {string} s
/*Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.*/ 

 const firstUniqChar = function(s) {

    //for loop to iterate through each character 
    for(i = 0; i < s.length; i++) {
            if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
                 return i;
        
            }
        }
        return -1;
    }
    //P - a string
    // R - a number, index of first character that doesn't repeat
    //E - hiiiii => 0