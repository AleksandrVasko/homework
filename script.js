'use sctrict';

let title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', 15000);
const adaptive = confirm('Нужен ли адаптив на сайте?');

const rollback = 50;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

/* const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?'); */

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        sum += +prompt('Сколько это будет стоить?');
    }
    return sum;
    //return servicePrice1 + servicePrice2;
};
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};
const getServicePercentPrice = function () {
    return (fullPrice - (fullPrice * (rollback / 100)));
};
const getTitle = function () {
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
};
const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10 %';
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5 %';
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};
function getFullPrice() {
    return screenPrice + allServicePrices;
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов' + screenPrice + 'рубли' && 'Стоимость разработки сайта' + fullPrice + 'рубли');




