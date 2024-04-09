
/* 1) номери рядків від 0 до половини, стовпці від 0 до половини
тобто  знайти суму елементів 0, 1 рядка які мають індекс 0 та 1*/


function task1() {

    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];

    let resaltCaunt = 0;

    for (let rowArr = 0; rowArr <= 1; rowArr++) {
        for (let num = 0; num <= 1; num++) {
            document.write(`Числа з масиву ${multiArr[rowArr][num]} <br>`)
            resaltCaunt += multiArr[rowArr][num];
        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Сума вказаних елементів масиву = ${resaltCaunt}`)
}


/* 2)номери рядків від 0 до половини, стовпці від половини до кінця.
Тобто, рядки 0 та 1, стовпці 2 та 3 */
function task2() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];

    let tackSum = 0;

    for (let rowArr = 0; rowArr <= 1; rowArr++) {
        for (let num = 2; num <= 3; num++) {
            document.write(`Числа з масиву ${multiArr[rowArr][num]} <br>`)
            tackSum += multiArr[rowArr][num];
        }

    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень ${tackSum}`)
}

/*3)номери рядків (від половини до кінця, стовпці від 0 до половини)
Тобто, рядки від 2 до 4, стовбці від 0 до 1*/

function task3() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];
    let sumNambers = 0;

    for (let arrRow = 2; arrRow < multiArr.length; arrRow++) {
        for (let num = 0; num <= 1; num++) {
            document.write(`Задані умовою числа ${multiArr[arrRow][num]} <br>`)
            sumNambers += multiArr[arrRow][num]
        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень ${sumNambers}`)
}


/* 4) номери рядків від половини до кінця , стовпці від половини до кінця.
Тобто, рядки від 2 до 4, стовпці від 2 до 4 */

function task4() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];
    let sunResalt = 0;

    for (let rowArr = 2; rowArr < multiArr.length; rowArr++) {
        for (let numArr = 2; numArr < multiArr[rowArr].length; numArr++) {
            document.write(`Задані умовою числа ${multiArr[rowArr][numArr]} <br>`)
            sunResalt += multiArr[rowArr][numArr]
        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень ${sunResalt}`)
}

/*5) Суму парних рядків, тобто сума елементів 2 і 4 рядка*/

function task5() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];
    let sumTwoRow = 0;

    for (let row = 0; row < multiArr.length; row += 2) {
        for (let numArr = 0; numArr < multiArr[row].length; numArr++) {
            document.write(`Задані умовою числа ${multiArr[row][numArr]} <br>`)
            sumTwoRow += multiArr[row][numArr]
        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень ${sumTwoRow}`)
}

/*6) Суму непарних стовпців*/
function task6() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];

    let sumUnpairedRow = 0

    for (let row = 1; row < multiArr.length; row += 2) {
        for (let numArr = 0; numArr < multiArr[row].length; numArr++) {
            document.write(`Задані умовою числа ${multiArr[row][numArr]} <br>`)
            sumUnpairedRow += multiArr[row][numArr]
        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень ${sumUnpairedRow}`)
}

/* 7) У парних рядках – непарні стовпці, у непарних – парні. 
 Тобто, тобто рядки 0 та 2 стопці 1 та 3. I в рядказ 1 та 3 стовпці 0 та 2*/

function task7() {
    let multiArr = [[10, 20, 25, 14], [30, 70, 97, 43], [56, 78, 54, 32], [56, 67, 87, 21]];
    let sumCalculation = 0;

    for (let row = 0; row < multiArr.length; row++) {
        for (let indexCol = 0; indexCol < multiArr[row].length; indexCol++) {
            if ((row % 2 === 0 && indexCol % 2 !== 0) || (row % 2 !== 0 && indexCol % 2 == 0)) {
                document.write(`Елементи масиву згідно умови ${multiArr[row][indexCol]} <br>`)
                sumCalculation += multiArr[row][indexCol]
            }

        }
    }
    document.write(`Масив данних ${multiArr} <br>`)
    document.write(`Результат обчисдень згідно умови ${sumCalculation}`)
}

/*Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
1) загальний прибуток кожного масиву за тиждень;*/


