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



