

// //===========задание 1=========///
 const logItems = function(array){
     
  for (let i = 0; i < array.length ; i += 1 ){
        
            console.log(`${i+1} - ${array[i]}`);
        }
        return;
} ;

 logItems(['Mango', 'Poly', 'Ajax']);
 logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']); 
 logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//===========задание 2=========///
let row, quantity, price;
const calculateEngravingPrice = function(message, pricePerWord){

    row = message.split(` `);
    quantity = row.length;
    price = pricePerWord * quantity;

    console.log(row);
    console.log(quantity);
    console.log(price);

}

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus,', 10);
calculateEngravingPrice( 'Proin sociis natoque et magnis parturient montes mus', 20);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);

//===========задание 3=========///
// let dividedString, oneOfString, numberOfLetter, eachWordDivided, word, someword; let i ;

// const findLongestWord = function(string){

//    dividedString = string.split(` `);
//    console.log(dividedString);

//     // word = dividedString[0];
//     // console.log(word);

//     // numberOfLetter = word.length;
//     // console.log(numberOfLetter);

//       let longestWord = [0];
//       // console.log(longestWord);

//       for (let i = 0; i < dividedString.length; i += 1){

//          console.log(`word ${[i]},`, dividedString[i], `=` ,dividedString[i].length);
//          console.log(`longest word, `, longestWord);

//          if (dividedString[i].length > longestWord.length ){
//              longestWord = dividedString[i];
//          }
//    }
//    return longestWord ;
// }


// findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
// findLongestWord('Google do a roll'); // 'Google'
// findLongestWord('May the force be with you'); // 'force'

//===========задание 4=========///
//  let  string;

// const formatString = function(string) {
//     console.log(string.length);
    
//     if ( string.length <= 40){
//         return string
//     }
//     else if( string.length > 40) {
        
//          const result = string.slice(0, 40) + `...`
//          return   result ;
//     }
//  }  
// console.log( formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(
//  formatString(
//    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//    ),
//  ); 

 //===========задание 5=========///
// const  checkForSpam = function(message){
  

//    if (message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`)) {
//    return true;
//   } else {
//     return false;
//   }
   
// }
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//===========задание 6=========///
// let  input, num;
// const numbers =[];
// let total = 0;

// do {
//   input = prompt (`Enter number`);
//   num = Number(input);
//   numbers.push(Number(num));

//   // if(input === null  || isNaN(input)){ // продолжает складывать только числа, несмотря на ввод  других знаков, , без вывода Alert;
//   //   numbers.pop();
//   //   console.log(numbers);
//   // }
//   if( input === null){
//     numbers.pop();
//     console.log(numbers);
//   }
//   if( isNaN(input)){
//     numbers.pop();
//     alert(`It's not a number, let's try again`);
//   }
// } while (input !==null ); 

// const getResult = function (){
//     for (const number of numbers){
//       total += number ;
//     }
//     console.log(`total, `, total);
// };

// getResult(numbers);

//===========задание 7=========///


// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//       if (login.length >= 4 && login.length <= 16){
//         return true;
//       }
//       return false;
//  };

//  const isLoginUnique = function(allLogins, login) {
//   if (!allLogins.includes(login)){
//     return true;
//   } else false;
//    };
 
// const addLogin = function(allLogins, login) {
//   if ( !isLoginValid(login)) {
//     alert(`Ошибка! Логин должен быть от 4 до 16 символов`);

//   } else if (!isLoginUnique(allLogins, login)){
//     alert(`Такой логин уже используется!`);
//   } else {
//    logins.push(login);
//    console.log(logins);
//    console.log(`Логин успешно добавлен!`);
//  }
// };
 
//  addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
//  addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
//  addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//  addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

