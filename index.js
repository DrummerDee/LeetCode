//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


var missingNumber = function(nums) {
  let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    return total - sum     
  
    } 

