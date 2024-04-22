
/* Задача 1. Описати масив об’єктів – сайтів розроблених компанією 
з такими властивостями */



let webSites = [

    {
        company: 'Webway',
        ownerCompany: 'ivan Cotlin',

        sponsor: [{

            surname: 'Antonov',
            firstName: 'Igor',
            investmentSponsor: 1500,
        }],

        yearIssue: 1999,
        sitePrice: 3000

    },

    {
        company: 'Colorweb',
        ownerCompany: 'Olga Pen',

        sponsor: [{

            surname: 'Ivanov',
            firstName: 'Petro',
            investmentSponsor: 3000,
        }],

        yearIssue: 2005,
        sitePrice: 4500
    },

    {
        company: 'Rainbow',
        ownerCompany: 'julia Petrova',

        sponsor: [{

            surname: 'Promov',
            firstName: 'Gled',
            investmentSponsor: 10500,
        }],

        yearIssue: 2006,
        sitePrice: 13000
    },

    {
        company: 'Umbrella',
        ownerCompany: 'Igor Seletov',

        sponsor: [{

            surname: 'lapin',
            firstName: 'Oleg',
            investmentSponsor: 15000,
        }],

        yearIssue: 2009,
        sitePrice: 22000
    },

]

// Знайти загальну вартість усіх сайтів

function task1() {

    let getSumSite = webSites.reduce((total, site) => {
        return total += site.sitePrice
    }, 0)
    document.write(`Загальна вартість усіх сайтів становить ${getSumSite}`)
}

// Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр

function task2() {

    let quantitySite = webSites.reduce((sum, site) => {
        if (site.yearIssue > 2000 && site.yearIssue <= 2009) return sum + 1
        else return sum
    }, 0
    )
    document.write(`Кількість сайтів що було зроблено між 2000 та 2009 становить = ${quantitySite}`)
}

// Підрахувати кількість сайтів, де сума спонсорських вкладень була більшою за 10000 

function task3() {
    let counter = 0
    webSites.forEach((money) => {
        if (money.sponsor[0].investmentSponsor > 10000) counter++
    }
    )
    document.write(`Кількість сайтів де сума спонсорів була бульшою за 10000 = ${counter}`)
}

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

function task4() {

    let allSponsors = []

    for (let site of webSites) {
        for (let sponsor of site.sponsor) {

            allSponsors.push(`${sponsor.surname} ${sponsor.firstName} `)
        }
    } document.write(`Список спонсорів ${allSponsors} `)
}

// 5) знайти рік, коли прибуток був найбільшим

function task5() {
    let maxProfet = -Infinity;
    let year = 0;
    webSites.find((site) => {
        if (site.sitePrice > maxProfet) {
            maxProfet = site.sitePrice
            year = site.yearIssue
        }
    }
    )
    document.write(`Рік найбільшого прибутку був ${year}`)
}

// 6) упорядкувати список за спаданням прибутку



function task6() {
    let listProfit = webSites.sort((p1, p2) => p2.sitePrice - p1.sitePrice)

    listProfit.forEach((site) => {
        document.write(`Список прибутку за спаданням ${site.sitePrice}<br>`);
    });
}

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

function task7() {



    let praseSiteMore10000 = []
    let praseLess10000 = []

    for (let site of webSites) {
        if (site.sitePrice > 10000) {
            praseSiteMore10000.push(site.sitePrice)
        }
        else praseLess10000.push(site.sitePrice)
    }

    alert(`Сайти що більші за 10000 - ${praseSiteMore10000}`)
    alert(`Сайти що менші за 10000  - ${praseLess10000}`)

}


/* Розробити функцію, у яку передають об’єкт (день, місяць, рік). 
Визначити, який буде рік через N місяців. */

function task8() {

    let userMonth = parseInt(prompt('Ведіть кількшсть місяців щоб взнати який буде рік'))

    let currentCountToDay = {
        month: 4,
        yeare: 2024,
    }


    function getYare(month, yeare, userMonth) {

        let plastMonth = month + userMonth;
        let newYare = yeare;

        while (plastMonth > 12) {
            newYare++
            plastMonth -= 12
        }
        return { month: plastMonth, yeare: newYare }

    }

    let result = getYare(currentCountToDay.month,
        currentCountToDay.yeare, userMonth);
    alert(`Місяць: ${result.month}, Рік: ${result.yeare}`);

}

// Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)

