/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/
// P - an array of integers
// R - boolean if a repeating number is present 
// E - [1,2,2,3] => true 


let containsDuplicate = function(nums) {
    // create storage
       let storage = {}
       
   // create loop 
       for (let i = 0; i< nums.length; i++){
           //compare nums to storage 
           if(storage[nums[i]] === undefined){
               storage[nums[i]] = 0
           }else {
               return true
           }
       }
       return true
   };