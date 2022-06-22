/** Find the number that is a palindrome ex: 123 44 */
 const isPalindrome = (x) => {
    let backwards = Number(x.toString().split('').reverse().join('')) 
    if(x < 0) {
       return false 
    } else if(backwards === x){
        return true         
    } else {
        return false
    }
};