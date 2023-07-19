var lengthOfLongestSubstring = function (s) {
    let hash = {}
    let max_length = 0
    let max_string = ""
    for (let i = 0; i < s.length; i++) {
        if (max_string.indexOf(s[i]) === -1) {
            max_string = max_string + s[i]
            if (max_string.length > max_length) {
                max_length = max_string.length
            }
        } else {
            hash[i] = max_string
            let pre = s.lastIndexOf(s[i], i - 1)
            i = pre + 1
            max_string = ""
            max_string += s[i]
        }
    }
    return max_length
};
