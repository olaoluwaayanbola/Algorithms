const factorial = (num) => {
    let sum = 1
    for (let x = 1; x <= num; x++) {
        sum *= x
    }
    return sum
}

factorial(3)
