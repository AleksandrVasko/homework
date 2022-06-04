'use sctrict';

const title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
const rollback = 50;

let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


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

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();
const allServicePrices = getAllServicePrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log('Стоимость верстки экранов' + ' ' + (screenPrice) + ' ' + 'рублей');



