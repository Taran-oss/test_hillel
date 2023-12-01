let carFuel = "disel" // "disel"

let carSize = "XL" //M, L, XL

function OKKO (carFuel = "disel", carSize = "XL")
{   
    if (carSize === "XL" && carFuel === "gas")
    {
        console.log('заправка для XL авто, тип палива gas')
    }
    if (carSize === "L" && carFuel === "gas")
    {
        console.log('заправка для L авто, тип палива gas')
    }
    if (carSize === "M" && carFuel === "gas")
    {
        console.log('заправка для M авто, тип палива gas')
    }
    if (carSize === "XL" && carFuel === "disel")
    {
        console.log('заправка для XL авто, тип палива disel')
    }
    if (carSize === "L" && carFuel === "disel")
    {
        console.log('заправка для L авто, тип палива disel')
    }
    if (carSize === "M" && carFuel === "disel")
    {
        console.log('заправка для M авто, тип палива disel')
        console.log('Помилка: неіснуючий розмір або тип палива')
    }

}
OKKO("gas","XL")
OKKO("gas","L")
OKKO("gas","S")
OKKO("gas","M")
OKKO("disel","XL")
OKKO("disel","L")
OKKO("disel","S")
OKKO("disel","M")