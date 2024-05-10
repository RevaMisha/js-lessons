

    /* Задача 1
      Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
        Дата представляється структурою із трьома полями. Реалізувати методи 
        збільшення/зменшення дати на певну кількість днів, місяців чи років. 
        Введення та виведення дати реалізувати за допомогою методу toString. */ 
       
       function task1() {

        class TDate {
            #day
            
            get Day() {
                return this.#day
            }

            set Day(newDay) {
             if (newDay <= 0 || newDay > 32) throw new Error ('день не може бути з від"ємним значенням')
              this.#day = newDay
            }

            #month

            get Month() {
                return this.#month
            }

            set Month (newMonth) {
                if( newMonth <= 0) throw new Error ('Місяць не може бути з відємним значенням')
                this.#month = newMonth
            }
            
            #yare 

            get Yare () {
                return this.#yare
            }

            set Yare(newYare) {
                if(newYare < 0) throw new Error ('Рік не може мати відємним значенням')
                this.#yare = newYare
            }

            constructor (day, month, yare ) {
                this.Day = day
                this.Month = month
                this.Yare = yare 
            }

            getChengeDay(days) {
                let maxDay = 31
                let daysToAdd = days;
           
          while (daysToAdd > 0 ) {
            if (this.Day + daysToAdd > maxDay) {
                this.Month += 1
                daysToAdd -= (maxDay - this.Day + 1)
                this.Day = 1;
            }
            else { 
            this.Day += daysToAdd;
            daysToAdd = 0;
        }
          }    
          }

           /* getChengeDay(days) {
                let maxDays = 31;
                this.Day += days
                
                while(this.Day > maxDays) {
                    this.Month += 1 
                    this.Day -= maxDays 
                }
                
            } */

            getChengeMonth (newMonth) {
                let maxMons = 12
                this.Month += newMonth
                
                while (this.Month > maxMons){
                    this.Yare += 1
                    this.Month -= maxMons   
                } 
                
            }

            getChengeYare (newYare) {
                if (this.Yare > 0) this.Yare += newYare
            }

            toString () {
                return `${this.Day} : ${this.Month} : ${this.Yare} `
            }
        }

        let resalt = new TDate ( 1, 12, 2024);
        resalt.getChengeDay(31)
        resalt.getChengeMonth (0)
        resalt.getChengeYare(0)
        console.log (resalt)
        alert(resalt.toString()) 
       }


    /* Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися 
    у вигляді доларового еквіваленту.Реалізувати методи додавання/вилучення грошової маси, 
    вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях 
    збільшиться на 100. Курс долара зберігати в окремому полі.*/

   function task2() {
    
   class TMoney{
        #sumInDollars
        
        constructor (sumInDollars) {
            
           this.SumInDollars = sumInDollars
           this.DollarExchange = 39
          
        }

        get SumInDollars () {
            return this.#sumInDollars
        }

        set SumInDollars (newSum) { 
          if (newSum < 0 && newSum !== Num ) throw new Error ('Введена сума не є коректною')
            this.#sumInDollars = newSum  
        }

 
         putSumInDolars (SumInGrivna) {
         let usaMoney = SumInGrivna / this.DollarExchange
         this.#sumInDollars += usaMoney
         return parseFloat(this.#sumInDollars.toFixed(2)); 
        }

        withdrawMoney(SumInGrivna) {
        let usaMoney = SumInGrivna / this.DollarExchange
        let withdraw = this.#sumInDollars -= usaMoney
        withdraw * this.DollarExchange
        return parseFloat(this.#sumInDollars.toFixed(2));
     } 
     
    
}
let calculate = new TMoney (1000);

document.write(`На рахунку первинно покладено ${calculate.SumInDollars} доларів <br>`)

document.write(`Додатково, було покладено 8000 грв, і на рахунку стало ${calculate.putSumInDolars(8000)} доларів <br>`)

document.write (`З рахунку було знято 5000 грв і на ньому залишилось ${calculate.withdrawMoney(5000)} доларів `)
}


/*Задача 3. Об’єкт “Фірма” (використати члени-класи). Поля "назва фірми", "дата заснування (рік, місяць)",
    "адреси філіалів (країна, місто, вулиця, номер будинку)".
    Mетоди - "визначення кількості років існування фірми;"  "виведення всіх філіалів фірми у вказаному місті;" 
    "виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу"
    */

    function task3() {

        // клас з назвою фірми, рік заснування фірми, місяць заснування.

        class Firm { 
            #firmName
            #yarefoundation
            #monthfoundation 
        
            get FirmName() {
                return this.#firmName
            }
        
            set FirmName(name) {
                if (typeof name !== 'string' || name.length < 0 ) throw new Error('Дані внесені не коректно')
                this.#firmName = name
            }
        
            get YearFoundation() {
                return this.#yarefoundation
            }
        
            set YearFoundation(yare) {
                if (yare <= 0 || yare > 2100) throw new Error('Рік введений не коректно')
                this.#yarefoundation = yare 
            }
        
            get MonthFoundation() {
                return this.#monthfoundation
            }
        
            set MonthFoundation(month) {
                if (month > 12 || month <= 0) throw new Error('Місяць введений не коректно')
                this.#monthfoundation = month
            }
        
            constructor(firmName, yarefoundation, monthfoundation) {
                this.FirmName = firmName;
                this.YearFoundation = yarefoundation;
                this.MonthFoundation = monthfoundation;
            }
            
            // функція скільки років фірмі
            
            FoundingСompany () {
                let nawYear = 2024
                 return nawYear - this.YearFoundation
            }
            
            
            toString() { 
                return `Фірма - ${this.FirmName}, заснована ${this.YearFoundation} в  ${this.MonthFoundation} місяці. На ринку ${this.FoundingСompany ()} років <br>`
            }
        
        
        }   
        
        let Info = new Firm('CapitalStail', 1998, 8);
        console.log(Info);
        // Виведення данних з назвою, роком, та місяцем заснування
        document.write (Info.toString());
        

        
        class FirmServices {
            
            // клас послуг, що надає фірма за певну суму грошей та вказаний термін часу"
            
            constructor (servicesName, servisesPrice, servisTime) {
                this.ServicesName = servicesName
                this.ServisesPrice = servisesPrice
                this.ServisTime = servisTime
            }

            toString () {
              return  `Послуга ${this.ServicesName}, ціна від ${this.ServisesPrice} грв,  час виконання до ${this.ServisTime} години <br>`
            }
        }

        let servis1 = new FirmServices ('Аварійне вскриття квартирних замків', 400, 3)
        let servis2 = new FirmServices ('Аварійне вскриття автомобілів', 800, 1)
        let servis3 = new FirmServices ('Аварійне вскриття сейфів', 1000, 5)
        let servis4 = new FirmServices ('Монтаж дверного замка', 300, 2)
        let servis5 = new FirmServices ('Ремонт авто замка', 600, 3)

        // виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу"
        
        document.write (servis1.toString())
        document.write (servis2.toString())
        document.write (servis3.toString())
        document.write (servis4.toString())
        document.write (servis5.toString())


    class AdresFirms {

        // Клас з адресою філіалів фірми у вказаних містах. 
        #country

        get Countri() {
            return this.#country
        }

        set Countri(newCountri) {
            if( typeof newCountri !== 'string' || newCountri.length === 0 ) 
                throw new Error ('Країна введена не коректно')
                this.#country = newCountri
        }
       
        #city

        get City() {
            return this.#city
        }

        set City(newCity) {
            if( typeof newCity !== 'string' || newCity.length === 0 ) 
                throw new Error ('Місто введена не коректно')
                this.#city = newCity
        }
      
        #street

        get Street() {
            return this.#street
        }

        set Street(newStreet) {
            if( typeof newStreet !== 'string' || newStreet.length === 0 ) 
                throw new Error ('Вулиця введена не коректно')
                this.#street = newStreet
        }

        #numStreet 

        get NumStreet () {
            return this.#numStreet 
        }
    
        set NumStreet (newNum) {
            if (newNum < 0 || newNum > 999 ) throw new Error ('Номер вказаний некоректно')
            this.#numStreet = newNum 
        }

        constructor (country, city, street, numStreet) {
            this.Country = country
            this.City = city
            this.Street = street
            this.NumStreet = numStreet
        }

        toString() {
            return ` Наші філії знаходяться ${this.Country},  місто ${this.City}, вулиця ${this.Street}, номер ${this.NumStreet} <br>`
        }
    }

    let adresInSity1 = new AdresFirms ('Україна', 'Київ', 'Ахматової', 8 );
    let adresInSity2 = new AdresFirms ('Україна', 'Одеса', 'Приморська', 16 );
    let adresInSity3 = new AdresFirms ('Україна', 'Львів', 'Чорновола', 47 );
    let adresInSity4 = new AdresFirms ('Україна', 'Мостиська', 'Сяйво', 107 );
    
    // "виведення всіх філіалів фірми у вказаному місті;" 
    
    document.write(adresInSity1.toString())
    document.write(adresInSity2.toString())
    document.write(adresInSity3.toString())
    document.write(adresInSity4.toString())

}


    /*  Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити 
     поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
     
     Реалізувати методи знаходження максимальної та мінімальної сум, які може видати 
     банкомат, та метод зняття деякої суми. */
    
    function task4() {

        class TBankomat {
            
            constructor (banknote5, banknote10, banknote20, banknote50,banknote100,banknote200 ){ 
            this.Banknote5 = banknote5
            this.Banknote10 = banknote10
            this.Banknote20 = banknote20 
            this.Banknote50 = banknote50 
            this.Banknote100 = banknote100
            this.Banknote200 = banknote200 
        }

        MaxManey () {
            let maxSum = (5 * this.Banknote5) + (10 * this.Banknote10) + (20 * this.Banknote20) + 
            (50 * this.Banknote50) + (100 * this.Banknote100) + (200 * this.Banknote200 ) 
            return maxSum
        }

        GiveMaxSum () {
            let oneMaxWithdraw = this.MaxManey () / 5
            return oneMaxWithdraw
        }

        MinLimit () {
            const oneTimePayment = 100
            return oneTimePayment
        }

       Withdraw (someSum) {
         if (typeof someSum !== 'string' && someSum !== 0 && someSum >= 0 && someSum <= this.GiveMaxSum() && someSum >= this. MinLimit()) { 
           let leftSum = this.MaxManey() - someSum
           return leftSum }
           else 
           alert ('Введіть число еквівалентне сумі яку ви хочете зняти')
        } 

   }
 
   let terminal = new TBankomat (50, 50, 50, 100, 100, 50)
   console.log(terminal)
   
   alert(`В банкоматі зараз - ${terminal.MaxManey()} грв`)

   alert (`Максимальна сума для одноразового зняття - ${terminal.GiveMaxSum ()} грв`)

   alert (`Мінімальна сума для одноразового зняття - ${terminal.MinLimit ()} грв`)
    
   let someSum = parseInt(prompt('Введіть суму яку ви хочете зняти')) 

   document.write(`Ви зняли зняли ${someSum} грв  залишилося в банкоматі ${terminal.Withdraw (someSum)} грв <br>`)

} 

    
