function getRandomNumbers() {
    return new Promise((resolve, reject) => {
        const randomNumbers = fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new")
        resolve(randomNumbers);
    });
}

async function main() {
    const randomNumbers = await getRandomNumbers();
    console.log(randomNumbers);
}

// main();

async function getRandomNumbers() {
    let ranNumbs = await fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new")
    let numbers = await ranNumbs.text()
    console.log(numbers);
    return numbers;
}

getRandomNumbers()