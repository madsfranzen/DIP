// ur.js
function opdaterUr() {
    let ur = document.querySelector("div");
    console.log(new Date().toLocaleTimeString());
    ur.innerHTML = new Date().toLocaleTimeString();
    setTimeout(opdaterUr, 1000);
}
opdaterUr();