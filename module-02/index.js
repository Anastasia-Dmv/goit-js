

// //===========задание 1=========///


//  const logItems = function(array){
     
//   for (let i = 0; i < array.length ; i += 1 ){
        
//             console.log(`${i+1} - ${array[i]}`);
//         }
//         return;
// } ;

//  logItems(['Mango', 'Poly', 'Ajax']);
//  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']); 
//  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// //===========задание 2=========///
// let row, quantity, price;
// const calculateEngravingPrice = function(message, pricePerWord){

//     row = message.split(` `);
//     quantity = row.length;
//     price = pricePerWord * quantity;

//     console.log(row);
//     console.log(quantity);
//     console.log(price);

// }

// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus,', 10);
// calculateEngravingPrice( 'Proin sociis natoque et magnis parturient montes mus', 20);
// calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
// calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);

//===========задание 3=========///
// let dividedString, oneOfString, numberOfLetter, eachWordDivided, word, someword; let i ;

// const findLongestWord = function(string){

//    dividedString = string.split(` `);
//    console.log(dividedString);

//     word = dividedString[0];
//     console.log(word);

//     numberOfLetter = word.length;
//     console.log(numberOfLetter);

//       let longestWord = numberOfLetter ;

//       for (let i = 0; i < dividedString.length; i += 1){

//          console.log(`items[i],`, dividedString[i].length);
//           console.log(`longest word, `,longestWord);

//          if (dividedString[i].length > longestWord){
//              longestWord = dividedString[i].length;
//          }
//    }
//    return longestWord ;
   

// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// findLongestWord('Google do a roll'); // 'Google'

// findLongestWord('May the force be with you'); // 'force'

//===========задание 4=========///
 let stringLength, string;

const formatString = function(string) {
    console.log(string.length);
     for ()
    if ( srting.length <= 40){

        console.log(string);
    }
    else if ( srting.length > 40) {
         stringNew = string.splice(0, 40, `...`);
         console.log(stringNew);
    }


    

}   
formatString('Curabitur ligula sapien, tincidunt non.');
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); 




  



