// // =========Number 1 ===============
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user[`mood`] = `happy`;
//   console.log(user);
//   user.mood = `skydiving`;
//   console.log(user);
//   user.premium = false;
//   console.log(user);


//   const keys = Object.keys(user);
//   console.log(keys);

//    for (const key of keys){
//    console.log(key,`:`, user[key]);
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

// =========Number 3 ===============

//  const findBestEmployee = function(employees) {
//     console.log(employees);

//     let maxQuantity = 0;

//      const keys = Object.keys(employees);
//      // console.log(keys);
//      const values = Object.values(employees);
//      // console.log(values);

//      for (const value of values){
//          if (value > maxQuantity){
//              maxQuantity  = value ;

//           }
//      }
//      for (const key in employees){
//          if (employees[key] === maxQuantity){
//           return key;
//          }
//      } 
//    };


//    console.log(
//      findBestEmployee({
//        ann: 29,
//        david: 35,
//        helen: 1,
//        lorence: 99,
//      }),
//    ); // lorence

//    console.log(
//      findBestEmployee({
//        poly: 12,
//        mango: 17,
//        ajax: 4,
//      }),
//    ); // mango

//    console.log(
//      findBestEmployee({
//        lux: 147,
//        david: 21,
//        kiwi: 19,
//        chelsy: 38,
//      }),
//    ); // lux


// =========Number 4 ===============


// const countTotalSalary = function(employees) {
//    const values = Object.values(employees);
//    console.log(values);
//     let  total = 0;
//      for (const value of values){
//          total += value;

//      } return total;
//   };


//   console.log(countTotalSalary({})); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330

//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); 

// =========Number 5 ===============
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];

//   const getAllPropValues = function(arr, prop) {
//     let newPropList = [];

//     for (const oneInArr of arr ){
//     const  value = oneInArr[prop] ;

//     newPropList.push(value) ;

//         if ( !value ){
//             newPropList.pop(value );
//         }

//     } console.log(newPropList);
//   };

// getAllPropValues(products, 'name'); // ['Радар', 'Сканер', 'Дроид', 'Захват']  
// getAllPropValues(products, 'quantity'); // [4, 3, 7, 2] 
// getAllPropValues(products, 'category'); // []

// =========Number 6 ===============
// const products = [{
//     name: 'Радар',
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: 'Сканер',
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: 'Дроид',
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: 'Захват',
//     price: 1200,
//     quantity: 2
//   },
// ];

// const calculateTotalPrice = function (allProducts, productName) {

//   let totalPrice = 0;

//   for (const product of allProducts) {
//     //console.log(product);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }
// };
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


// ========= Number 7  ===============

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const account = {
//   id: 0,
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     this.id += 1;
//     return {
//       id: this.id,
//       amount,
//       type,
//     }
//   },
//   deposit(amount) {
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//     return this.balance;
//   },

//   withdraw(amount) {
//     this.balance -= amount;
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//     return this.balance;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].id === id) {
//         return this.transactions[i];
//       }
//     }

//   },
//   getTransactionTotal(type) {

//     let total = 0;
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].type === type) {
//         total += this.transactions[i].amount;
//       }
//     }
//     return total;
//   },
// };


// console.log(account.deposit(400));
// console.log(account.deposit(500));
// console.log(account.deposit(400));
// console.log(account.deposit(500));
// console.log(account.withdraw(400));
// console.log(account.withdraw(200));
// console.log(account.withdraw(100));

// console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getBalance());
// console.table(account.transactions);

// ========= Number 78 ===============

const register = {
  modules: [{
      module1: {
        homeTaskCount: 3,
        doneTasks: 2
      }
    },
    {
      module2: {
        homeTaskCount: 5,
        doneTasks: 3
      }
    }, {
      module3: {
        homeTaskCount: 3,
        doneTasks: 2
      }
    },
    {
      module4: {
        homeTaskCount: 5,
        doneTasks: 0
      }
    }, {
      module5: {
        homeTaskCount: 3,
        doneTasks: 0
      }
    },
    {
      module6: {
        homeTaskCount: 7,
        doneTasks: 0
      }
    }
  ],
  currentModule: 3,
  score: 0, //percentages
  // посчитать какой процент выполнения курса у студента от общей программы курса,
  // посчитать текцщий процент выполнения ДЗ студентом исходя из того, что пройдено всего 3 модуля курса
  // предусмотреть возможность добавления и удаления из/в курс новых модулей
  // предусмотреть возможность добавления и изменения новых заданий в конкретный модуль
  getTotalPercentage() {

  },
  getStudentDonePercentage() {

  },
  addNewModule(module) {

  },
  removeModule(module) {

  },
  changeTaskInModule(module, task) {

  }
}