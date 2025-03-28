// Исходные данные с урока №3 //
let screenPrice = 8000
let percentage = 20

// Урок №4 //
// Задача 1: 
titleProject = prompt("Название проекта?")
console.log (titleProject);

// Задача 2:
let creensValue = prompt ("шаблонные, с уникальным дизайном, с анимациями")
console.log (creensValue);

// Задача 3:
let responsive = prompt ("Нужен ли респонсив на сайте")
console.log(responsive); 

// Задача 4:
let service = prompt ("Какой сервис нужен?")
console.log ("Сервис:", service);
let servicePrice = Number(prompt("Сколько это будет стоить?"))
console.log ("Стоимость:", servicePrice);
let service2 = prompt("Какой дополнительный тип услуги нужен?")
console.log ("Дополнительный сервис:", service2);
let servicePrice2 = Number(prompt("Сколько это будет стоить?"))
console.log ("Стоимость второго сервиса:", servicePrice2);

// Задача 5:
let fullPrice = screenPrice + servicePrice + servicePrice2
console.log ("Общая стоимость проекта:", fullPrice);

// Задача 6:
let percentageResult = +(fullPrice * (percentage / 100)); // 
console.log(percentageResult, "Процент подрядчика: "); // 

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), "Итоговая сумма проекта за вычетом % подрядчику");


// Задача 7 (Условия предоставления скидки):
if(fullPrice > 50000)  {
    console.log ("Скидка в 10%"); 
} else if (fullPrice > 20000 && fullPrice <= 50000) {
  console.log("Сделаем скидку 5%"); 
} else if (fullPrice > 0 && fullPrice <= 20000) {
  console.log("Скидка не предусмотрена"); 
} else if (fullPrice === 0) {
    console.log ("Стоимость равна нулю"); 
} else if (fullPrice < 0) {
    console.log ("Что-то пошло не так"); 
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log ("Проверка на строгое равенство") }