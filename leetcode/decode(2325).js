var decodeMessage = function (key, message) {
    let alpha = Array.from("abcdefghijklmnopqrstuvwxyz")
    let keys = Array.from(new Set(key)).filter((e) => { return e !== " " })
    let hash = {}
    let hold = []
    for (let i = 0; i < alpha.length; i++) {
        hash[keys[i]] = (alpha[i])
    }
    for (let i = 0; i < message.length; i++) {
        if (message[i] !== " ") {
            hold.push(hash[message[i]])
        } else {
            hold.push(" ")
        }
    }
    return (hold.join(""))
};