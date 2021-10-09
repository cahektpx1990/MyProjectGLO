"use strict";

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: '',
  service2: '',  
  start: function () {
    appData.title = prompt("Как называется ваш проект?");
    appData.screens = prompt("Какие типы экранов нужно разработать?");


    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");

    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;

    // !isNumber(screenPrice) &&
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.screens = appData.screens.toLowerCase();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

      let price = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      sum += +price;
    }
    return sum;
  },

  getFullPrice: function() {
    return appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function() {
    appData.title = appData.title.trim();
    return appData.title[0].toUpperCase() + appData.title.slice(1);
  },
  getServicePercentPrices: function() {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
    for (let key in appData) {
      console.log("Метод " + key + " " + "Свойство " + appData[key]);
  }
}
};

appData.start();


// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);


// const isNumber = function(num) {  
//   return !isNaN(parseFloat(num)) && isFinite(num);
// };

// const asking = function() {
//   appData.title = prompt("Как называется ваш проект?");
//   appData.screens = prompt("Какие типы экранов нужно разработать?");

  
//   do {
//     appData.screenPrice = prompt("Сколько будет стоить данная работа?");     
    
//   } while (!isNumber(appData.screenPrice));
//   appData.screenPrice = +appData.screenPrice;  

//   // !isNumber(screenPrice) &&
//   appData.adaptive = confirm("Нужен ли адаптив на сайте?");
// };

// const getAllServicePrices = function() {
//   let sum = 0;

//   for (let i = 0; i < 2; i++) {

//     let price = 0;

//     if (i === 0) {
//       appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
//     } else if (i === 1) {
//       appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
//     }    

//     do {
//       price = prompt("Сколько будет стоить данная работа?");
//     } while (!appData.isNumber(price));

//     sum += +price;
//   }

//   return sum;  
// };

// function getFullPrice () {
//   return appData.screenPrice + appData.allServicePrices;
// }

// function getTitle () {
//   appData.title = appData.title.trim();
//   return appData.title[0].toUpperCase() + appData.title.slice(1);
// }

// function getServicePercentPrices () {
//   return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
// }

// function getRollbackMessage (price) {
//   if (price >= 30000) {
//     return "Даем скидку в 10%";
//   } else if (price >= 15000 && price < 30000) {
//     return "Даем скидку в 5%";
//   } else if (price >= 0 && price < 15000) {
//     return "Скидка не предусмотрена";
//   } else if (price < 0) {
//     return "Что то пошло не так";
//   }
// }
