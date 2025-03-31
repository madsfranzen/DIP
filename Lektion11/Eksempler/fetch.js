let url='https://jsonplaceholder.typicode.com/users'

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

let p = get(url)
p.then(showResultThen)



function showResultThen(result) {
    for (let p of result) {
        console.log(p.name)
    }
}

async function showResult() {
    let result = await get(url)
    for (let person of result) {
        console.log(person.name)
    }
}
showResult()
console.log("slut")



console.log("slut på programmet")



// let p = fetch(url)
// console.log("her er p:" + p)
// p.then(showNumbers)

// function showNumbers(respons) {

//     console.log("her er respons.status:" + respons.status)
//     let jsonpromise = respons.json()
//     jsonpromise.then(showJson)
    
// }
// function showJson(json) {
//     for(let person of json) {
//         console.log(person.name)
//     }
// }
