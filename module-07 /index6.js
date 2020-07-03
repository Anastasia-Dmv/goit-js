const inputRef = document.querySelector('#validation-input');
console.dir(inputRef); 
console.log(inputRef.dataset.length);


inputRef.addEventListener('change', event => {
    (event.target.value.length === Number(inputRef.dataset.length))? 
    inputRef.classList.add('valid') : inputRef.classList.add('invalid') ;
console.log(event.target.value.length);
    }

);
