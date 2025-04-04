async function post(url, objekt) {
    const respons = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    })
    if (respons.status !== 201) {
        throw new Error(respons.status)
    }
    return await respons.text()
}

let clickfunction = async (id) => {
    try {
        let response = await post('http://localhost:8000/buy', {
            productId: id
        })
        window.location.reload()
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
let removeFromCart = async (productId) => {
    try {
        let response = await post('http://localhost:8000/remove', {
            productId: productId
        })
        window.location.reload()
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}