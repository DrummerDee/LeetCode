/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */
 var reverse = function(x) { 
    let reverseAsStr = parseInt(x.toString().split('').reverse().join(''));
    if (reverseAsStr > Math.pow(2,31)) return 0
    else if ( x < 0 ) return reverseAsStr * -1
    else return reverseAsStr
      
  }
  // P - an integer 
  // R - the integer reversed even if it's negative 
  // E - 23 => 32
  // If the number has a 0 at the end if should be dropped 