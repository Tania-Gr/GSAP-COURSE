let screenPrice = 8000
let percentage = 20



let titleProject = prompt("Название проекта?");
console.log("Название проекта:", titleProject);

let screenValue = prompt("Шаблонные, с уникальным дизайном, с анимациями");
console.log("Тип шаблона:", screenValue);

let responsive = prompt("Нужен ли респонсив на сайте?");
console.log("Респонсив:", responsive);

let service = prompt ("Какой сервис нужен?")
console.log ("Сервис:", service);

let servicePrice = parseFloat(prompt("Сколько это будет стоить?"))
console.log ("Стоимость:", servicePrice);

let service2 = prompt("Какой дополнительный тип услуги нужен?")
console.log ("Дополнительный сервис:", service2);

let servicePrice2 = Number(prompt("Сколько это будет стоить?"))
console.log ("Стоимость второго сервиса:", servicePrice2);

//let fullPrice = screenPrice + servicePrice + servicePrice2
//console.log ("Общая стоимость проекта:", fullPrice);

//let percentageResult = +(fullPrice * (percentage / 100)); // 
//console.log(percentageResult, "Процент подрядчика: "); // 





// 1. Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".
// Функция должна возвращать стоимость всех дополнительных услуг.
// Результат функции запиши в переменную allServicePrices.

const getAllServicePrices = function() {
  return servicePrice + servicePrice2;
};
let allServicePrices = getAllServicePrices() 
console.log("Общая стоимость дополнительных услуг", allServicePrices)


// 2  Создай функцию getFullPrice с помощью метода "function declaration".
// Функция должна возвращать стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice )
// Результат функции запиши в переменную fullPrice.

function getFullPrice() {
  return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice()
console.log ("Общая стоимость проекта:", fullPrice);
let percentageResult = fullPrice * (percentage / 100); 
console.log("Процент подрядчика:", percentageResult); 


// 3. Создай функцию getTitle.
// Функция изменяет название проекта(titleProject), переводит первый символ в верхний регистр(делает
// заглавной), а остальные в нижний регистр(делает маленькими) и возвращает отредактированное название проекта (titleProject). 

// Функция, изменяющая название проекта
function getTitle(titleProject) {
  // Проверяем, чтобы titleProject не был пустым
  if (!titleProject) {
    return "Название не указано"; // Если пусто, возвращаем сообщение
  }

  // Изменяем первый символ на заглавный, а остальные на строчные
  return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
// Выводим отредактированное название
let editedTitle = getTitle(titleProject);
console.log("Отредактированное название:", editedTitle);


//4. Создай функцию getServicePercentPrices.
//Функция возвращает итоговую стоимость за вычетом процента подрядчику.
//Результат функции запиши в переменную servicePercentPrice

let getServicePercentPrices = function() {
  return fullPrice * (1 - percentage / 100);
};
let servicePercentPrice = getServicePercentPrices();
console.log("Итоговая сумма проекта за вычетом % подрядчику:", Math.ceil(servicePercentPrice));


// Условия предоставления скидки:

if (fullPrice > 50000)  {
    console.log ("Скидка в 10%"); 
} else if (fullPrice > 20000 && fullPrice <= 50000) {
  console.log("Сделаем скидку 5%"); 
} else if (fullPrice > 0 && fullPrice <= 20000) {
  console.log("Скидка не предусмотрена"); 
} else if (fullPrice === 0) {
    console.log ("Стоимость равна нулю"); 
} else if (fullPrice < 0) {
    console.log ("Что-то пошло не так"); 
} 
//else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
//  console.log ("Проверка на строгое равенство") }

    //5. Создай функцию getRollbackMessage.
//Функция считает и выводит в консоль значение скидки для клиента в зависимости от стоимости проекта.

//Программа должна:
//- считать стоимость всего проекта
//- считать стоимость всех услуг
//- считать стоимость проекта с учётом скидки подрядчику
//- считать скидку клиента, в зависимости от стоимости проекта и выводить сообщение в консоль

//Дополнительно: - менять регистр символов в названии проекта (Первый символ заглавный, остальные строчные)

function getRollbackMessage(servicePercentPrice,discountPercentage) {
  if (servicePercentPrice <= 0 || discountPercentage < 0 || discountPercentage > 100) {
    console.log("Некорректные данные. Пожалуйста, проверьте цену и процент скидки.");
    return null;
}

const discountValue = (servicePercentPrice * discountPercentage) / 100;
const finalPrice = servicePercentPrice - discountValue;
console.log(`Скидка для клиента: ${discountValue.toFixed(2)} €. Итоговая стоимость проекта: ${finalPrice.toFixed(2)} €.`);
return { 
  discountValue: discountValue.toFixed(2),
  finalPrice: finalPrice.toFixed(2)
};
}
// коммент--
let discountPercentage = fullPrice > 50000 ? 10 : fullPrice > 20000 ? 5 : 0;
getRollbackMessage(servicePercentPrice, discountPercentage);

// тест


