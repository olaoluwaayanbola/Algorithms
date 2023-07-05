var twoSum = function (nums, target) {
    let mapped = {}
    for (let i in nums) {
        let solu1 = target - nums[i]
        if (solu1 in mapped) {
            return [mapped[solu1], i]
        }
        mapped[nums[i]] = i
    }
};