// OPGAVE 1.5

//Lav et program, der udskriver alle primtal op til og med et givet positivt heltal.

function findPrime(x) {
  let primes = [2, 3];

  for (let i = 5; i <= x; i += 2) {
    let isPrime = true
    const sqrt = Math.sqrt(i);

    for (const prime of primes) {
      if (prime > sqrt) break;

      if (i % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

console.log(findPrime(100));
