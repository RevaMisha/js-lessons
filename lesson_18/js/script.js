
// Задача Калькулятор

let numOne = document.getElementById('onenum')
let numTwo = document.getElementById ('secondnum')
let resalt = document.getElementById ('res')

function plusEls(){
    let plusSum = parseFloat(numOne.value) + parseFloat(numTwo.value)
    resalt.value = plusSum
}


function minusEls(){
    let minusSum = parseFloat(numOne.value) - parseFloat(numTwo.value)
    resalt.value = minusSum
}

function multEls() {
    let multSum = parseFloat(numOne.value) * parseFloat(numTwo.value)
    resalt.value = multSum
}

function divisEls() {
    let divisSum = parseFloat(numOne.value) / parseFloat(numTwo.value)
    resalt.value = divisSum
}

// Задача Конвертор валют

const exchangEvro = 42
const exchangeDoll = 40
let sunInGrv = document.getElementById('grv')
let sumInDoll = document.getElementById('dol')
let sumInEvro = document.getElementById('evro')

function moneyConvertor() {
    convDoll = parseInt(sunInGrv.value / exchangeDoll)
    sumInDoll.value = convDoll
    convEvro = parseInt(sunInGrv.value / exchangEvro)
    sumInEvro.value = convEvro 
}

// Задача 3.Користувач задає рік народження. Визначити кількість років користувача.

const yareNaw = 2024
let enterAge = document.getElementById('birthday')
let showAge = document.getElementById('age')


function getAgeHuman() {
    if (enterAge.value > 1000 &&  enterAge.value <= 2099){ 
    let personAge = yareNaw - parseInt(enterAge.value)
    showAge.value = personAge }
    else alert('Не коректно введений рік народження')
}

/* Задача 4. 
<p>Наперед задано у скрипті масив зі списком бажань. Після завантаження 
сторінки випадковим чином вибираються 3 і відображаються у окремих div 
(їх треба створити і додати на сторінку)
*/

let dreamList = ['Кохання', 'Міцне здоров"я', 'Домашній улюбленець', 'Подорож закордон', 
'Зустріч з друзями', 'Купівля Авто', 'Кар"єрний ріст', 'Народження дитини', 'Купівля будинку',
'Нова посада', 'Міцні зуби', 'Вірна дружина', 'Народження двійні', 'Феноминальна пам"ять',
'Психологічна стійкість', 'Фізична витривалість', 'Захоплюча фігура', 'Розуміючі співробітники'
]

let outObject = document.getElementById('object')
for (let ind = 0; ind < 3; ind++ ) {
    let wordEl = document.createElement('p')
    let randomIndex = Math.floor(Math.random() * dreamList.length);
    let randomWord = dreamList[randomIndex];
    wordEl.textContent = randomWord
    outObject.append(wordEl) 
}

/* Задача 5.Відобразити таблицю 3*4 з випадковими числами 
(її треба динамічно створити і вставити на сторінку)*/

function bildTab(row, column, min = 10, max = 30) {
    
    let tabEl = document.createElement('table');
    for (let r = 0; r < row; r++) {
        let trEl = document.createElement('tr');
        for (let c = 0; c < column; c++) {
            let randomNumbers = min + Math.floor(Math.random() * (max - min + 1));
            let tdEl = document.createElement('td');
            tdEl.innerText = randomNumbers;
            trEl.append(tdEl);
        }
        tabEl.append(trEl);
    }
    return tabEl;
    
}

const box = bildTab(4, 3);
let plese = document.getElementById('tab')
plese.append(box); 


/*Задача 7.Подорож складається з 3 етапів. На кожному етапі користувач може вибрати 
один з видів транспорту (авто, автобус, літак - випадаючий список), харчування 
(сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons).
Ціни визначте самі. Підрахувати загальну вартість.*/

function getTravelSum() {
     
    const transport = document.querySelector('select')
    const transportPrace = parseInt(transport.value)

    const foodOption = document.querySelectorAll('input[type=checkbox]')
    let footPrice = 0

    foodOption.forEach(option => {
        if(option.checked) 
        footPrice += parseInt(option.value)    
    }); 

    const guide = document.querySelectorAll('input[type= radio]')
    let guidePrice = 0

    guide.forEach(elem=> {
        if(elem.checked) 
            guidePrice += parseInt(elem.value)
    })
 
    document.getElementById('allsum').value = transportPrace + footPrice + guidePrice 
}




   
