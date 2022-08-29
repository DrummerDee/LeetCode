//Given an integer x, return true if x is palindrome integer.
const isPalindrome = (x) => {
    let backwards = Number(x.toString().split('').reverse().join('')) 
    if(x < 0) {
       return false 
    } else if(backwards === x){
        return true         
    } else {
        return false
    }

    //P-
    //R - 
    // E -
    
};