let dataList = 
[{"id":344277463,
"old_price":1395,
"old_usd_price":"37.70",
"price":1099,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"29.70",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363766641,
"old_price":0,
"old_usd_price":"0.00",
"price":90,"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"2.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":339273715,
"old_price":38,
"old_usd_price":"1.03",
"price":25,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"0.68",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":330746665,
"old_price":3087,
"old_usd_price":"83.43",
"price":2548,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"68.86",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":344972806,
"old_price":699,
"old_usd_price":"18.89",
"price":549,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"14.84",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":318302299,
"old_price":0,
"old_usd_price":"0.00",
"price":8500,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"229.73",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":361430565,
"old_price":3500,
"old_usd_price":"94.59",
"price":1999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"54.03",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,"info":null,
"show_in_site":null},

{"id":14429030,
"old_price":3339,
"old_usd_price":"90.24",
"price":2999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"81.05",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,"info":null,
"show_in_site":null},

{"id":56340912,
"old_price":2094,
"old_usd_price":"56.59",
"price":1776,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"48.00",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":315292225,
"old_price":1799,
"old_usd_price":"48.62",
"price":1499,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"40.51",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":28437961,
"old_price":42999,
"old_usd_price":"1162.14",
"price":33999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"918.89",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":339896833,
"old_price":6399,
"old_usd_price":"172.95",
"price":5899,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"159.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,"show_in_site":null},

{"id":364354149,
"old_price":1600,
"old_usd_price":"43.24",
"price":1500,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"40.54",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,"info":null},

{"id":363184995,
"old_price":0,
"old_usd_price":"0.00",
"price":4499,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"121.59",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":98077846,
"old_price":0,
"old_usd_price":"0.00",
"price":3113,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"84.14",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":310694668,
"old_price":0,
"old_usd_price":"0.00",
"price":3000,"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"81.08",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":362812029,
"old_price":0,
"old_usd_price":"0.00",
"price":21700,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"586.49",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":361422708,
"old_price":4100,
"old_usd_price":"110.81",
"price":2699,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"72.95",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":318302257,
"old_price":0,
"old_usd_price":"0.00",
"price":8500,
"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"229.73",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":310694498,
"old_price":0,
"old_usd_price":"0.00",
"price":2963,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"80.08",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363651273,
"old_price":5199,
"old_usd_price":"140.51",
"price":4890,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"132.16",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":330747022,
"old_price":3087,
"old_usd_price":"83.43",
"price":2606,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"70.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":362617635,
"old_price":4872,
"old_usd_price":"131.68",
"price":2436,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"65.84",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363614439,
"old_price":5199,
"old_usd_price":"140.51",
"price":4890,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"132.16",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null}]

// 1) Загальну вартість (нові ціни - price)

function task9() {

    getTotalSum = dataList.reduce((total, cost)=> {
        return total += cost.price
    }, 0
) 
document.write(`Загальна вартість становить ${getTotalSum}`)
}

// Знайти кількість товарів, у яких ціна зменшилась (price < old_price)

function task10(){

    let getNewPrice = dataList.reduce((counter, element)=> {
        return element.price < element.old_price ? counter+1:counter 
    }, 0 
)
document.write( `Кількість товарів у яких була зменшена ціна = ${getNewPrice}`)
}

// Товари, які доступні (sell_status:"available")

function task11(){

let counterElem = 0;    

let getCheckStatus = dataList.filter((element)=> (element.sell_status === "available") ?
counterElem += 1 : counterElem)
document.write (`Товари з статусом доступний ${counterElem} штук` )

}

/* 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, 
    які міститимуть тільки ідентифікатор товару (id), нову ціну (price), 
    стару ціну (old_price), та ціну у доларах (usd_price) */

    function task12() {

        let dataList = 
[{"id":344277463,
"old_price":1395,
"old_usd_price":"37.70",
"price":1099,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"29.70",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363766641,
"old_price":0,
"old_usd_price":"0.00",
"price":90,"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"2.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":339273715,
"old_price":38,
"old_usd_price":"1.03",
"price":25,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"0.68",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":330746665,
"old_price":3087,
"old_usd_price":"83.43",
"price":2548,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"68.86",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":344972806,
"old_price":699,
"old_usd_price":"18.89",
"price":549,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"14.84",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":318302299,
"old_price":0,
"old_usd_price":"0.00",
"price":8500,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"229.73",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":361430565,
"old_price":3500,
"old_usd_price":"94.59",
"price":1999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"54.03",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,"info":null,
"show_in_site":null},

{"id":14429030,
"old_price":3339,
"old_usd_price":"90.24",
"price":2999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"81.05",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,"info":null,
"show_in_site":null},

{"id":56340912,
"old_price":2094,
"old_usd_price":"56.59",
"price":1776,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"48.00",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":315292225,
"old_price":1799,
"old_usd_price":"48.62",
"price":1499,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"40.51",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":28437961,
"old_price":42999,
"old_usd_price":"1162.14",
"price":33999,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"918.89",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":339896833,
"old_price":6399,
"old_usd_price":"172.95",
"price":5899,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"159.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,"show_in_site":null},

{"id":364354149,
"old_price":1600,
"old_usd_price":"43.24",
"price":1500,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"40.54",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,"info":null},

{"id":363184995,
"old_price":0,
"old_usd_price":"0.00",
"price":4499,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"121.59",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":98077846,
"old_price":0,
"old_usd_price":"0.00",
"price":3113,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"84.14",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":310694668,
"old_price":0,
"old_usd_price":"0.00",
"price":3000,"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"81.08",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":362812029,
"old_price":0,
"old_usd_price":"0.00",
"price":21700,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"586.49",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":361422708,
"old_price":4100,
"old_usd_price":"110.81",
"price":2699,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"72.95",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":318302257,
"old_price":0,
"old_usd_price":"0.00",
"price":8500,
"min_month_price":0,
"sell_status":"unavailable",
"status":"active",
"usd_price":"229.73",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":310694498,
"old_price":0,
"old_usd_price":"0.00",
"price":2963,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"80.08",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363651273,
"old_price":5199,
"old_usd_price":"140.51",
"price":4890,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"132.16",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":330747022,
"old_price":3087,
"old_usd_price":"83.43",
"price":2606,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"70.43",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":362617635,
"old_price":4872,
"old_usd_price":"131.68",
"price":2436,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"65.84",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,
"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null},

{"id":363614439,
"old_price":5199,
"old_usd_price":"140.51",
"price":4890,
"min_month_price":0,
"sell_status":"available",
"status":"active",
"usd_price":"132.16",
"pl_charge_pcs":0,
"pl_use_instant_bonus":false,
"pl_premium_bonus_charge_pcs":0,
"rests":-1,"min_price":0,
"max_price":0,
"has_shops":false,
"info":null,
"show_in_site":null}]

        let newListObjekt = dataList.map((categore)=> ({
            id:categore.id,
            price:categore.price, 
            old_price:categore.old_price,
            usd_price: categore.usd_price,
        
        }))

     
    console.log (newListObjekt)
}


