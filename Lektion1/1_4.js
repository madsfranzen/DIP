// OPGAVE 1.4

let arr1 = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let arr2 = [3, 11, 19, 1, 2, 12, 21, 5, 3];

let sort = function (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

sort(arr1);
sort(arr2);

function merge(left, right) {
    let resultArr = [];
    leftIndex = 0;
    rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArr
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

let mergedArr = merge(arr1, arr2);
console.log(mergedArr);
