var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length & n > 0; i++) {
        if (flowerbed[i] == 0 && flowerbed[i + 1] !== 1 &&
            flowerbed[i - 1] !== 1) {
            flowerbed[i] = 1
            n--
        }
    }
    return n == 0
};

var findWords = function (words) {
    let result = []
    //let word = ["Hello","Alaska","Dad","Peace"]
    let row_words = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    //let result = []

    for (let i = 0; i < words.length; i++) {

        let found = false
        for (row_word of row_words) {
            for (let j = 0; j < words[i].length; j++) {
                if (row_word.indexOf(words[i][j].toLowerCase()) == -1) {
                    found = false
                    break
                }
                found = true

            }
            if (found == true) {
                result.push(words[i])
            }
        }
    }
    return result

}
