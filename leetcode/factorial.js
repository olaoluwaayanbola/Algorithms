const factorial = (num) => {
    let sum = 1
    for (let x = 1; x <= num; x++) {
        sum *= x
    }
    return sum
}

const factorial2 = (num) => {
    if (num === 0) {
        return 1
    }
    return num * factorial2(num - 1)
}
factorial2(3)
