

/* Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
При кліку на якийсь із них усі наступні повинні бути зафарбовані 
у червоний колір. */

function Hello() {
    let clickDiv = this

    let sibling = clickDiv.previousElementSibling

    while (sibling && sibling.tagName === 'DIV') {

        sibling.style.backgroundColor = 'red';
        sibling = sibling.previousElementSibling;
    }


}

let divList = document.getElementById('one').querySelectorAll('div');
for (let div of divList) {
    div.onclick = Hello
}

/* Задача 2.Дано 5 елементів input. При введенні значення у якийсь із них 
необхідно автоматично заповнювати інші (усі попередні у спадному порядку
(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 
більше (кожен наступне на 1 більше за попереднього) */

let inputList = document.getElementById('two').querySelectorAll('input');

for (let inp of inputList) {
    inp.addEventListener('input', writeInform);
}

function writeInform(event) {
    let currentValue = parseInt(event.target.value);
    let currentIndex = Array.from(inputList).indexOf(event.target);

    for (let i = 0; i < inputList.length; i++) {
        inputList[i].value = currentValue + i - currentIndex;
    }
}

/* Задача 3.Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами 
  (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
  При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у 
  зелений колір, інші у червоний. */


function bildList() {
    let conteiner = document.getElementById('thre')
    conteiner.style.display = 'flex'

    for (let u = 0; u < 5; u++) {
        let newUl = document.createElement('ul')
        conteiner.append(newUl)

        let countNums = parseInt(Math.random() * 10) + 1

        for (let i = 0; i < countNums; i++) {

            let numsLi = parseInt(Math.random() * 100) + 1
            let newLi = document.createElement('li')
            newLi.innerText = `===== ${numsLi} =====`;
            newUl.appendChild(newLi);
        }
    }
    const startBtn = document.createElement('button')
    startBtn.innerText = `Start`
    conteiner.append(startBtn)
    startBtn.style.marginLeft = '30px'

    startBtn.addEventListener('click', pushBtn)

}

function pushBtn() {

    let list = document.querySelectorAll('#thre ul')

    list.forEach(list => {
        if (list.children.length % 2 === 0) {
            list.style.color = 'green'
        }
        else
            list.style.color = 'red'
    }

    )

}

window.onload = function () {
    bildList();
}


/* Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається
 клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка 
 (спробуйте додати можливість відображення кількості кліків біля
назви таблиці з використанням відповідно доданого для цього атрибута). */


function pressElement() {
    let touchEl = document.querySelectorAll('#four td');
    touchEl.forEach(elem => {
        elem.addEventListener('click', function() {
            elem.style.border = '2px solid red'
        });
    });
}


function buildBox() {
    let conteinerBox = document.getElementById('four')

    for (let t = 0; t < 3; t++) {
        let newTable = document.createElement('table')
        conteinerBox.appendChild(newTable)


        for (let r = 0; r < 3; r++) {
            let newTr = document.createElement('tr')
            newTable.appendChild(newTr)


            for (let b = 0; b < 3; b++) {
                let newTd = document.createElement('td')
                newTr.appendChild(newTd)



                let randNum = parseInt(Math.random() * 100) + 1;
                newTd.innerText = randNum;
            }
        }
    }
    pressElement()
}


    buildBox();
  




/* Задача 5. Відображаємо картки товарів, які користувач може вибирати. 
Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента) */

window.addEventListener('load', function() {
    targeting();
});


function targeting() {
    let targEl = document.querySelectorAll('#five div');
    
    targEl.forEach(elem => {
        elem.addEventListener('click', function() {
            elem.classList.toggle('line'); 
        });
    });
}

/* Задача 6.Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.<br> 
При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто <br>
був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань.<br> 
При натисканні на червону стрілку спортсмен переміщається у загальний список. */



function sportsmenBoxs () {
    let conteinr = document.getElementById('six')
    conteinr.style.display = 'flex'
    conteinr.style.gap = '50px'
    
    let boxOne = document.createElement('div')
    boxOne.classList.add('box1');
    conteinr.append(boxOne)
    
    boxOne.style.border = '4px solid black'
    boxOne.style.width = '300px'
    boxOne.innerText = 'Список спортсменів'
    boxOne.style.textAlign = "center";
    
    let sportsNam = [
    "Бубка Сергій", 
    "Шевченко Андрій", 
    "Федерер Роджер", 
    "Надаль Рафаель", 
    "Мессі Ліонель", 
    "Роналду Кріштіану"];

    for (let b = 0; b < 6; b++) { 
    let nameCont = document.createElement('div')
    boxOne.append(nameCont)
    nameCont.classList.add('sportN')

    nameCont.style.border = '2px solid black'
    nameCont.style.width = '250px'
    nameCont.style.height = '40px'
    nameCont.style.margin = '20px'
    nameCont.style.padding = '25px 0 25px 0'
    
    nameCont.innerText = sportsNam[b]
    boxOne.appendChild(nameCont);

    let imgEl = document.createElement('img')
    imgEl.src = "img/st.png"
    imgEl.classList.add('hand');
    nameCont.appendChild(imgEl);
    
    imgEl.style.margin =  ' 10px 0 0 50px'
    imgEl.style.width = '30px'; 
    imgEl.style.height = '30px'
    }

    let boxTwo = document.createElement('div')
    conteinr.append(boxTwo)
    boxTwo.classList.add('box2')
    boxTwo.innerText = 'Обрані для змагання'

    boxTwo.style.border = '4px solid black'
    boxTwo.style.width = '300px'
    boxTwo.style.textAlign = "center";
}
sportsmenBoxs();



function selectNames() {
    let btn = document.querySelectorAll('.hand')
    let boxTwo = document.querySelector('.box2') 
    
    btn.forEach(img => {
        img.addEventListener('click', function() {
            let nameCont = this.parentNode; 
            nameCont.parentNode.removeChild(nameCont);
            boxTwo.appendChild(nameCont) 
        });
    });
}

selectNames(); 


function returnNames(event) { 
    const clickedElement = event.target;
    if (clickedElement.tagName === 'DIV' && clickedElement.classList.contains('sportN')) {
        let nameCont = clickedElement
        const boxOne = document.querySelector('.box1');
        boxOne.appendChild(nameCont)
    }
}

document.querySelector('.box2').addEventListener('click', returnNames);


returnNames();




