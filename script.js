"use strict";

// 1.Восстановить порядок книг.

const booksList = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');

booksList[0].prepend(book[1]);
booksList[0].append(book[2]);
book[3].before(book[4]);

// 2.Заменить картинку заднего фона на другую из папки image

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3.Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

book[4].querySelector('a').text = 'Книга 3. this и Прототипы Объектов';

// 4.Удалить рекламу со страницы

document.querySelector('.adv').remove();

// 5.Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

const listСhapter = document.querySelectorAll('ul');

const itemCharter = listСhapter[1].querySelectorAll('li');


itemCharter[10].before(itemCharter[2]);
itemCharter[9].before(itemCharter[7]);
itemCharter[3].after(itemCharter[6]);
itemCharter[4].before(itemCharter[8]);

// 6. в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let eightChapter = document.createElement('li');
eightChapter.innerText = ('Глава 8: За пределами ES6');

const itemCharterSix = listСhapter[5].querySelectorAll('li');

itemCharterSix[8].after(eightChapter);



