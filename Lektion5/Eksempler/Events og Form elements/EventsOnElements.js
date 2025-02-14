let inputs = document.querySelectorAll("input")

for (let i = 0; i<inputs.length; i++) {
    inputs[i].onclick = () => inputs[i].value = i
}

// for (let i = 0; i<inputs.length; i++) {
//     inputs[i].outerHTML = '<label>Felt nr</label>' + inputs[i].outerHTML + '<br>'
// }
