
//===========N1===============

// const searchNumberOfcategories = document.querySelectorAll('.item');
// console.log(` В списке ${searchNumberOfcategories.length}  категории`);

// const liItem = document.querySelector('.item')
// // console.dir(liRef);

// const headingRef = liItem.firstElementChild;
//  console.dir(headingRef.innerText);
// // console.dir(headingRef);

// const ulInLiItem = headingRef.nextElementSibling;
// // console.log(ulInLi);

// const numberOfElements = ulInLiItem.querySelectorAll('li').length;
// console.log(numberOfElements);

//  const searchNumberOfcategories = document.querySelectorAll('.item');
//  console.log(searchNumberOfcategories);
// //  console.log(searchNumberOfcategories[0]);
// //  console.log(searchNumberOfcategories[1]);
// //  console.log(searchNumberOfcategories[2]);

// // console.dir(liRef);
//  const massiv = Array.from(searchNumberOfcategories); 
//  console.log(massiv);

// const showInfo = (item, index) => {
// const liItem = document.querySelector('.item')
// const headingRef = liItem.firstElementChild;
//  console.dir(headingRef.innerText);
//  console.dir(headingRef);

// const ulInLiItem = headingRef.nextElementSibling;
//  console.log(ulInLiItem);

// const numberOfElements = ulInLiItem.querySelectorAll('li').length;
// console.log(numberOfElements); 
// return `Категория : ${headingRef.innerText} , кол-во элементов: ${numberOfElements}`;
// };
// console.log(showInfo(massiv))
//  const result = massiv.forEach(function(element, index, array){
//      return result;
//  });


//===================Number 1=============
const liItems = document.querySelectorAll('.item');
console.log(` В списке ${liItems.length} категории`);

// console.log(liItems[0].firstElementChild.textContent);
// console.dir(liItems[0].lastElementChild.children.length);

liItems.forEach(item =>
     console.log(`Категория: ${item.firstElementChild.textContent }, количество элементов: ${item.lastElementChild.children.length}`));















