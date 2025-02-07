// attributter.js
let lis = document.querySelectorAll('li');
let id = 1;
for (let li of lis) {
    li.className = id % 2 === 0 ? 'lige' : 'ulige';
    li.id = 'id' + id++;
}
document.querySelector('#id3').style.color = 'red';
let li = document.querySelector('.lige');
li.style.textDecorationLine = 'underline';