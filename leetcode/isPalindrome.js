var isPalindrome = function (s) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (char in hash) {
                hash[char]++
            } else {
                hash[char] = 1
            }
        }
    }
    console.log(hash)
    let newarr = Object.values(hash)
    let oddcount = 0
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] % 2 !== 0) {
            oddcount++
        }
    }
    return oddcount <=  1
};

var isPalindrome = function (s) {
    let arr = []
    let rearr = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (/[a-z0-9]/.test(char) && char !== " ") {
            arr.push(char)
        }
    }
    for (let i = s.length-1; i >= 0; i--) {
        let char = s[i].toLowerCase()
        if (/[a-z0-9]/.test(char) && char !== " ") {
            rearr.push(char)
        }
    }
    return arr.join("") === rearr.join("")
};
