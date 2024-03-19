
/* Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за. */

function tackA() {

    let payment = [56, 732, 189, 402, 867, 321, 550, 88, 976, 143, 649, 211];
    let sumOfMoney = 0;

    function getSumOfYare(payment) {
        for (let i = 0; i < payment.length; i++) {
            sumOfMoney += payment[i];
        }
        return sumOfMoney;
    }

    let sum = getSumOfYare(payment);
    document.write(`Сума платіжок за рік складає ${sum}` + '<br>')


    // за першу половину року половині року

    let sumFirstHelf = 0;
    function getFirstHalfYeare(payment) {
        for (let i = 0; i <= 5; i++) {
            sumFirstHelf += payment[i]
        }
        return sumFirstHelf;
    }

    let sumFirstHalfYeare = getFirstHalfYeare(payment);
    document.write(`Сума платіжок за перші пів року ${sumFirstHalfYeare}` + '<br>')



    // сума за другу половину року;

    let sumSecondHalf = 0;

    function getPaymentSecondHalf(payment) {
        for (let i = 6; i <= 11; i++) {
            sumSecondHalf += payment[i];
        }
        return sumSecondHalf;
    }

    let finalpaymentSecondHalfYare = getPaymentSecondHalf(payment);
    document.write(`Сума платіжок від 6 по 12 місяць ${finalpaymentSecondHalfYare}` + '<br>');

    // сума платіжок за літо ;

    let sumSumerPayment = 0;

    function getPaymentOnlySumer(payment) {
        for (let i = 5; i <= 7; i++) {
            sumSumerPayment += payment[i];
        }
        return sumSumerPayment;
    }

    let culculeitSumSumer = getPaymentOnlySumer(payment);
    document.write(`Сума платежів тільки за літні місяці ${culculeitSumSumer}` + '<br>');



    // Сума платежів за 2 квартали весняні та літні місяці ;

    let sumSpringAndSumer = 0;

    function getPaymentSpringAndSumer(payment) {
        for (let i = 2; i <= 7; i++) {
            sumSpringAndSumer += payment[i]
        }
        return sumSpringAndSumer
    }

    let culculeitSumSpringAndSumer = getPaymentSpringAndSumer(payment);
    document.write(`Сума платежів за два квартали весняний та літній складає ${culculeitSumSpringAndSumer}` + '<br>');


    // Сума платежів за парні місяці (з парними номерами);


    let sumevenMonths = 0;

    function paymentEvenMonths(payment) {
        for (let i = 1; i < payment.length; i += 2) {
            sumevenMonths += payment[i]

        }
        return sumevenMonths
    }

    let calculeitSumEvenMonths = paymentEvenMonths(payment);
    document.write(`Сума платежів за парні місяці ${calculeitSumEvenMonths}` + '<br>')



    // сума за місяці, які є початковими у сезоні (весна, літо, осінь, зима);

    let firstMonth = 0;
    function FoureFirstMonthSeason(payment) {
        for (let i = 2; i < payment.length; i += 3) {
            firstMonth += payment[i]
        }
        return firstMonth;
    }

    let res = FoureFirstMonthSeason(payment);
    document.write(`Сума чотирьох місяців кожен з якого є початком сезону ${res}`)

}


/* Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван». */

function tackB() {
    let pipleNames = ["Олександр", "Iван", "Ірина", "Iван", "Максим", "Iван", "Анна", "Сергій", "Iван", "Ольга", "Дмитро", "Наталія"]

    let counterNames = 0;

    function getNamesIvan(pipleNames) {
        for (let i = 0; i < pipleNames.length; i++) {
            if (pipleNames[i] == "Iван")
                counterNames++
        }
        return counterNames;
    }

    getNamesIvan(pipleNames)
    document.write(`В списку і'я Іван зустрілося  ${counterNames} рази`)
}

/* Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал
 і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)). */

function tack0() {

    let ScoreStudent = [2, 4, 5, 3, 4, 4, 2, 4, 4, 4, 3, 5, 2, 3, 3, 2, 4, 2, 5, 4, 2, 4, 4, 5, 2, 3];

    function getMiddleScore(ScoreStudent) {
        let scoreSum = 0;
        let middleSum = 0;


        for (let i = 0; i < ScoreStudent.length; i++) {
            scoreSum += ScoreStudent[i];
        }

        return middleSum = scoreSum / ScoreStudent.length;

    }
    let scoreResalt = getMiddleScore(ScoreStudent);

    if (scoreResalt == 5) {
        document.write(` Середній бал учня ${scoreResalt.toFixed(1)} він відмінник`)
    }
    else if (scoreResalt >= 4)
        document.write(` Середній бал учня ${scoreResalt.toFixed(1)} він хорошист `)

    else if (scoreResalt >= 3)
        document.write(` Середній бал учня ${scoreResalt.toFixed(1)} він трієшник `)

    else if (scoreResalt >= 2)
        document.write(` Середній бал учня ${scoreResalt.toFixed(1)} він двієшник `)

}

/*Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. 
        Вивести на екран: */

function tackC() {

    let BuyerList = [18, 19, 29, 32, 39, 37, 15];

    // номери днів, протягом яких кількість відвідувачів була меншою за 20;

    function minimumBuers(BuyerList) {

        let daysMinBuyers = []

        for (let i = 0; i < BuyerList.length; i++) {
            if (BuyerList[i] < 20)
                daysMinBuyers.push(i + 1);
        }
        return daysMinBuyers
    }



    let countMinClaents = minimumBuers(BuyerList);
    document.write(`Номери днів коли клієнтів було менше чим 20 будуть - ${countMinClaents}` + "<Br>")

    // номери днів, коли кількість відвідувачів була мінімальною

    function minClaentsDay(BuyerList) {
        let min = BuyerList[0];
        for (let i = 1; i < BuyerList.length; i++) {
            if (BuyerList[i] < min) {
                min = BuyerList[i];
                minIndex = i + 1;
            }
        }
        return minIndex;
    }

    let culculeitMinDay = minClaentsDay(BuyerList);
    document.write(`Найменша кількість відвідувачів була в день номер ${culculeitMinDay}` + "<br>");

    // номери днів, коли кількість відвідувачів була максимальною;

    function maxClaensDay(BuyerList) {
        let max = BuyerList[0];
        for (let i = 1; i < BuyerList.length; i++) {
            if (BuyerList[i] > max) {
                max = BuyerList[i];
                maxIndex = i + 1;
            }
        }
        return maxIndex;

    }

    let culculeitMaxDay = maxClaensDay(BuyerList);
    document.write(`Найбільша кількість клієнтів була в день номер ${culculeitMaxDay}` + '<br>');


    //загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

    let workDaysPiple = 0;
    let holidayPiple = 0

    function claentsInWorkDaysAndWeek(BuyerList) {

        for (let day = 0; day < 5; day++) {
            workDaysPiple += BuyerList[day];
        }
        return workDaysPiple;
    }

    function claentsInHoliday(BuyerList) {
        for (let day = 5; day <= 6; day++) {
            holidayPiple += BuyerList[day];
        }
        return holidayPiple
    }


    let pipleInWorkDays = claentsInWorkDaysAndWeek(BuyerList);
    let pipleInHoliday = claentsInHoliday(BuyerList);

    document.write(`Загальна кількість клієнтів в робочі дні - ${pipleInWorkDays} а у вихідні - ${pipleInHoliday}`);

}

