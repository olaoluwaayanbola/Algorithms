const primeumbers = (val) => {
    let hold = [2]
    if (val < 2) {
        return []
    }
    for (let i = 2; i <= Math.sqrt(val); i++) {
        if (i % 2 !== 0) {
            hold.push(i)
        }
    }
    return hold
}
primeumbers(10)