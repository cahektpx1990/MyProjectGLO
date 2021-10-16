"use strict";

const getheadCalcul = document.getElementsByTagName('h1')[0];
console.log('getheadCalcul', getheadCalcul);

const getbtnCount = document.getElementsByClassName('handler_btn')[0];
console.log('getbtnCount', getbtnCount);

const getbtnDropp = document.getElementsByClassName('handler_btn')[1];
console.log('getbtnDropp', getbtnDropp);

const getbtnPlus = document.querySelector('.screen-btn');
console.log('getbtnPlus', getbtnPlus);

const getOtherItemsFirst = document.querySelectorAll('.other-items.percent');
console.log('getOtherItemsFirst', getOtherItemsFirst);

const getOtherItemsSecond = document.querySelectorAll('.other-items.number');
console.log('getOtherItemsSecond', getOtherItemsSecond);

const getInputRange = document.querySelector('.rollback input');
console.log('getInputRage', getInputRange);

const getSpanRange = document.querySelector('.rollback  .range-value');
console.log('getSpanRange', getSpanRange);

const getInputTotalOne = document.getElementsByClassName('total-input')[0];
console.log('getInputTotalOne', getInputTotalOne);

const getInputTotalTwo = document.getElementsByClassName('total-input')[1];
console.log('getInputTotalTwo', getInputTotalTwo);

const getInputTotalThree = document.getElementsByClassName('total-input')[2];
console.log('getInputTotalThree', getInputTotalThree);

const getInputTotalFour = document.getElementsByClassName('total-input')[3];
console.log('getInputTotalFour', getInputTotalFour);

const getInputTotalFive = document.getElementsByClassName('total-input')[4];
console.log('getInputTotalFive', getInputTotalFive);

let getDivScreen = document.querySelectorAll('.screen');

console.log('getDivScreen', getDivScreen);


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},  
  start: function () {
    appData.asking();
    appData.addPrice();    
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrices();    

    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (num) {
    return isNaN(num);
  },

  asking: function() {
    // appData.title = prompt("Как называется ваш проект?");

    do {
      appData.title = prompt("Как называется ваш проект?");
    } while (!appData.isString(appData.title));


    for (let i = 0; i < 2; i++) {
      let name = '';

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!appData.isString(name));

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      price = +price;

      appData.screens.push({id: i, name: name, price: price});
    }

    for (let i = 0; i < 2; i++) {

      let name = '';
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isString(name));

      // Проверка на ввод одинаково названных дополнительных услуг. Добавляется уникальный ключ Yet

      if(name in appData.services === true) {
        name = name + 'Yet';
      }

      let price = 0;      

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      
      appData.services[name] = +price;
    }   
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

   // Складываем сумму работ

  addPrice: function() {

    // через reduce 
    appData.screenPrice = appData.screens.reduce(function(sum, item) {
      return sum + item.price;
    }, 0);

    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }

    for(let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  }, 

  getFullPrice: function() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function() {
    appData.title = appData.title.trim();
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1);
  },

  getServicePercentPrices: function() {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  
  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что то пошло не так";
    }
  },

  logger: function() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  }
};

appData.start();