function task8() {
    let profitShop = [

        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    for (let shop = 0; shop < profitShop.length; shop++) {
        let profitToWeek = 0;
        for (let dayProfit = 0; dayProfit < profitShop[shop].length; dayProfit++) {
            profitToWeek += profitShop[shop][dayProfit]

        }
        document.write(`Прибуток магазину ${shop + 1} за тиждень ${profitToWeek} <br>`)
    }
}


/* 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);*/

function task9() {

    let profitShop = [

        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    for (let shop = 0; shop < profitShop.length; shop++) {
        let profitTwoDays = 0;
        for (let dayProfit = 0; dayProfit < 2; dayProfit++) {
            profitTwoDays += profitShop[shop][dayProfit];
        }
        document.write(`Прибуток магазину ${shop + 1} за понеділок і вівторок ${profitTwoDays} <br>`)
    }

}

/* 3) загальний прибуток за робочі дні*/

function task10() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    for (let shop = 0; shop < profitShop.length; shop++) {
        let profitWorkDays = 0;
        for (let day = 0; day < 5; day++) {
            profitWorkDays += profitShop[shop][day]

        }
        document.write(`Прибуток магазину ${shop + 1} за робочі дні ${profitWorkDays} <br>`)
    }
}

/*4) загальний прибуток за вихідні дні*/

function task11() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    for (let shop = 0; shop < profitShop.length; shop++) {
        let profitOnWeekend = 0;
        for (let day = 5; day < profitShop[shop].length; day++) {
            profitOnWeekend += profitShop[shop][day]
        }
        document.write(`Прибуток магазину ${shop + 1} за вихідні ${profitOnWeekend} <br>`)
    }

}


/* 5) максимальний прибуток за середу  */

function task12() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    let maxProfitWednesday = 0;


    for (let shop = 0; shop < profitShop.length; shop++) {
        if (profitShop[shop][2] > maxProfitWednesday) {
            maxProfitWednesday = profitShop[shop][2]
        }
    }
    document.write(` Максимальний прибуток за середу ${maxProfitWednesday}`)

}

/* 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 60 */

function task13() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

    let newProfitArr = []

    for (let shop = 0; shop < profitShop.length; shop++) {
        for (index = 0; index < profitShop[shop].length; index++) {
            if (profitShop[shop][index] > 60) newProfitArr.push(profitShop[shop][index])
        }
    }
    document.write(`Масив зі значеннями більше за  60 = ${newProfitArr}`)
}

/* 7) відсортувати кожен тиждень за зростанням */

function task14() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];


    for (let shop = 0; shop < profitShop.length; shop++) {
        let growthArr = profitShop[shop].sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            else return 0;
        })
        document.write(` Магазин ${shop + 1} прибуток по зростанню ${growthArr} <br>`)
    }

}

/* 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), 
 тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків */

function task15() {

    let profitShop = [
        [23, 45, 12, 67, 89, 34, 56],
        [78, 90, 32, 54, 21, 76, 98],
        [43, 65, 87, 10, 31, 54, 76],
        [98, 76, 54, 32, 10, 21, 43],
        [65, 43, 21, 98, 76, 54, 32]
    ];

     

    for (let shop = 0; shop < profitShop.length; shop++) {
         profitShop[shop].sort((a,b) =>  b-a )
         
        }
       
        document.write(`Елементи рядків відсортовано по спаданню ${profitShop}`)

    }
    

/* 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні 
    двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум 
    буде зрозуміло, який з елементів повинен іти раніше)*/

    function task16() {

        let profitShop = [
            [23, 45, 12, 67, 89, 34, 56],
            [78, 90, 32, 54, 21, 76, 98],
            [43, 65, 87, 10, 31, 54, 76],
            [98, 76, 54, 32, 10, 21, 43],
            [65, 43, 21, 98, 76, 54, 32]
        ];
    
        let sumEveryShop = []
    
        for ( let shop of profitShop) {
            let sumollProfit = 0;
            for (let namber of shop) {
                sumollProfit += namber;
            }
            sumEveryShop.push(sumollProfit); // новий масив з сумами прибутків магазинів за кожен тиждень
            
            minProfitOnWeek = sumEveryShop.sort((a,b)=> { 
            if(a < b) return 1;
            if(a > b) return -1;
            else return 0
        })
          
          }
          document.write(`Прибуток магазинів за тиждень від більшого по спадаючій ${minProfitOnWeek}`)
    }