
/*Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8) */

function exercise() {
    for (month = 3; month <= 8; month++ ) {
       document.write(month +'<br>');
    }

}

/* Задача -0. Вивести на екран 8 кнопок з написом “Hello” */

function exercise0() {
    for (botton = 0; botton < 8; botton++ ) {
        document.write('<button>Hello</button>'+'<br>')
    }


}

/*Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). 
Кількість випадкових чисел вводиться користувачем. Приклад: */



function exercise1() {
    let quantityNambers = parseInt(prompt('Введіть число що буде відповідати кількості списків'));
    document.write ('<ul>')
     
     for (i = 0; i < quantityNambers;  i++ ) {
        let randomNambers = Math.floor(Math.random()*100)+1
        
        
        document.write('<li>' + randomNambers +  '</li>')
        
       }
       document.write ('</ul>')
}


/*Задача 2. Створити 10 елементів для введення цін продуктів*/
function exercise2() {
    for ( price = 1; price <= 10; price ++) {
        document.write(`Продукт номер ${price} <input type="text" name="data" placeholder="Введіть дані"> </input> <br>`)
        
        
    } 
}

/* Задача 3. Вивести таблицю з одним рядком і  7 стовпцями. */
function exercise3() { 
   document.write("<table border='3' ")
   document.write("<tr> ")
   
   for (box = 1; box <= 7; box++) {
    document.write(`<td>${box}</td>`)
   }
   
   document.write("</tr> ")
}  document.write("</table>")

 /* Задача 4. Вивести таблицю з 3 рядків і 7 стовпців */

 function exercise4() {
    document.write("<table border='4'>")
    
    for (row = 1; row <= 3; row++) {
        document.write("<tr>")
    
        for (box = 1; box <= 7; box++) {
            document.write(`<td>${box}</td>`)  
        }
        
        document.write("</tr>")
    }
    document.write("</table>")
 }


 /* Задача 5. Вивести таблицю як на зразку  */
     
 function exercise5(){
    document.write("<table border='2'>");
    let nambersCaunter = 1;
    
    for(row = 1; row <= 3; row++) {
        document.write("<tr>")
        
        for(box = 1; box <= 3; box++) {
        document.write(`<td>${nambersCaunter}</td>`)
        nambersCaunter++
        
        }
        document.write("</tr>")


    }


    document.write("<table border='2'>");

     }

     /* Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком */
     
     function exercise6() {  
     let cointerNambers = 1;
     
     for(tabl = 0; tabl < 3; tabl++ ) { 
      document.write ("<table border='2'> <br>")
      
      for(row = 1; row <= 3; row++) { 
        document.write("<tr>")
        
        for(box = 1; box <= 3; box++) {
            document.write(`<td>${cointerNambers}</td>`)
            cointerNambers++
          }
        
          document.write("</tr>")
      }
      
      document.write ("<table>")
     }
     }  

     /*Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).*/
      function exercise8() {  
      alert('Загадайте число від 1 до 10');
        

        for (let comp = 0; comp < 3; comp++) {
            let computerNumber = 1 + Math.floor(Math.random() * 10);
            let computerAnswer = confirm(`Ви загадали число ${computerNumber} воно вірне?`);
        
            if (computerAnswer === true) {
                
                alert ('Комп`ютер відгадав число')
                break;
                   
                
                } else {
                    alert ('Комп`ютер не вгадав загадане число')
                    
                }
            }
            alert( 'За три спроби машина числа не вгадала');
        }   
        
     
    
      
    /* Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm). */
    function exercise9() {

        let userNamber = parseInt(prompt('Загадайте будласка число від 1 до 10 '));
        let compTry = 0;
        let compAnswer;

        do {
            let compNamber = 1+Math.floor(Math.random()*10);
            compAnswer = confirm(`Ви загадали число ${compNamber} воно вірне?`);
            compTry++;
            
        } while (compAnswer === false) {
            if (compAnswer === true)
            alert('Вірно')
            
        }
        
        alert(`Комп вгадав загадане число ${userNamber} витративши ${compTry} спроб`)

        }



        /*14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми 
        не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).  */
        
        function exercise14() {

            let adSum = parseFloat(prompt('Ведіть суму товару'));
            let enterUserSam = parseFloat(prompt('Ведіть кількість грошей за товар'));

                while (enterUserSam < adSum) {
                  adSum-=enterUserSam;
                  alert (`Вам залишилось внести ${adSum}`)
                  enterUserSam = parseFloat(prompt('Ведіть кількість грошей за товар'));
                 


                  if (enterUserSam >= adSum ) {
                    let toMatchMony = enterUserSam - adSum;
                    alert(`Дякую за покупку товару! Ваша здача: ${toMatchMony}`); 
                  
                  }
                }
            }
          
    

