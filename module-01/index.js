

//===========задание 1=========///
let name , price;
name =  'Генератор защитного поля';
price = '1000';

// const message = `Выбран  ${name}, цена за штуку ${price} кредитов.`;
//  console.log(message);
 
 
price = '2000';
const message = `Выбран  ${name}, цена за штуку ${price} кредитов.`;
console.log(message);


///===========задание 2=========///


// const total = 100;


// const ordered = prompt(`Please enter a quantity`);
// ordered

//  if ( ordered ===  null){

//     console.log(`You cancelled your order`);

// }
//  else if (Number(ordered) <= total) {
//     console.log(`Заказ оформлен, с вами свяжется менеджер.`)
// }
//  else   {
//     console.log(`На складе недостаточно товаров!`)
// }


 ///===========задание 3=========///


//  const ADMIN_PASSWORD = 'jqueryismyjam';

//  const passwordInput = prompt(`Please enter you password`);

//  if ( passwordInput ===  null){

//       console.log(`Отменено пользователем!`);
//  }
//  else if ( passwordInput === ADMIN_PASSWORD) {
//      console.log(`Добро пожаловать!`)
//  }
//  else if ( passwordInput !== ADMIN_PASSWORD &&  passwordInput !==  null ){
//    alert(`Доступ запрещен, неверный пароль!`)
//  }
//  else {
//      alert(`hello`)
//  }


 ///===========задание 4=========///


const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt(`How many Droids you want to buy?`);
const totalPrice = Number(quantity) * pricePerDroid;
const restOfMoney = credits - totalPrice;

if (quantity  === null || Number(quantity) === 0 ) {
    console.log(`Отменено пользователем!`)
}
else if ( Number(quantity) < 0) {
    alert(`Значение не может быть отрицательным.`)
}

 else if (totalPrice > credits){
    console.log(`Недостаточно средств на счету!`)
}
 else {
     console.log(`Вы купили ${quantity } дроидов, на счету осталось ${restOfMoney}  кредитов.`)
    }

    ///===========задание 5=========///

//    let cost;

//     const country = prompt(`Страна`);
//     if (country !== null){

//         switch (country.toLowerCase()){
//             case 'китай':
//                 cost = 100;
//                 console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//                break;
       
//                case 'чили':
//                cost = 250;
//                console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//                break;
       
//                case 'австралия':
//                cost = 170;
//                console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//               break;
       
//                case 'индия':
//                cost = 80;
//                console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//                break;
       
//                case 'ямайка':
//                cost = 120;
//                console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//                break;

//                case '':
//                console.log(`Вы не ввели название страны`);
//                break;

//          default:
//           console.log(`В вашей стране доставка не доступна`);

//     } 
        
//  } else { 
//          console.log(`Вы отменили заказ`);
//     }
        

  ///===========задание 6 =========///
//    let input , total;
//    total = 0;
   
   
//    do {
//       input = prompt(`Please enter a number`);

//       if (isNaN(input)){
//         alert (`Было введено не число, попробуйте еще раз.`);
//         continue;

//       } else 

//       total += Number(input); 
//     }
//    while (input !== null);

//     alert(`Общая сумма чисел чисел равна ${total}`);


   
