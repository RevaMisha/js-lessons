

/*Дано масив 30 випадкових цілих чисел. Підрахувати скільки було<br> 
  обмінів та порівнянь чисел під час сортування бульбашкою*/
  
  function task1() {
    
    let arr = [25, 17, 8, 30, 12, 4, 28, 19, 6, 11, 
               29, 3, 21, 14, 10, 5, 27, 9, 2, 24, 
               20, 16, 7, 26, 18, 15, 13, 1, 23, 22]
    
        let counter = 0

        for (let j = 0; j < arr.length; j++ ){
            for (let i = 0; i < arr.length-1; i++){
                let a = arr[i];
                let b = arr [i+1]
                
                if (a > b) {
                    let temp = a;
                    a = b;
                    b = temp; 
                }
                arr[i] = a;
                arr [i+1] = b;
                counter ++
            }   
        }
           document.write(`Відсортований масив ${arr} <br>`)
           document.write(`Кількість обмінів під час сортування ${counter}`)
  
    }

    /*Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було 
     обмінів та порівнянь чисел під час сортування змішуванням.*/ 

    function task2() {
        
        let arr = [25, 17, 8, 30, 12, 4, 28, 19, 6, 11, 
                  29, 3, 21, 14, 10, 5, 27, 9, 2, 24, 
                  20, 16, 7, 26, 18, 15, 13, 1, 23, 22]

        let shakeCounter = 0;
        let leftIndex = 0;
        let rigthIndex = arr.length-1;

        while (leftIndex < rigthIndex) {
            for (let ind = leftIndex; ind < rigthIndex; ind++){
                shakeCounter ++

                if(arr[ind] > arr[ind+1]) {
                    let temp = arr[ind];
                    arr[ind] = arr[ind+1]
                    arr[ind+1] = temp
                }   
                 
            }
            rigthIndex --
        }    
       for (let ind = rigthIndex; ind >= leftIndex; ind--) {
        shakeCounter ++
        if(arr[ind] < arr[ind-1]) {
            let temp = arr[ind] 
            arr[ind] = arr[ind-1] 
            arr[ind-1] = temp
        }
    }
    leftIndex ++
        document.write(`Відсортований масив ${arr} <br>`)
        document.write (`Було використано обмінів ${shakeCounter}`)
    }
   
   /* Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було <br>
    обмінів та порівнянь чисел під час сортування включеннями.*/

   function task3() {

    let arr = [25, 17, 8, 30, 12, 4, 28, 19, 6, 11, 
        29, 3, 21, 14, 10, 5, 27, 9, 2, 24, 
        20, 16, 7, 26, 18, 15, 13, 1, 23, 22]

        let counter = 0;

        function arrSort (arr) {
            for (let i = 0; i < arr.length-1; i++) {
                
                let j = i +1; 
                while (j !== 0 && arr[j] < arr[j-1] ) {
                    let temp = arr[j] ;
                    arr[j] = arr[j-1]
                    arr[j-1] = temp;
                    j-- 
                    counter ++;
                }

                
            }
            return arr
        }   
         
        let resalt = arrSort (arr)
        document.write (` Відсортований масив ${resalt} <br>`)
        document.write (` Кількість обмінів під час сортування ${counter}`)
        
   }

  /*  Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування 
        шляхом виведення відповідних таблиць за зразком. */

        function task4 () {
            let ourArr = [5, 3, 1, 4, 2];
                for (let i = 0; i< ourArr.length-1; i++ ) {
                let a = ourArr[i]
                let b = ourArr[i+1]
                 if (a > b) {
                    let temp = a;
                    a = b
                    b = temp
                    
                 }
                 ourArr[i] = a
                 ourArr[i+1] = b
                 document.write(`Виведення кожної заміни числа 5 буде - ${ourArr} <br>`)
                }
        }
      
    /*Задача 5.Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук <br>
       визначити, чи є у масиві ім’я «Olga» і під яким індексом.*/ 
      
       function task5() {  
        
        let names = [ 'John', 'Anna', 'Michael', 'Olena','Ogafia', 'Oliver', 
        'Olga','Emily', 'Olivia', 'James', 'Emma', 'Sophia'];

        names.sort ()
       document.write(`Упорядкований масив ${names} <br>`)

         let searchName = 'Olga';

        function searchElement (names, searchName ) {
            let start = 0;
            let end = names.length - 1;

            while (start <= end ) {
               const middle = Math.floor((start + end) / 2);
               if (names[middle] === searchName ) return `Знайдено ${searchName} за індексом ${middle}`;
               if(names[middle] < searchName ) start = middle + 1 
               if(names[middle] > searchName ) end = middle - 1 
            }
           return `Елемент ${searchName} Не знайдено`
        }
        
        let resaltSearch = searchElement (names, searchName );
        document.write (resaltSearch);
    }

    
    
    /* Задача 6.</h2> <p>Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, <br>
     чи є у масиві ім’я довжиною 5 символів і під яким індексом.*/

    function task6() {
        let ukrNames = ['Олександр', 'Іванка', 'Маріанна', 'Захар', 'Василина', 'Василь', 'Антуан', 'Наталія'];
        
        ukrNames.sort((a,b) => a.length - b.length)
         document.write(`Відсортований в порядку зростання масив ${ukrNames} <br>`)

        let fiveLetters = 5;

        function wordsFive (ukrNames,fiveLetters) {
            for (let i=0; i < ukrNames.length; i++ ) {
                if (ukrNames[i].length === fiveLetters) return `Слово з ${fiveLetters} знаків знаходиться під індексом ${i}`
            }
            
            return `ім'я з ${fiveLetters} букв Не знайдено`
        }
        let searcResalt = wordsFive (ukrNames,fiveLetters);
        document.write(searcResalt);
    
    }   
