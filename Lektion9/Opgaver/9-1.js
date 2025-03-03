let persons = [
    {
        firstName: 'Yazeed',
        age: 25,
        phoneNumber: '12345678'
    },
    {
        firstName: 'Sam',
        age: 30,
        phoneNumber: '87654321'
    },
    {
        firstName: 'Bill',
        age: 20,
        phoneNumber: '13572468'
    },
    {
        firstName: 'John',
        age: 25,
        phoneNumber: '24681357'
    },
    {
        firstName: 'Jane',
        age: 30,
        phoneNumber: '12348765'
    }
]

const personWithNumber = persons.find((persons) => persons.phoneNumber === '12345678')
console.log("\nPerson with phone number 12345678:");
console.log(personWithNumber);

console.log("\nPerson with lowest age:");
const personWithLowestAge = persons.sort((a, b) => a.age - b.age)[0];
console.log(personWithLowestAge);

console.log("\nModyfiyng array to give all persons an ID...");
persons.forEach((person, index) => person.id = index + 1);
persons.forEach(person => console.log(person));

console.log("\nString representation of all persons names:");
const namesString = persons.map(person => person.firstName).join(",");
console.log(namesString);

console.log("\nArray with name and number of all persons under the age of 30:");
const namesAndNumbers = persons.filter(person => person.age < 30).map(person => person.firstName + " " + person.phoneNumber);
console.log(namesAndNumbers);


// OPGAVE 9.2 og 9.3
// Basic string comparison function
function compare(str1, str2) {
    if (str1 < str2) return -1;
    if (str1 > str2) return 1;
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

/**
 * Creates a sorting function based on the provided comparison function
 * @param {Function} compareFunction - Function that compares two elements and returns -1, 0, or 1
 * @returns {Function} - A function that sorts an array using the provided comparison function
 */
const compareSort = function () {
    // First level validation - check if only one argument is provided
    if (arguments.length !== 1) {
        throw new Error('compareSort: Must be called with exactly 1 argument (the comparison function)');
    }

    const compareFunction = arguments[0];

    // Validate the comparison function
    if (typeof compareFunction !== 'function') {
        throw new Error('compareSort: First argument must be a function');
    }

    if (compareFunction.length !== 2) {
        throw new Error('compareSort: Comparison function must take exactly 2 arguments');
    }

    // Test the comparison function with sample values
    const sampleResult = compareFunction('a', 'b');
    if (![1, 0, -1].includes(sampleResult)) {
        throw new Error('compareSort: Comparison function must return -1, 0, or 1');
    }

    // Return the inner function
    return function (array) {
        // Second level validation
        if (arguments.length !== 1) {
            throw new Error('Sort function: Must be called with exactly 1 argument (the array)');
        }

        if (!Array.isArray(array)) {
            throw new Error('Sort function: Argument must be an array');
        }

        if (array.length === 0) {
            return array;
        }

        const arrayCopy = [...array];
        return arrayCopy.sort(compareFunction);
    };
};

// Create specialized sorting functions
let lengthSort = compareSort(compareLen);
let ignoreCaseSort = compareSort(compareIgnoreCase);

// =============================================
// DEMONSTRATION OF SORTING FUNCTIONALITY
// =============================================

console.log("\n========== DEMONSTRATION OF SORTING FUNCTIONALITY ==========");

// Test arrays
let strArr = ['Hallo', 'Halloooo', 'hal', 'dumme'];
console.log("\n1. Original array:", [...strArr], "with lengths:", strArr.map(s => s.length));

// Sort by length
const sortedByLength = lengthSort([...strArr]); // Use a copy to avoid modifying original
console.log("   Sorted by length:", sortedByLength, "with lengths:", sortedByLength.map(s => s.length));
console.log("   (Notice how 'hal' (length 3) comes first, followed by 'Hallo' (length 5), 'dumme' (length 5), and 'Halloooo' (length 8))");

// Create a new array for case-insensitive sorting
let strArr2 = ['Hallo', 'halloooo', 'HAL', 'dumme'];
console.log("\n2. Original array for case-insensitive sort:", [...strArr2]);
const sortedCaseInsensitive = ignoreCaseSort([...strArr2]); // Use a copy
console.log("   Sorted case-insensitive:", sortedCaseInsensitive);
console.log("   (Notice how 'dumme' comes first alphabetically, ignoring case)");

// =============================================
// VALIDATION TEST CASES
// =============================================

console.log("\n========== VALIDATION TEST CASES ==========");

// Test 1: Not a function
try {
    console.log("\nTest 1: Passing a non-function as comparator");
    compareSort("not a function")([1, 2, 3]);
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 2: Not an array
try {
    console.log("\nTest 2: Passing a non-array to sort");
    compareSort(compareLen)("not an array");
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 3: Empty array
try {
    console.log("\nTest 3: Sorting an empty array");
    const result = compareSort(compareLen)([]);
    console.log("✅ Passed: Empty array returned as is:", result);
} catch (error) {
    console.log("❌ Failed: " + error.message);
}

// Test 4: Invalid comparison function (returns invalid values)
try {
    console.log("\nTest 4: Comparison function returning invalid value");
    const invalidCompare = (a, b) => "invalid result";
    compareSort(invalidCompare)(['a', 'b']);
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 5: Non-mutating behavior
console.log("\nTest 5: Verifying non-mutating behavior");
const originalArray = ['c', 'b', 'a'];
const originalArrayCopy = [...originalArray];
const sortedArray = compareSort(compare)(originalArray);

console.log("   Original array:", originalArray);
console.log("   Sorted array:", sortedArray);
const isUnchanged = JSON.stringify(originalArray) === JSON.stringify(originalArrayCopy);
console.log(isUnchanged ?
    "✅ Passed: Original array was not modified" :
    "❌ Failed: Original array was modified");

// Test 6: Comparison function with wrong number of parameters
try {
    console.log("\nTest 6: Comparison function with one parameter");
    const singleParamCompare = (a) => -1;
    compareSort(singleParamCompare)(['a', 'b']);
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 7: Comparison function with 3 parameters
try {
    console.log("\nTest 7: Comparison function with three parameters");
    const threeParamCompare = (a, b, c) => -1;
    compareSort(threeParamCompare)(['a', 'b']);
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 8: Arrow function with implicit parameters
try {
    console.log("\nTest 8: Function with no parameters");
    const implicitParams = () => -1;
    compareSort(implicitParams)(['a', 'b']);
    console.log("❌ Failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 9: Incorrect number of arguments to compareSort
try {
    console.log("\nTest 9: Calling compareSort with extra parameters");
    let incorrectSort = compareSort(compareLen, "extra parameter");
    console.log("❌ Failed: Should have thrown an error for extra parameter");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

// Test 10: Incorrect number of arguments to the returned sort function
try {
    console.log("\nTest 10: Calling sort function with extra parameters");
    lengthSort(strArr, "extra parameter");
    console.log("❌ Failed: Should have thrown an error for extra parameter");
} catch (error) {
    console.log("✅ Passed: " + error.message);
}

console.log("\n========== END OF TESTS ==========");