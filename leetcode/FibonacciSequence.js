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

const fibonacci = (seq) => {
    if (seq < 2) {
        return 2
    }
    let newVar = fibonacci(seq - 1) + fibonacci(seq - 2)

    return newVar
}
fibonacci(9)