
// Обчислення S1=a+12+b
function task1() {
let firstNamber = parseFloat(prompt('Ведіть число A для обчислення'));
let namberTwo = prompt('Введіть число 12');
namberTwo = 12;
let namberTre = parseFloat(prompt('Введыть число B для обчислення'));
let sumNamber = firstNamber + namberTwo + namberTre;
document.write('Сума обчислених чисел = ' + sumNamber); 
}


// Обчислення S2= √(a+b)/2*a 
function task2() {
let namberA = parseFloat(prompt('Введіть число А'));
let namberB = parseFloat(prompt('Введіть число B'));
let sumAandB = namberA + namberB;
let namberAand2 = namberA * 2;
let divisenSam = sumAandB / namberAand2;
let root = Math.sqrt(divisenSam);
document.write('Значення виразу = ' + root);
}


// Обчислення S3= 3√(a+b)*с  
function task3() {
    let objektA = parseFloat(prompt('Введіть число A'));
    let objektB = parseFloat(prompt('Введіть число B'));
    let objektC = parseFloat(prompt('Введіть число C'));

    let plastSum = objektA + objektB;
    let multiplikatioSum = plastSum * objektC;
    let sumRoot = Math.sqrt(multiplikatioSum);
    let exponentSum = sumRoot ** 3
    document.write('Значення виразу = ' + exponentSum);

}

// Обчислити S4= sin(a / -b)
function task4() {
    let objektOne = parseFloat(prompt('Введіть число А'));
    let objektTwo = -parseFloat(prompt('Введіть число В яке отримує знак мінус'));
    let sumDivision = objektOne / objektTwo;
    let sin = Math.sin(sumDivision);
    document.write('Значення виразу = ' + sin);
}

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
function task5() {
let objectFirst = parseFloat(prompt('Введіть будласка число один'));
let objecSecond = parseFloat(prompt('Введіть будласка число два'));

let multiplicationObjecs = objectFirst * objecSecond;
let divisenObjects = objectFirst / objecSecond;

document.write("<table border='1'>");
document.write("<tr><td>Операція</td><td>Результат</td></tr>");
document.write("<tr><td>Добуток чисел</td><td>" + multiplicationObjecs + "</td></tr>");
document.write("<tr><td>Частка чисел</td><td>" + divisenObjects + "</td></tr>");
document.write("</table>");
}

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
function task6() {
let wasBorn = parseInt(prompt('Ведіть ваш рік народження'));
let ageClaent = 2024 - wasBorn; 
document.write('На сьогодні ваш вік: ' + ageClaent);
}

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
function task7() {
let allGoоds = parseInt(prompt( 'Введіть кількість одиниць товару'));
let priceGoоd = parseFloat(prompt( 'Введіть ціну одиниці товару'));
let allSum = allGoоds * priceGoоd;
document.write('Загальна вартість товару :' + allSum + '<br>' );
let pdvSum = allSum * 0.05;
document.write('Це ПДВ з кількості товару :' + pdvSum);
}

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
function task8() {
let lengthInSm = parseFloat(prompt('ведіть відстань у сантиметрах'));
let lengthInMeters = lengthInSm / 100;
let lengthInKilomerets = lengthInSm / 1000;
document.write ('Ваше число в метрах:'+ lengthInMeters + '<br>' );
document.write ('Ваше число в кілометрах:' + lengthInKilomerets);
}

// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
function task9() {
let namberInSecond = parseFloat(prompt('Введіть число в секундах'));
let minets = namberInSecond / 60;
let hours = minets / 60;
document.write('Ваше число в хвилинах :' + minets + '<br>');
document.write ('Ваше число в годинах :' + hours); 
}

function task10() {
// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість. 
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

let good1 = parseInt(prompt('Введіть кількість товару 1'));
let price1 = parseFloat(prompt('Введіть ціну товару 1'));

let good2 = parseInt(prompt('Введіть кількість товару 2'));
let price2 = parseFloat(prompt('Введіть ціну товару 2'));

let good3 = parseInt(prompt('Введіть кількість товару 3'));
let price3 = parseFloat(prompt('Введіть ціну товару 3'));

let SumGoods1 = good1 * price1;


let SumGoods2 = good2 * price2;


let SumGoods3 = good3 * price3;


let allSumGoods = SumGoods1 + SumGoods2 + SumGoods3;



document.write('<h2>Чек:</h2>');

document.write('<table>');
document.write('<tr><th>Товар</th><th>Кількість</th><th>Ціна за одиницю</th><th>Загальна вартість</th></tr>');

document.write('<tr>');
document.write('<td>Товар 1</td>');
document.write('<td>' + good1 + '</td>');
document.write('<td>' + price1 + '</td>');
document.write('<td>' + SumGoods1 + '</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td>Товар 2</td>');
document.write('<td>' + good2 + '</td>');
document.write('<td>' + price2 + '</td>');
document.write('<td>' + SumGoods2 + '</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td>Товар 3</td>');
document.write('<td>' + good3 + '</td>');
document.write('<td>' + price3 + '</td>');
document.write('<td>' + SumGoods3 + '</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td colspan="3">Загальна вартість:</td>');
document.write('<td>' + allSumGoods + '</td>');
document.write('</tr>');

document.write('</table>');
}


// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

function task11() {
let randomMоnth = Math.ceil(Math.random()*12);
document.write('Випадковий місяць: ' + randomMоnth + '<br>');

let randomDay = Math.ceil(Math.random()*6);
document.write('Випадковий день: ' + randomDay + '<br>');

let SumMonthDay = randomMоnth + randomDay;

document.write('Сума двох випадкових чисел місяця та дня : ' + SumMonthDay);
}

