function checkNumbers(name) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            // Generate a random integer between 0 and 10 🎲
            // const randomNumber = Math.floor(Math.random() * 11);

            const response = await fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new")
            const randomNumber = response.text()
            randomNumber = parseInt(randomNumber.trim)

            if (randomNumber % 2 === 0) {
                resolve(randomNumber);
            } else {
                reject(new Error(`${name}, your number ${randomNumber} is not even`));
            }
        }, 2500);
    });
}

// Create all promises
const promises = [
    checkNumbers("John"),
    checkNumbers("Jane"),
    checkNumbers("Jim"),
    checkNumbers("Jill")
];

// // Use Promise.all to handle all promises
// Promise.all(promises)
//     .then(numbers => {
//         console.log("🎉 All numbers are even!", numbers);
//     })
//     .catch(error => {
//         console.log("😢 Error:", error.message);
//     });

// Using Promise.any to get the first successful promise 🚀
// Promise.any(promises)
//     .then(firstEvenNumber => {
//         console.log("🎯 First even number found:", firstEvenNumber);
//     })
//     .catch(error => {
//         console.log("😱 All promises failed:", error);
//     });

// // Using Promise.allSettled to get the status of all promises regardless of success/failure 📊
// Promise.allSettled(promises)
//     .then(results => {
//         console.log("📋 All promises settled:");

//         // Count successful and failed promises 📈
//         const fulfilled = results.filter(result => result.status === "fulfilled");
//         const rejected = results.filter(result => result.status === "rejected");

//         console.log(`✅ ${fulfilled.length} promises succeeded with values:`, 
//             fulfilled.map(result => result.value));
//         console.log(`❌ ${rejected.length} promises failed with reasons:`, 
//             rejected.map(result => result.reason.message));

//         // Display detailed results for each promise 📝
//         results.forEach((result, index) => {
//             if (result.status === "fulfilled") {
//                 console.log(`Promise ${index + 1}: Fulfilled with value ${result.value} 🎊`);
//             } else {
//                 console.log(`Promise ${index + 1}: Rejected with reason: ${result.reason.message} 😞`);
//             }
//         });
//     });

// Using Promise.race to get the first resolved promise 🚴‍♂️
Promise.race(promises)
    .then(firstResolved => {
        console.log("🏃‍♂️ First promise resolved:", firstResolved);
    })
    .catch(error => {
        console.log("🚫 All promises failed:", error);
    });
