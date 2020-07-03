


//===================Number 1=============
const liItems = document.querySelectorAll('.item');
console.log(` В списке ${liItems.length} категории`);

// console.log(liItems[0].firstElementChild.textContent);
// console.dir(liItems[0].lastElementChild.children.length);

liItems.forEach(item =>
     console.log(`Категория: ${item.firstElementChild.textContent }, количество элементов: ${item.lastElementChild.children.length}`));















