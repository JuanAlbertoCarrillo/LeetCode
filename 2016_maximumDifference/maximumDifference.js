/**
 * Given a 0-indexed integer array nums of size n, 
 * find the maximum difference between nums[i] and nums[j] 
 * 
 * (i.e., nums[j] - nums[i]), such that 
 * 0 <= i < j < n and nums[i] < nums[j].
 * 
 * Return the maximum difference. 
 * If no such i and j exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function(nums) {
    let max = -1;
    let i = 0;
    for (let j = i+1; j < nums.length; j++) {
        if (nums[j] > nums[i] && nums[j] - nums[i] > max) {
        max = nums[j] - nums[i];
        } else if (nums[i] > nums[j]) {
        i = j;
        }
    }
    return max;
};

// const maximumDifference = function(nums) {
//     // let i = 0;
//     let result=0, maxResult=0, prevNumber=0;
//     for (let j = 0; j < nums.length; j++) {
//         for (let k = j+1; k < nums.length; k++) {
//             result = nums[k]-nums[j]
//             if(result>maxResult){
//                 maxResult=result;
//             }
//         }
//     }
//     if(maxResult<=0){
//         return -1
//     }else{
//         return maxResult;
//     }
// };

// const maximumDifference = function(nums) {
// let maxNum=0, minNum=0, maxDiff=0, diff=0, i=0, j=i+1;

//     while(j<nums.length){
//         if(nums[i]>=nums[j]){
//             i++;
//         }else if(nums[j]>maxNum){
//             diff=nums[j]-nums[i];
//             if(maxDiff<diff){
//                 maxDiff=diff
//                 maxNum=nums[j]
//                 minNum=nums[i]
//             }
//         }else if(nums[j]<nums[i]&&nums[j]<minNum){
//             i=j;
//             minNum=nums[j];
//         }
//         j++;
//     }

//     if(maxDiff<=0){
//         return -1
//     }else{
//         return maxDiff;
//     }
// }


// const maximumDifference = function(nums) {
//     let i = 0;
//     let result=0, maxResult=0, prev=0;
//     for (let j = 1; j < nums.length; j++) {
//         if(nums[j]>prev){
            
//         }
//         result = nums[j]-nums[i]
//         console.log(result)
//         i++;
//         if(result>maxResult){
//             maxResult=result;
//         }
//     }
//     if(max<=0){
//         return -1
//     }else{
//         return max;
//     }
    
// };

// let nums = [7,1,5,4]
// let nums = [9,4,3,2]
let nums = [1,5,2,10]


console.log(maximumDifference(nums));