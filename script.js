"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 50;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

function getFullPrice () {
  return screenPrice + allServicePrices;
}

function getTitle () {
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1);
}

function getServicePercentPrices () {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}

function showTypeOf () {
  function elementType(str) {
    console.log(typeof str);
  }

  elementType(title);
  elementType(fullPrice);
  elementType(adaptive);
}

function getRollbackMessage () {
  if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
  } else if (fullPrice < 0) {
    console.log("Что то пошло не так");
  }
}
  
  let allServicePrices = getAllServicePrices();
  fullPrice = getFullPrice();
  title = getTitle();
  servicePercentPrice = getServicePercentPrices();

  showTypeOf ();
  getRollbackMessage();

screens = screens.toLowerCase();

console.log(screens.split(", "));
console.log(fullPrice);
console.log(servicePercentPrice);



