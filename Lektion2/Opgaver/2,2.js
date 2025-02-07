// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array);
            }
        }
    }
}

function swap(a, b, arr) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function binarySearch(target) {
    let position = -1;
    let left = 0;
    let right = list.length - 1;
    while (left <= right && position === -1) {
        let middle = parseInt((left + right) / 2);
        let k = list[middle];
        if (k == target) {
            position = middle;
        }
        if (k > target) right = middle - 1;
        else left = middle + 1;
    }
    console.log('target: ' + target);
    console.log('position: ' + position);
}

console.log(list);
bubbleSort(list);
console.log(list);
