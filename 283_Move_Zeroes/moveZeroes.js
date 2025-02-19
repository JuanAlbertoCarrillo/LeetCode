/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let i = 0;
    let temp=0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[i]===0 && nums[j]!=0){
            
            temp=nums[j]
            nums[j]=nums[i]
            nums[i]=temp
            i++
        }else if(nums[i]!=0){
            i++;
        }
        console.log(nums)
    }
};

// let nums = [0,1,0,3,12];
// let nums = [1,0,1]

let nums =[4,2,4,0,0,3,0,5,1,0]

moveZeroes(nums)
// i=0
// j=1
//  i, j
// [0, 1, 0, 3, 12];


/**
var removeDuplicates = function(nums){
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if(nums[i]!==nums[j]){ 
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i+1;
}

*/