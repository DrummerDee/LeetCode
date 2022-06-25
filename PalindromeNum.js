/** P(number) R(boolean) E(121 == 121) */

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