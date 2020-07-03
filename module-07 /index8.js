const inputRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');


 const allBoxes  = function createBoxes (amount){
    
     amount = inputRef.value;
     for(let i = 0; i < amount; i +=1){
        const newDiv = document.createElement('div');
    newDiv.classList.add('box');

    newDiv.style ='background-color:' + 
    '#' + (Math.random().toString(16)+ '000000').substring(2,8).toUpperCase();
    newDiv.style.width = 30 + i*10 +'px';
    newDiv.style.height = 30 + i*10  + 'px';

    boxRef.append(newDiv); 
     }
    console.log(boxRef);

};
const clear = () => boxRef.innerHTML ='';

renderRef.addEventListener('click', allBoxes);
destroyRef.addEventListener('click', clear);