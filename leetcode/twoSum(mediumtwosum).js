var twoSum = function (numbers, target) {
    let hashmap = {}
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        let checked = target - numbers[i]
        if (checked in hashmap) {
            arr.push(i + 1, hashmap[checked] + 1)
        } else {
            hashmap[numbers[i]] = i
        }
    }
    return arr.sort((a, b) => a - b)
};
