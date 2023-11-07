/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let size = nums.length 
  k = k % size

  const rotator_func = (start,end) => {
    while(start <= end){
      let hold_ele = nums[start]
      nums[start] = nums[end]
      nums[end] = hold_ele
      start++
      end--
    }
  }
  
  if(k > 0){
    rotator_func(0,size -1)
    rotator_func(0,k-1)
    rotator_func(k,size -1)
  }
};
