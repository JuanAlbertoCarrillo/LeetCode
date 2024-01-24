/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

let nums = [1,6,11,15,7,0,4,5,9,2];
let target= 9;

let simpleMapHash = new Map();

for(let i=0; i<nums.length; i++){
    let subNum = target - nums[i];
    let mapNum = simpleMapHash.get(subNum);
    if(mapNum!= undefined && mapNum>=0){
        return [mapNum, i];
    }
    simpleMapHash.set(nums[i],i);
}

/**
 * function twoSum(nums, target) {
  const numToIndex = {}; // Create an empty object to store numbers and their indices.

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement of the current number.
    
    // If the complement exists in the hash table, return its index along with the current index.
    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i];
    }
    
    // Store the current number and its index in the hash table.
    numToIndex[nums[i]] = i;
  }
  
  // If no solution is found, return an empty array or another value to indicate that there's no valid solution.
  return [];
}
 */