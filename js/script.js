"use strict";

const getheadCalcul = document.getElementsByTagName('h1')[0];
const getbtnPlus = document.querySelector('.screen-btn');

const getOtherItemsPercent = document.querySelectorAll('.other-items.percent');
const getOtherItemsNumber = document.querySelectorAll('.other-items.number');

const getInputRange = document.querySelector('.rollback input');
const getSpanRange = document.querySelector('.rollback  .range-value');

const getbtnCount = document.getElementsByClassName('handler_btn')[0];
const getbtnDropp = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let getDivScreen = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicesPercent: {},  
  servicesNumber: {},
  init: function() {
    appData.addTitle();

    getbtnCount.addEventListener('click', appData.start);

    getbtnPlus.addEventListener('click', appData.addScreenBlock);
  },
  addTitle: function() {
    document.title = getheadCalcul.textContent;
  },

  start: function () {
    appData.addScreens();
    appData.addSecvices();    
    appData.addPrice();            
    // appData.getServicePercentPrices();    

    // appData.logger();    
    appData.showresult();
  },

  showresult: function() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },
  addScreens: function() {
    getDivScreen = document.querySelectorAll('.screen');

    getDivScreen.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });
    });    
    console.log(appData.screens);
  },

  addSecvices: function() {
    getOtherItemsPercent.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text');

      console.log(check);
      console.log(label);
      console.log(input);

      if(check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    getOtherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text');

      console.log(check);
      console.log(label);
      console.log(input);

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
    
  },

  addScreenBlock: function() {
    const cloneScreen = getDivScreen[0].cloneNode(true);

    getDivScreen[getDivScreen.length - 1].after(cloneScreen);
  },
  
  // Складываем сумму работ

  addPrice: function() {
    // через reduce 
    appData.screenPrice = appData.screens.reduce(function(sum, item) {
      return sum + item.price;
    }, 0);    

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += (appData.screenPrice * (appData.servicesPercent[key] / 100));
    }

    appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
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

appData.init();

