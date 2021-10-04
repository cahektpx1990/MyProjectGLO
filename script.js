"use strict";

let title = "Project Calc";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 50;
let fullPrice = 2000;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " - " + screenPrice * 70 + " Рублей/ ");
console.log("Стоимость верстки экранов" + " - " + screenPrice + " долларов");
console.log("Стоимость верстки экранов" + " - " + screenPrice * 26 + " гривен");

console.log("Стоимость разработки сайта" + " - " + fullPrice * 70 + " " + "Рублей");
console.log("Стоимость разработки сайта" + " - " + fullPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " - " + fullPrice * 26 + " " + "гривен");
console.log("Стоимость разработки сайта" + " - " + fullPrice * 6 + " " + "юаней");


screens = screens.toLowerCase();
console.log(screens.split(", "));

console.log("Процент отката посреднику за работу" + " - " + fullPrice * (rollback / 100));


// lesson03

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = !!prompt("Нужен ли адаптив на сайте?");


// Спрашиваем у пользователя про доп услуги

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");


// Вычисляем итоговую стоимость работы

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

// Cтоимость за вычетом процента отката

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

// конструкция условий 

if (fullPrice >= 30000) {
  alert("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  alert("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}