const grid = document.querySelector('#grid');
const list = document.querySelector('#list');
const article = document.querySelector('.members');

window.addEventListener("load", () => { 
    article.classList.add('list');
  });

grid.addEventListener('click' , () => {
    article.classList.add('grid');
    article.classList.remove('list')
});

list.addEventListener('click', () => {
    article.classList.add('list');
    article.classList.remove('grid');
});