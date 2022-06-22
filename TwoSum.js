const twoSum = (nums, target) => {
    let hash = {}; //storage for reference 
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] >= 0) { //keeps it from being falsey
            return [hash[target-nums[i]],i]
        } else {
            hash[nums[i]] = i 
        }

    }
} // this finds the index will return [0,1]