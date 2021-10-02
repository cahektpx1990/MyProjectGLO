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