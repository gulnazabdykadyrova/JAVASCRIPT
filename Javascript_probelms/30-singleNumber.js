function singleNumber (nums) {
    if(nums.length == 1) return nums[0]
     nums = nums.sort()

       for(let i = 0; i <= nums.length-1; i+=2) {
        if(i === nums.length-1) {
            return nums[nums.length-1]
        }
       if(nums[i] != nums[i+1]) {
            return nums[i]
        }
       }


}
console.log(singleNumber([2,2,1,1,5,5,6,6,9]))
console.log(singleNumber([10]))