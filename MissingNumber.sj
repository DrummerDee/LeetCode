/**
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * P - numbers
   R - missing number from the list 
   E - [1,3] => 2 [0,2] => 1
 */
var missingNumber = function(nums) {
 // first lets sort the numbers in chronogical order 
    let sortedNums = nums.sort((a, b) =>  a - b)
// create a variable to hold numbers that exist and compare it 
    let storage = []
// create a for loop to iterate through the list of numbers and add them to storage
    for(let i = 0; i <=nums.length; i++){
    //if int in num doesn't equal to i return it.
       if(nums[i]!==i){
            return i;
        }
    }
    return storage
};