// elementer.js
document.body.innerHTML = '<h1>Overskrift 1</h1><h2>Overskrift 2</h2>';
let h1 = document.querySelector('h1');
h1.outerHTML += '<p>Efter Overskrift 1</p>';
h1 = document.querySelector('h1');
h1.outerHTML = '<p>Før Overskrift 1</p>' + h1.outerHTML;
h1 = document.querySelector('h1');
h1.outerHTML = '<h3>' + h1.innerHTML + ' - ændret</h3>';
let h2 = document.querySelector('h2');
h2.outerHTML = '';
