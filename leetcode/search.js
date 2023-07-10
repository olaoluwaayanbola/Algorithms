const Linear = (arr,n) => {
    for (let i = 0; i < arr.length; i++) {
        if ( n === arr[i]) {
            return i   
        }
    }
    return -1
}

Linear([1,2,3,4,5],3)