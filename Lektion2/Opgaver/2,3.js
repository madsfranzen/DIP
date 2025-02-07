function compare(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let minLen = Math.min(len1, len2);

    for (let i = 0; i < minLen; i++) {
        if (str1.charCodeAt(i) < str2.charCodeAt(i)) {
            return -1;
        } else if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
            return 1;
        }
    }

    if (len1 < len2) return -1;
    if (len1 > len2) return 1;

    return 0;
}

function compareIgnoreCase(str1, str2) {
    return compare(str1.toLowerCase(), str2.toLowerCase());
}

function compareLen(str1, str2) {
    if (str1.length < str2.length) return -1;
    if (str1.length > str2.length) return 1;
    return 0;
}

function bubbleSort(array, compareFunc) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareFunc(array[j], array[j + 1]) === 1) {
                swap(j, j + 1, array);
            }
        }
    }
}

function swap(a, b, arr) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

let strArr = ['Hallo', 'World', 'Niels', 'Mads', 'Philip', 'Jens'];

console.log(strArr);
bubbleSort(strArr, compare);
console.log(strArr);
