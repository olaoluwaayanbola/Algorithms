const fibonacci = (seq) => {
    if (typeof seq !== "number") {
        return false
    }
    let mainSeq = [0, 1]
    for (let i = 2; i < 10; i++) {
        let newVal = mainSeq[i - 1] + mainSeq[i - 2]
        mainSeq.push(newVal)
    }
    return mainSeq
}

fibonacci(9)