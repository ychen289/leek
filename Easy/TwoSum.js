/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples:

1) Input: nums = [3,2,4], target = 6
Output: [1,2]

2) Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};

/**
Personal Notes:
indexOf returns -1 if it doesn't find what you're looking for. Thus the if statement below 
it is just making sure diffIndex exist and doesnt equal to index (since we can't use the same num[index] twice.
 */

