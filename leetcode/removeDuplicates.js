var removeDuplicates = function(nums) {
    let count = 0 
    for(let i = 0; i < nums.length;i++){
        if(nums[i] === nums[i + 1]){
            delete nums[i]
        }else{
            count++
        }
    }
  nums.sort((a, b) => a > b);
  nums.length = count;

  return count;
};
