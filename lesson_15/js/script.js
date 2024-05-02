
/*Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є 
функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між 
заданими мінімальним і максимальних значенням. Використати обидва методи стосовно обидвох об’єктів 
(використати call, apply) */

function task0() {

    let objectOne = {
        arrNums: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

        addSum: function () {
            return this.arrNums.reduce((prevSum, num) => prevSum + num, 0)
        }
    }
    document.write(`Сума першого об'єкта - ${objectOne.addSum()} <br>`)



    let objectTwoo = {
        arrNums: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],

        multiplicationSum: function () {
            let minNum = Math.min(...this.arrNums);
            let maxNum = Math.max(...this.arrNums);
            let sumMultiplic = this.arrNums.reduce((prevSum, num) => {
                if (num < maxNum && num > minNum) {
                    return prevSum * num;
                } else {
                    return prevSum;
                }
            }, 1);
            return sumMultiplic;
        }
    };

    document.write(`Добуток другого об'єкта - ${objectTwoo.multiplicationSum()} <br>`);



    let result = objectOne.addSum.call(objectTwoo);
    document.write(`Сума об'єкта "два" з використанням call - ${result} <br>`);

    let multSum = objectTwoo.multiplicationSum.call(objectOne)
    document.write(`Добуток чисел першого об'єкта з використанням call - ${multSum} <br>`);
}


/* Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.*/


function task1() { 

let shootingGallery = {
    
    gamePlace: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    
    shootSistem: function () {
            let shootNum = parseInt(prompt(`Ведіть число від 1 до ${this.gamePlace.length}, щоб взнати де заєць`));
    
            if (shootNum >= 1 && shootNum <= this.gamePlace.length) {
                let curentGamePlace = this.gamePlace[shootNum-1]
                if(curentGamePlace === 1) alert('Ви попали в пана Зайця')
                else alert('Невдача, пана зайця тут немає')
             
            }
        }
    
    }
    shootingGallery.shootSistem();
    

let showShootPlese = JSON.stringify(shootingGallery.gamePlace);
document.write(`Поле на якому живуть зайці ${showShootPlese}`);
}

/*Задача 2. Створити об’єкт «Авто». Поля(властивості) Марка Розмір бака 
Кількість наявних літрів Кількість місць Кількість пасажирів.
Методи (дії)	
Заправка на вказану кількість літрів, Виведення кількості пасажирів, Додавання пасажирів,Висадка пасажирів */

function task2() { 

let auto = {
    
    brendOfCar:'Chaika',
    tankSize: 80,
    fuelNow: 60,
    numberOfSeats: 5,
    passengersNow: 1,

    refuelCar: function (){
        let liters = this.tankSize - this.fuelNow;
        document.write(`Автомобіль потрібно дозаправити на - ${liters} літрів <br>`)
    },

    nowPassenger: function () {
       document.write (`На данний момент в автомобілі - ${this.passengersNow} пасажира <br>`) 
    },

    pickUpPassenger: function ( ){
      let pickUp = this.numberOfSeats - this.passengersNow;
      document.write (`На данний момент в автомобілі ще - ${pickUp} свобідних місця <br>`)
    }, 

    plastPassenger: function (puple) {
        maxPassenger = this.passengersNow + puple

        if (maxPassenger === 6) document.write('Свобідних місць немає')
        else
        document.write (`В автомобілі з ${this.numberOfSeats} містсь, зайнято ${maxPassenger} місця`)

    },
}

auto.refuelCar();
auto.nowPassenger();
auto.pickUpPassenger();
auto.plastPassenger (2);
}



/*Розробити клас MultChecker для перевірки таблиці множення

Поля

Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
Кількість правильних відповідей
Кількість неправильних відповідей

Методи

Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
Перевірка правильності вказаної відповіді, render - виведення інформації про тестування на екран */ 

 function task3() {
    
    class MultChecker {
        constructor() { 
        this.firstNam = 0
        this.correctAnser = 0;
        this.wrongAnswer = 0;
        }
        
        enterNam () {
        let howMatch =  parseInt(prompt('Скільки прикладів ви бажаєте розвязати, введіть число'))
        this.firstNam = parseInt(prompt('Для перевірки знань введіть число від 1 до 9'))

        if( this.firstNam > 0 && this.firstNam <= 9)  { 
        
        for(let i = 0; i < howMatch; i++ ) {  
        let randomNum = Math.floor(Math.random() *9 )+1;
        let start = prompt(`${this.firstNam} * ${randomNum} `)
         
        if ( parseInt(start) === this.firstNam * randomNum ) this.correctAnser++
         else this.wrongAnswer++ 
        }
        alert(` Вірних відповідей - ${this.correctAnser} Відповідей з помилкою - ${this.wrongAnswer}`)
        }
        
        else 
        alert ('Ви ввели некоректне число для перевірки ваших знань')
    }

    }
    let checker = new MultChecker();
    checker.enterNam();
   
}


/* Задача 4.Розробити клас Baner.Поля - Масив об’єктів ( графічних зображень та посилань на сайти).
 Методи - Метод випадкового вибору об’єкта (графічного зображення та посилання),Метод виведення 
 випадкового банера */ 

 function task4() { 

  class Baner {

    constructor (grafik, link) {
    this.grafik = grafik
    this.link = link

    }

    randomFoto() {
        let random = Math.floor(Math.random()*this.grafik.length)
        return this.grafik[random]
    }

    randomLink () {
        let linkIndex = Math.floor(Math.random()*this.link.length)
        return this.link[linkIndex]
    }

   

}


 let grafik = [ '../img/it.jpg', '../img/Kiev.jpg', '../img/Lviv.jpg', '../img/Ukraine.jpg', '../img/snow.jpg']
 let link = ['https://fls.guru/', 'https://rozetka.com.ua/', 'https://www.olx.ua/', 'https://www.yagoda-sweden.com/']

 let banner = new Baner(grafik, link);
 console.log (banner)
 console.log (banner.randomFoto())
 console.log (banner.randomLink())
 
 }

 
 
 /* Задача 5.Розробити клас «Керівник танців» Поля	Масив імен хлопці, вМасив імен дівчат. 
 Методи	Метод випадкового вибору імені хлопця. Метод випадкового вибору імені дівчини
 Метод виведення пари для танців. Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців. */

function task5() { 
 
class danceBoss{

    constructor (boysName,girlsName) {
        this.boysName = boysName
        this.girlsName = girlsName 

    }

    randomCouple () {

        let danceBoy = Math.floor(Math.random()*this.boysName.length)
        let danceGirl = Math.floor(Math.random()*this.girlsName.length)

        let teamHourCouple = [this.boysName[danceBoy], this.girlsName[danceGirl]]
        return teamHourCouple

    }

    showCouple () {
        let couple = this.randomCouple ()
        document.write(`Танцюють в парі зараз ${couple} <br>`)
    }
 }


 let boysName = ['Oleg', 'Ivan', 'Petro', 'Igor', 'Dmitro'];
 let girlsName =['Ira', 'Olena', 'Vira', 'Oksana', 'Marta'];


 let danceCouple = new danceBoss (boysName, girlsName);
 console.log(danceCouple.randomCouple());
 setInterval(function() { danceCouple.showCouple(); }, 5000);
 
}