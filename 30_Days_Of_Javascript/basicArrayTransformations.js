/**
 * 2635. Apply Transform Over Each Element in Array
 * Given an integer array arr and a mapping function fn, 
 * return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method
*/

let map = function (arr, fn) {
    const res = [];
    for (let i=0; i<arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};

/**
 * 2634. Filter Elements from Array
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * 
 * The fn function takes one or two arguments:
 * arr[i] - number from the arr
 * i - index of arr[i]
 * 
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) 
 * evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
 * 
 * Please solve it without the built-in Array.filter method.
 * */
let filter = function(arr, fn) {
    const filteredArray = [];
    for (let i=0; i<arr.length; i++) {
        if(fn(arr[i], i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray
};

/** 2626. Array Reduce Transformation
 * Given an integer array nums, a reducer function fn, and an initial value init, 
 * return the final result obtained by executing the fn function on each element of the array, 
 * sequentially, passing in the return value from the calculation on the preceding element.
 * 
 * This result is achieved through the following operations: 
 * val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. 
 * The ultimate value of val is then returned.
 * 
 * If the length of the array is 0, the function should return init.
 * 
 * Please solve it without using the built-in Array.reduce method.
 */

let reduce = function(nums, fn, init) {
    if(nums.length===0) return init;
    let val = init;
    for (let i=0; i<nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};
