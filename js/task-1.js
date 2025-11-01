const listLength = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listLength.length}`);
const categoriesList = document.querySelector('ul#categories');

listLength.forEach(item => {
  const a = item.querySelector('h2').textContent;
  const b = item.querySelectorAll('ul li').length;
  console.log(`Category: ${a}`);
  console.log(`Elements: ${b}`);
});
