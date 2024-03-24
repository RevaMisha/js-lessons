
/* Задача 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями. */

function task1() {

    let userEnterNamber = parseInt(prompt('Введіть бажану кількість елементів в масиві'));
    let newArrayNambers = Array(userEnterNamber).fill(0)
    document.write(` Так виглядає ваш масив <br> ${newArrayNambers}`);
}


/* Задача 2. Користувач вводить кількість елементів. Створити масив, 
у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.*/

function task2() { 

    let userEnterArrayNamber = parseInt(prompt('Введіть бажану кількість елементів в масиві'));
    let hailfArray = userEnterArrayNamber / 2; 

    let newBigArray = Array(userEnterArrayNamber).fill(1,0,hailfArray)
    .fill(7,hailfArray);

    document.write(`Рівномірно наповнений масив ${newBigArray}`);
}

/* Задача 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, 
 а інші до кінця масиву заповнені 7-ками.*/

 function task3() {
    let loadUserNamber = parseInt(prompt('Введіть бажану кількість елементів в масиві'));

    let newArrForTask = Array(loadUserNamber).fill(1,0,5)
    .fill(7,5)

    document.write(`Масив з наповненими першими п'яти елементами ${newArrForTask}`);
}



/* Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100 */

function task4() {
    let hundredArray = [ 10, 168, 45, 176, 103, 20, 105, 137, 141, 142, 135, 87, 99, 54, 76, 110, 99,]
    
    for ( let MoreOneHundred of hundredArray) {
        if (MoreOneHundred > 100) { 
         document.write(`${MoreOneHundred},`) }
        }
    }  
    
  
    /* Задача 5. Дано масив елементів. Знайти добуток додатних елементів */

   function task5() {

    let arrayTemperature = [90, -56, 72, -18, 33, -5, -87, 99, -66, 89, 42, -75, 12, 55, -68 ]
     let sumPlastElement = 0

     for ( let newTemperatureList of arrayTemperature) {
        if (newTemperatureList > 0) {
            sumPlastElement += newTemperatureList 
        }
        
     }
     document.write(`Сума всіх додатніх чисел в масиві дорівнює = ${sumPlastElement}`);
   }


   /* Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2 */

   function task6() {
    let arrForMultiplication = [19, 72, 18, 33, 5, 87, 16, 66, 13, 42, 75, 12, 55, 68]
    let firstElement = arrForMultiplication [0];

    for (let element = 0; element < arrForMultiplication.length; element++) { 
        if (arrForMultiplication[element] > firstElement) {
            arrForMultiplication[element] *= 2; 
        }
    }
    
     document.write(`Масив з збільшиними елементами ${arrForMultiplication.join(' - ')}`);
    
 
   }

 /* Задача 7. Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки. */

function task7() {

    let priceArr = [1000, 1120, 900, 1200, 800, 1100, 1200, 470, 930, 1050, 1500]
    
    priceArr.forEach ((element, index)  => {
       
        if (element >= 1000) { 
            priceArr[index] = (element * 0.7).toFixed(1);
        }
    });

    document.write(`Нові ціни зі знижкою 30-ти  відсотків ${priceArr.join(' - ')} `  )
}


/* Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А» */

 function task8() {
    let carsNambers = ["AB1234CD", "BC5678EF", "AD9012GH", "DE3456IJ", "AG7890KL", "GH2345MN", "AJ6789OP", "KL0123QR", "AN4567ST", "OP8901UV"]

    let carsNambersWithA = carsNambers.filter (namber => namber[0] === "A" )
    document.write( `Масів номерів які починаються на А - ${carsNambersWithA.join(' - ')}`)

 }


 /* Задача 10.Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.</p> */
    
    function task10() {
        let arrPrace = [100, 780, 300, 350,415, 400, 550, 700, 850, 900 ];

        let priceWithTax = arrPrace.map (nambers => ( nambers * 0.2 ) )

        document.write (`Масив сплаченого 20 відсоткового податку ${priceWithTax.join('-')}`)
        
    }

 