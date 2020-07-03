const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
console.dir(spanRef);

inputRef.addEventListener('input', event => {
    event.preventDefault();
    (event.target.value === '')?
spanRef.textContent = 'незнакомец':  spanRef.textContent = event.target.value;
});

 