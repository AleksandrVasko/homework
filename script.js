//lesson02
let title = 'New project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 100;
let rollback = 50;
let fullPrice = 100;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов' + ' ' + (screenPrice) + ' ' + 'рублей/1,51 долларов/44,37 гривен/9,94 юани.');
console.log('Стоимость разработки сайта' + ' ' + (fullPrice) + ' ' + 'рублей/1,51 долларов/44,37 гривен/9,94 юани.');

screens = screens.toLowerCase().split(' ');
console.log(screens);

console.log(fullPrice * (rollback/100));


//3
title = prompt('Как называется ваш проект?');

//4
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

//5
screenPrice = prompt('Сколько будет стоить данная работа?', '12000');

//6
adaptive = confirm('Нужен ли адаптив на сайте?');

//7
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = prompt('Сколько это будет стоить?');

//8
fullPrice = screenPrice + servicePrice1 + servicePrice2;

//9
rollback = 50;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

//10

switch (true) {
    case (fullPrice > 30000):
        console.log('Даем скидку в 10 %');
        break;
    case (fullPrice > 15000 && fullPrice <= 30000):
        console.log('Даем скидку в 5 %');
        break;
    case (fullPrice > 0 && fullPrice <= 15000):
        console.log('Скидка не предусмотрена');
        break;
    case (fullPrice <= 0):
        console.log('Что то пошло не так');
        break;
    default:
        break;
}