

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function task0() {
    function getSeasonsYear(month) {
        let season;
        switch (month) {
            case 12:
            case 1:
            case 2: season = 'Зима'
                break;
            case 3:
            case 4:
            case 5: season = 'Весна'
                break;
            case 6:
            case 7:
            case 8: season = 'Літо'
                break;
            case 9:
            case 10:
            case 11: season = 'Осінь'
                break;

            default:
                season = 'Введене число, не коректне.'
                break;
        }
        return season;
    }

    let month = parseInt(prompt('Введіть число в відповідності до місяця року'));
    let EnterSeason = getSeasonsYear(month);
    alert(EnterSeason);
}




function task1() {
    // Створити функцію, яка за номером місяця повертає його назву.

    function getNameMonth(nums) {
        let countMonth;

        switch (nums) {
            case 1: countMonth = 'Січень'
                break;
            case 2: countMonth = 'Лютий'
                break;
            case 3: countMonth = 'Березень'
                break;
            case 4: countMonth = 'Квітень'
                break;
            case 5: countMonth = 'Травень'
                break;
            case 6: countMonth = 'Червень'
                break;
            case 7: countMonth = 'Липень'
                break;
            case 8: countMonth = 'Серпень'
                break;
            case 9: countMonth = 'Вересень'
                break;
            case 10: countMonth = 'Жовтень'
                break;
            case 11: countMonth = 'Листопад'
                break;
            case 12: countMonth = 'Грудень'
                break;

            default: countMonth = 'Не вірно введене число'
                break;

        }
        return countMonth;

    }


    let nums = parseInt(prompt('Введіть номер місяця'));
    let MonthResalt = getNameMonth(nums);
    alert(MonthResalt);
}


// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим. 

function task2() {
    function getFunctioDay(numerDayWeek) {
        let dayName;
        switch (numerDayWeek) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: dayName = 'Робочий день'
                break;
            case 6:
            case 7: dayName = 'Вихідний день'
                break;

            default: dayName = 'Не вірно введене число'
                break;

        }

        return dayName;
    }

    let numerDayWeek = parseInt(prompt('Ведіть номер дня'));
    let DayWeek = getFunctioDay(numerDayWeek);
    alert(DayWeek)


}


// Створити окремі функції, які для 4 чисел знаходять: 

function task3() {

    function getPlastResal(a, b, c, d) {
        return a + b + c + d
    }

    function getMultyplyingResalt(a, b, c, d) {
        return a * b * c * d
    }

    function getMiddleSum(a, b, c, d) {
        return (a + b + c + d) / 4

    }

    function isMinNambet(a, b, c, d) {
        let min = a;
        if (a > b)
            min = b;
        if (b > c)
            min = c;

        if (c > d)
            min = d;
        return min;
    }

    let numA = parseFloat(prompt('ведить перше число'));
    let numB = parseFloat(prompt('ведить друге число число'));
    let numС = parseFloat(prompt('ведить трете число число'));
    let numD = parseFloat(prompt('ведить четверте число'));

    document.write(`Ви ввели числа ${numA},${numB},${numС},${numD};` + '<br>')

    document.write(`Результат обчислення cуми чисел ${getPlastResal(numA, numB, numС, numD)}` + '<br>')
    document.write(`Результат обчислення добутку чисел ${getMultyplyingResalt(numA, numB, numС, numD)}` + '<br>')
    document.write(`Результат обчислення середнього арефметичного ${getMiddleSum(numA, numB, numС, numD)}` + '<br>')
    document.write(`Результат обчислення мінімального значення ${isMinNambet(numA, numB, numС, numD)}` + '<br>')
}

/* Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
кількість парних, кількість додатних, кількість більших за 100.*/

