// З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я  тієї дитини, у якої кількість цукерок є більшою, 
// або вивести, що кількість однакова.

function solving1() {
    let nameFirstChaild = prompt('Введіть ім`я першої дитини');
    let candiesFirsChaild = parseInt(prompt('Кількість цукерок Першої дитини'));
    let nameSecondChaild = prompt('Введіть ім`я другої дитини'); 
    let candiesSecondChaild = parseInt(prompt('Кількість цукерок Другої дитини'));

    if (candiesFirsChaild > candiesSecondChaild)
    document.write(`${nameFirstChaild} має більше цукерок `)
    
    else if (candiesFirsChaild === candiesSecondChaild )
    document.write('У дітей кількість цукерок однакова')

    else 
    document.write(`${nameSecondChaild} має цукерок більше`);

}



// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає 
// то відмовляємо у покупці,<br> інакше, якщо ще залишаються гроші, то пропонуємо 
// купити лотерею за 4 грн.

function solving2() { 
    let priceProdukt = parseFloat(prompt('Введіть ціну товару'));
    let sumMoney = parseFloat(prompt('Ведіть суму грошей'));

    if(priceProdukt > sumMoney){ 
     let notEnough = priceProdukt - sumMoney;  
    document.write(`У вас недостатньо ${notEnough}грв до ціни товару`);
    }
    else 
    document.write('Дякую за покупку'+ '<br>');
    
    let chenge = sumMoney - priceProdukt;
    
    if (chenge >= 4 ) 
    document.write (`У вас залишилась здача ${chenge}грв, купіть білет за 4грв`)

}


// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

function solving3() { 
let randomNambers = Math.floor(Math.random()*5)+1;
let enterNamber = parseInt(prompt('Відгадайте число від 1 до 5 за дві спроби') );;

if (enterNamber > 5 || enterNamber === 0)
 alert('Ви ввели некоректне число')


else if  (enterNamber !== randomNambers) 
 alert('Ви не вгадали спробуйте ще раз')
 
enterNamber = parseInt(prompt('Остання спроба. Відгадайте число від 1 до 5') );

if (enterNamber === randomNambers )
 document.write('!!!Ви відгадали!!!')

 else 
 document.write(`Ви програли, машина загадала ${randomNambers}` )
   
}


//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

function solving4() {
    let personAge = parseInt(prompt('Введіть вік людини'));

    if (personAge >= 60 ) 
    document.write('Ви пенсіонер ');

    else if (personAge >= 22)
    document.write('Ви працюєте ');

    else if (personAge >= 17)
    document.write('Ви студент');

    else if (personAge >= 7)
    document.write('Ви школяр');

    else
    document.write('Ваша дитина дошколятко'); 
}


// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).<br> 
// Вивести на екран назву транспортного засобу, яким він може керувати.

function solving5() {
    let categoreDrіver = prompt('Введіть одну із категорій водія A B C');
    let conformity;

    switch (categoreDrіver) {
        case 'A': conformity = 'мотоцикл'
        break;

        case 'B': conformity = 'легковий автомобіль'
        break;

        case 'C': conformity = 'вантажний автомобіль'
        break;
        
        default:
        conformity = 'Не вірно введена категорія' 
    }
alert(conformity);

}


// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

function solving6() {
    const namberDay = parseInt(prompt('Введіть номер що відповідає дню тижні'));
    let nameDay;

    switch(namberDay) {
        case 1: nameDay = 'Понеділок';
        break;

        case 2: nameDay = 'Вівторок';
        break;

        case 3: nameDay = 'Середа';
        break;

        case 4: nameDay = 'Четверг';
        break;

        case 5: nameDay = 'П`ятниця';
        break;

        case 6: nameDay = 'Субота';
        break;

        case 7: nameDay = 'Неділя';
        break;

        default:
            nameDay = 'Невірне число вводу';

        }
    document.write(nameDay);

}


// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

function solving7() {
    const numberMonths = parseInt(prompt('Введіть номер місяця'));
    let season;

    switch (numberMonths) {
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
            season = 'Невірне число вводу';

    }

    document.write(season);
       

       
}
