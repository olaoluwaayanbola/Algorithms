/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sp = Array.from(s)
    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        let numsi = sp.indexOf(t[i])
        if ( numsi !== -1) {
            delete sp[numsi]
        } else {
            return false
        }
    }
    console.log(sp)
    return true
}; 
function (s, t) {
    let obj1 = {}
    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj1[t[i]] = (obj1[t[i]] || 0) - 1
    }
    for (let nums in obj1) {
        if (obj1[nums] !== 0) {
            return false
        }
    }
    return true
};



var isAnagram = function (s, t) {
    let sp = Array.from(s)
    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        let numsi = sp.indexOf(t[i])
        if ( numsi !== -1) {
            delete sp[numsi]
        } else {
            return false
        }
    }
    console.log(sp)
    return true
};
