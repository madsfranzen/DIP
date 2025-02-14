const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
    const label = document.createElement('label');
    label.textContent = index === 0 ? 'Tal: ' : 'Tid: ';
    input.parentNode.insertBefore(label, input);

    label.addEventListener('click', () => {
        if (index === 0) {
            input.value = Math.floor(Math.random() * 100);
        } else {
            input.value = new Date().toLocaleTimeString();
        }
    });

    input.addEventListener('click', () => {
        if (index === 0) {
            input.value = Math.floor(Math.random() * 100);
        } else {
            input.value = new Date().toLocaleTimeString();
        }
    });
});