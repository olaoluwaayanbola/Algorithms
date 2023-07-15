var productExceptSelf = function (nums) {
    let hashmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let filtered = nums.filter((_, index) => { return index !== i })
        hashmap.set(nums[i], [...filtered])
    }
    let values = Array.from(hashmap.values())
    let sol = []
    for (let i = 0; i < values.length; i++) {
        sol.push(values[i].reduce((acc, curr) => { return acc * curr }, 1))
    }
    console.log(hashmap)
    return sol
};

// real-sol

var productExceptSelf = function (nums) {
    const result = [];
    let prefix = 1
    let postfix = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix = nums[i] * prefix
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix = postfix * nums[i + 1]
        result[i] = result[i] * postfix
    }
    return result;
}
