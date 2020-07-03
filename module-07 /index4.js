 


 const buttonDecrement = document.querySelector('button[data-action="decrement"]');
 const buttonIncrement = document.querySelector('button[data-action="increment"]');
 const valueRef = document.querySelector('#value');

 let  counterValue = 0;
 const counterPlus = function(){
     counterValue += 1;
     valueRef.textContent = counterValue;
    //   console.log(valueRef.textContent);
 };
 const counterMinus = function(){
    counterValue -= 1;
    valueRef.textContent = counterValue;
    //  console.log(valueRef.textContent);
};
 buttonIncrement.addEventListener('click', counterPlus);
 buttonDecrement.addEventListener('click', counterMinus);
     
//  console.log(valueRef);
 
 