function task4() {
    function getlotOfResalts(a, b, c) {
        let countNamber = 0;
        if (a % 2 === 0)
            countNamber++
        if (b % 2 === 0)
            countNamber++
        if (c % 2 === 0)
            countNamber++


        let noZiro = 0;
        if (a > 0) {
            noZiro++
        }

        if (b > 0) {
            noZiro++
        }
        if (c > 0) {
            noZiro++
        }

        let big = 0;
        if (a > 100)
            big++
        if (b > 100)
            big++
        if (c > 100)
            big++

        return { countNamber, noZiro, big }
    }


    let namberA = parseFloat(prompt('Ведіть перше число'));
    let namberB = parseFloat(prompt('Ведіть друге число '));
    let namberC = parseFloat(prompt('Ведіть трете число'));

    document.write(`Ви ввели числа ${namberA},${namberB},${namberC}` + '<br>')

    let result = getlotOfResalts(namberA, namberB, namberC);

    document.write(`кількість парних чисел ${result.countNamber}` + '<br>');
    document.write(`кількість додатніх чисел ${result.noZiro}` + '<br>');
    document.write(`кількість чисел більших за 100 ${result.big}` + '<br>');

}


/*Задача 5. Створити окремі функції, які переводять: Сантиметри у дюйми; Кілограми у фунти; Кілометри у милі.
 */
function task5() {

    function getSmInch(santimeters) {
        return santimeters / 2.54

    }

    function getKgPound(kg) {
        return kg / 0.45

    }

    function getKmMile(km) {
        return km * 0.62

    }


    santimeters = parseFloat(prompt('Ведіть кількість сантиметрів щоб отримати дюйми'));
    resultСonversionInch = getSmInch(santimeters);
    document.write(`${santimeters}см = ${resultСonversionInch.toFixed(2)} дюймів` + '<br>');

    kg = parseFloat(prompt('Ведіть кількість кілограм щоб отримати фунти'));
    calculetPound = getKgPound(kg);
    document.write(`${kg}кг = ${calculetPound.toFixed(2)}фунтів ` + '<br>')


    km = parseFloat(prompt('Ведіть кількість кілометрів щоб отримати значення в милях'));
    calculeMile = getKmMile(km);
    document.write(`${km}км = ${getKmMile(km)} Миль ` + '<br>')



}

/* Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
(таблиця заповнюється заданим фіксованим повідомленням). */

function task6() {

    function drawTable(row, box) {
        document.write('<table border = "2">');

        for (let i = 0; i < row; i++) {
            document.write('<tr>')

            for (let g = 0; g < box; g++) {
                document.write('<td>I love JS</td>')

            }
            document.write('</tr>')

        }
        document.write('</table>');

    }


    row = parseInt(prompt('Ведіть бажану кількість рядків'));
    box = parseInt(prompt('Ведіть бажану кількість стовпчиків'));

    taskResalt = drawTable(row, box)

    document.write(taskResalt);
}

/* Дано покази температур (довільна кількість). Розробити функцію,
   яка дозволить підрахувати кількість від’ємних показів температури. */

function task9() {

    let enterTemperatureNambers = parseInt(prompt('Скільки показників температури ви хочете дослідити'));
    minusCointer = 0;

    function getMinusTemperature() {
        for (let i = 0; i < enterTemperatureNambers; i++) {

            let allTemperature = parseInt(prompt('Введіть показники температури'));


            if (allTemperature < 0) {
                minusCointer++
            }
        }

        return minusCointer;
    }

    let minusTemperatureCount = getMinusTemperature();
    document.write(`Серед введених ${enterTemperatureNambers} значень, було виявлено ${minusTemperatureCount} показників з від'ємною температурою`);
}


/* Дано покази температур (довільна кількість). Розробити функцію, 
  яка дозволить знайти середнє значення для додатних показів температури.*/

function task10() {

    let amountNambers = parseInt(prompt('Яку кількість показників вихочете ввести?'));
    let sumTemperarute = 0;
    let positivNamber = 0;

    function getMiddleTemperature() {

        for (let i = 0; i < amountNambers; i++) {
            let enterAllNambers = parseInt(prompt('Введіть показники температури'));

            if (enterAllNambers > 0) {
                sumTemperarute += enterAllNambers
                positivNamber++
            }

        }

        if (positivNamber === 0) {
            alert('Введіть хочаб обне значення з додатнім показником')
            return 0;
        }
        else {
            let resaltMiddelNum = sumTemperarute / positivNamber;
            return resaltMiddelNum;

        }


    }

    let finalResaltMiddlNamber = getMiddleTemperature();
    document.write(`Середне температурне значення за введеними показниками буде ${finalResaltMiddlNamber}`);

}
