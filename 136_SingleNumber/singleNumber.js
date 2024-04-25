/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let duplicated = new Set();
    let single = new Set();

    nums.forEach((number) => {
        if(!single.has(number) && !duplicated.has(number)){
            single.add(number)
        }else{
            duplicated.add(number);
            single.delete(number);
        }
    });

    return  Array.from(mySet)[0];
};
