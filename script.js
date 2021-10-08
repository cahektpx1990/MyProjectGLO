"use strict";

let title; 
let screens; 
let screenPrice;
let adaptive;

let rollback = 50;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function(num) {  
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
  title = prompt("Как называется ваш проект?");
  screens = prompt("Какие типы экранов нужно разработать?");

  
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");     
    
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;  

  // !isNumber(screenPrice) &&
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }    
    
    const getDopSum = function () {
      let dopNum = 0;
      do {
        dopNum = prompt("Сколько это будет стоить?");        
        
      } while (!isNumber(dopNum));
      return +dopNum;
    };

    sum += getDopSum();
  }

  return sum;  
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

function getRollbackMessage (price) {
  if (price >= 30000) {
    console.log("Даем скидку в 10%");
  } else if (price >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
  } else if (price >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
  } else if (price < 0) {
    console.log("Что то пошло не так");
  }
}
  asking();
  allServicePrices = getAllServicePrices();
  fullPrice = getFullPrice();
  title = getTitle();
  servicePercentPrice = getServicePercentPrices();

  showTypeOf ();
  getRollbackMessage(fullPrice);

console.log("allServicePrices", allServicePrices);

screens = screens.toLowerCase();

console.log(screens.split(", "));
console.log(fullPrice);
console.log(servicePercentPrice);



