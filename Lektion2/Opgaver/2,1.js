let arr = [1, 2, 3, 4, 5];
console.log(max(arr))
console.log(contains(arr, 3))
console.log(sum(arr))

function max(array) {
    let min = -Infinity;
    for (let num of array) {
        if (num > min) {
            min = num;
        }
    }
    return min;
}

function contains(array, element) {
    for (let num of array) {
        if (num === element) return true;
    }
    return false;
}

function sum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}
