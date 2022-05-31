const title = 'New project';
let screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 100;
const rollback = 50;
const fullPrice = 100;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов' + ' ' + (screenPrice) + ' ' + 'рублей/1,51 долларов/44,37 гривен/9,94 юани.');
console.log('Стоимость разработки сайта' + ' ' + (fullPrice) + ' ' + 'рублей/1,51 долларов/44,37 гривен/9,94 юани.');

screens = screens.toLowerCase();
screens = screens.split(' ');
console.log(screens);

console.log(fullPrice * (rollback/100));