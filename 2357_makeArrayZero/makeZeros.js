
/** 2357. Make Array Zero by Subtracting Equal Amounts 
 * You are given a non-negative integer array nums. In one operation, you must:
 * 
 * 1) Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
 * 2) Subtract x from every positive element in nums.
 * 
 * Return the minimum number of operations to make every element in nums equal to 0.
 * 
 * Example 1:
 * Input: nums = [1,5,0,3,5]
 * Output: 3
 * 
 * Explanation:
 * In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
 * In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
 * In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperationsBrute = function(nums) {
    nums.sort();
    let restNum=0, count=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            continue;
        }
        restNum=nums[i];
        for(let j=i; j<nums.length; j++){
            nums[j]-=restNum;
        }
        count++;
    }
    return count;
};

const minimumOperationsOneLiner = function(nums) {
    return new Set(nums.filter(x => x !== 0)).size
};

let nums = [1,5,0,3,5];
let nums2 = [1,5,0,3,5];
console.log('minimum operations: '+ minimumOperationsBrute(nums))
console.log('minimum operations: '+ minimumOperationsOneLiner(nums2))
