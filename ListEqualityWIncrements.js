class Solution {
    solve(nums) {
        let min = Math.min(...nums)
        let counter = 0
        for (let i = 0; i < nums.length; i++) {
            counter += nums[i] - min
        }
        return counter
    }
}