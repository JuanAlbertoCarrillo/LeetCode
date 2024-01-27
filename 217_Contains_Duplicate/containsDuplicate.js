/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mySet = new Set();
    for(let i=0; i<nums.length; i++){
        let number = nums[i];
        if(mySet.has(number)){
            return true;
        }else{
            mySet.add(number);
        }
    }

    return false;
};

let mySet = new Set();
mySet.add(1)
mySet.add(3)
mySet.add(5)

console.log(mySet.has(3))

console.log(mySet.has(4))