/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const set = new Set(nums)
    
    const duplicates = nums.filter(item => {
        if(set.has(item)){
            set.delete(item)
        }else {
            return item
        }     
    })
      return duplicates[0]
    }
    