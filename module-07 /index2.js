const  ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
    
];


const ulRef = document.querySelector('#ingredients');
console.log(ulRef);


ingredients.forEach( item => {
    const li = document.createElement('li');
    li.textContent = item;
    ulRef.appendChild(li);
});




