let books;
let adv;
let body;
let headerList;
let bookFifthChapterList;

function elementFinder() {
    books = document.querySelectorAll('.book');
    adv = document.querySelector('.adv');
    body = document.getElementsByTagName('body')[0];
    headerList = document.getElementsByTagName('a');
    books[0].id = 'book2';
    books[5].id = 'book5';
    books[2].id = 'book6';
    fithBookChapterList = document.querySelectorAll('#book5>ul>li');
    secondBookChapterList = document.querySelectorAll('#book2>ul>li');
    sixBook = document.querySelectorAll('#book6>ul')[0];
    sixBookChapterList = document.querySelectorAll('#book6>ul>li');
}
function changeBgImg() {
    body.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";
}
function replacer() {
    books[0].before(books[1]);
    books[3].before(books[4]);
    books[5].after(books[2]);
    headerList[2].innerText = 'Книга 3. this и Прототипы Объектов';
    adv.remove();
    secondBookChapterList[3].after(secondBookChapterList[6]);
    secondBookChapterList[6].after(secondBookChapterList[8]);
    secondBookChapterList[9].after(secondBookChapterList[2]);

    fithBookChapterList[1].after(fithBookChapterList[9]);
    fithBookChapterList[9].after(fithBookChapterList[3]);
    fithBookChapterList[3].after(fithBookChapterList[4]);
    fithBookChapterList[7].after(fithBookChapterList[5]);
    sixBook.append(sixBookChapterList[7]);
    sixBookChapterList[7].innerText = ('Глава 8: За пределами ES6');
    sixBookChapterList[8].after(sixBookChapterList[7]);
}
function logger() {
    console.log(sixBookChapterList);
}

elementFinder();
changeBgImg();
replacer();
logger();