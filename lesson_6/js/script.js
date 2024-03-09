/*Задача 0. Вивести на екран</p> */

function exercise0 () {
    
    for (var row = 0; row < 5; row++) {
        var line = '';
        for (var col = row; col <= row + 4; col++) {
            line += String.fromCharCode(65 + col) + ' ';
        }
        document.write(line + '<br>');
    } 
}

    function exercise2() {
     let simbol = 'o'; 
     const line = 7;
     let simvolAndRow = '';
     document.write ('<div>')

     for (i = 0; i < line ; i++){ 
     simvolAndRow += simbol;
     document.write (`<div> ${simvolAndRow} </div>`)
     } 
     
    
     document.write ('</div>')
    }
    
    // Задача 3.Відобразити трикутник за допомогою символів «о» (верх ногами)
    
    function exercise3() {
        let symbol = 'o';
        let line = 12; 
        let simvolAndRow = '';
        
        document.write('<div>');
        for (line = 12; line >= 1; line--) {
            for (let i = 0; i < line; i++) {
                simvolAndRow += symbol;
            }
            document.write(`<div>${simvolAndRow}</div>`); 
            simvolAndRow = ''; 
        }
        document.write('</div>');
       
    }
       

    
    /* Задача 5. Інвестор вклав  S тис. грн на 20 років під 20% річних. <br>
        Визначити за допомогою циклів суму, яку він одержить (без оподаткування).*/
        
        function exercise5 () {
            let investorMony = parseFloat(prompt('Введіть суму яку вклав інвестор в банк'));
            let totalSum = investorMony; 
            
             for (year = 1; year <= 20; year++ ){ 
                
                // Находимо 20% за рік від вкладеної суми 
                let procentOneYear = (totalSum *20) / 100; 
                
                // Додаємо 20% річних до суми вкладу 
                totalSum += procentOneYear;
                
                
                alert(`Виплати по відсотках за рік ${year} сума ${totalSum.toFixed(2)} грв`);
            }

            alert (`Загальна сума, яку інвестор одержить через 20 років: ${totalSum.toFixed(2)} грн`);
                }
    

    
    // 8. Вивести на екран послідовність символів
    function exercise8 () {
    for(mark = 0; mark  < 41; mark ++){
        document.write('ао')
    }
}




