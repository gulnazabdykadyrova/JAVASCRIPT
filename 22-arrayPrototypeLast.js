// Write code that enhances all arrays such that you can call the array.last() method on any array and it will
// return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function (nums) {
  console.log(nums.length);
  if (nums.length === 0) {
    return -1;
  } else {
    return nums[nums.length - 1];
  }
};
console.log(Array.prototype.last([null, {}, 3]));
