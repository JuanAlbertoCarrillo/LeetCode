/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

/** O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i;
        if(nums[i] > target) return i;
    }
    return nums.length;
};


/** O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sIImproved= function(nums, target) {
    if(nums.length===1){
        return target>nums[nums.length-1]?nums.length:nums.length-1;
    }

    let mid = nums.length%2;

    if(target === nums[mid]) return mid;
    
    if(target>nums[mid]){
        for (mid; mid <= nums.length-1; mid++) {
            if(nums[mid] === target) return mid;
            if(nums[mid] > target) return mid;
        }
    }
    if(target<nums[mid]){
        for (mid; mid >= 0; mid--) {
            if(nums[mid] === target) return mid;
            if(nums[mid] < target) return mid+1;
        }
    }

    if(mid<0){
        return mid+1;
    }

    return mid;
};


/** O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sIRefactored = function(nums, target) {
    let left = 0, right = nums.length - 1;

    // Binary search approach
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;  // Target found
        } else if (nums[mid] < target) {
            left = mid + 1;  // Move to the right half
        } else {
            right = mid - 1;  // Move to the left half
        }
    }

    return left;  // The correct insertion point when the target is not found
};