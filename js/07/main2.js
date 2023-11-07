// створюю дів, ставлю в баді, додаю клас контейнер для зручності.
const Addcontainer = document.createElement('div');
document.body.append(Addcontainer);
Addcontainer.className='container';
// селектор контейнеру в змінну для зручності.
const container = document.querySelector('.container');

// прописую баттон та дів модального вікна
container.innerHTML = '<button type="button" class="openBtn">Відкрити</button><div class="modalka">Текст модалки</div>'

// в модальному прописую баттон+ховаю модалку
const modalka = document.querySelector('.modalka');
modalka.style.display='none'
modalka.innerHTML = '<p>Some text about nothing, just for тз</p><button type="button" class="closeBtn">Закрити</button>';
// селектори для  бАттонів, для зручності 
const toOpen = document.querySelector('.openBtn');
const toClose = document.querySelector('.closeBtn');
 
// клік функції модалки 
toOpen.onclick = function(){
  modalka.style.display='flex';
  toOpen.style.display='none'
};
toClose.onclick = function(){
  modalka.style.display='none';
  toOpen.style.display='flex'
}
