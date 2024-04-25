/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var myIntersection = function(nums1, nums2) {
    let result = new Set(nums1.filter((num) => (nums2.includes(num))));
    return Array.from(result);
};
