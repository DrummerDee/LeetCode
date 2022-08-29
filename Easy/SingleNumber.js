/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. */

let singleNumber = function(nums) {


    nums.sort((a,b)=>a-b);
       for(let i= 0; i< nums.length; i++){
           nums[i] !== nums[i+1]
           if(nums[i] !== nums[i+1]){
               return nums[i];
           }
           i++;
       }
   }

//P - array of integers
// R - integer that's non-repeating 
// E - [1,2,1] => 2