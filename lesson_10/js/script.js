

//1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

function tasc1() {

    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let OnleThousand = arrPrices.filter((nambers) =>
        nambers > 1000
    )
    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Масив цін більших за 1000: ${OnleThousand}`)
}

// 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

function tasc2() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let indexNambers = arrPrices.reduce((oldArr, namber, index) => {
        if (namber > 1000) oldArr.push(index)
        return oldArr;


    }, [])

    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Індекси цін які більші за 1000 : ${indexNambers}`)
}

// 3) Сформувати список з тих цін, які більші за попереднє значення 

function tasc3() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];


    let contrastPrice = arrPrices.filter((al, indx, arr) => {
        if (indx === 0) return true
        if (arr[indx] > arr[indx - 1])
            return al

    })
    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Ціни які більші за поперезне значення: ${contrastPrice}`)
    // Переробити
}

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

function tasc4() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];
    let procentArr = []

    let maxNamber = Math.max(...arrPrices)
    let prosenPrice = arrPrices.map((el) => el / maxNamber * 100)
    prosenPrice.forEach((resalt) => {
        procentArr.push(resalt.toFixed(2))
    })
    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Масив цін у вигляді відсоткових значень:<br>${procentArr.join('<br>')}`);
}


/*Підрахувати кількість змін цін. Зміна ціни - це коли поточна ціна відрізняється <br>
    від попередньої. Підрахувати кількість таких змін */
    function tasc5() {
        let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

        let changesCost = arrPrices.reduce((changes, num, index, arr)=> {
            if (index > 0 && num !== arr[index - 1]) return changes+1
            else return changes },0
        )
        document.write(`Початковий масив цін: ${arrPrices} <br>`)
        document.write(`В масиві знайдено ${changesCost} змін ціни `)
    }

// 6 Визначити, чи є ціна, що менше 1000

function tasc6() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    if (arrPrices.some(namber => namber < 1000))
        document.write('В масиві є ціна менша за 1000')
    else
        document.write('В масиві немає цін менших за 1000')

}

// 7 Визначати, чи усі ціни більше за 1000

function tasc7() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    if (arrPrices.every(num => num > 1000))
        document.write('В масиві всі ціни більші за 1000')
    else
        document.write('В масиві е ціни менші за 1000')
}


// Задача 8 Підрахувати кількість цін, що більше за 1000

function tasc8() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let priceMore = arrPrices.reduce((prevArr, el) => {
        if (el > 1000) return prevArr + 1
        else return prevArr
    }, 0
    )
    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Кількість цін що більші за 1000: ${priceMore}`)
}

//9)Підрахувати суму цін, що більше за 1000

function tasc9() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let plastNambers = arrPrices.reduce((oldArr, el) => {
        if (el > 1000) return oldArr + el
        else return oldArr
    }, 0
    )
    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Сума цін що цільші за 1000 дорівнює: ${plastNambers}`)
}


// 10) Знайти першу ціну, що більше за 1000

function tasc10() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let foundNamber = arrPrices.find((namber) => namber > 1000)


    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Перша ціна що більша за 1000: ${foundNamber}`)

}

// 11) Знайти індекс першої ціни, що більше за 1000

function tasc11() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let firstPriceIndex = arrPrices.findIndex(number => number > 1000)

    document.write(`Початковий масив цін: ${arrPrices} <br>`)
    document.write(`Індекс першого числа шо більший за 1000: ${firstPriceIndex}`)

}

// 12) Знайти останню ціну, що більше за 1000

function tasc12() {
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let backNomber = arrPrices.findLast ((num)=> num > 1000 )
    document.write(`Початковий масив цін: ${arrPrices} <br>`) 
    document.write(`Остання ціна що більша за 1000: ${backNomber}`)

}

// 13 Знайти індекс останньої ціни, що більше за 1000

function tasc13() { 
    let arrPrices = [1168, 553, 1241, 784, 347, 5919, 139, 9965, 7631, 1404, 872, 5220, 897, 574,];

    let backIndex = arrPrices.findLastIndex((indx)=> indx > 1000 )
    document.write(`Початковий масив цін: ${arrPrices} <br>`) 
    document.write(`Індекс остатнього числа що більше за 1000: ${backIndex}`)


}
