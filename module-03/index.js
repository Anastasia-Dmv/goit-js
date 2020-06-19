

// =========Number 1 ===============
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user[`mood`] = `happy`;
//   user.mood = `skydiving`;
//   user.premium = false;
// console.log(user);


//   const keys = Object.keys(user);
//   console.log(keys);

//    for (const key of keys){
//        console.log(key,`:`, user[key]);
//    }
// =========Number 2 ===============

// const countProps = function(obj){

//     const keys = Object.keys(obj);
//     console.log(keys.length);
//     return keys.length;  
// };

// countProps({}); // 0 
// countProps({ name: 'Mango', age: 2 }); // 2  
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

// // =========Number 3 ===============

// const findBestEmployee = function(employees) {
//     const value = Object.values(employees);
//     console.log(value);
//      let max = 0;

//      for (let i = 0; i < value.length; i += 1){
//          if(value[i] > max){
//              max = value[i];
//          }
//      }
//     //  console.log(findBestEmployee[max);
//     //  `max` in findBestEmployee;
//      return max;
//   };

  
 
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   );  //lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux

