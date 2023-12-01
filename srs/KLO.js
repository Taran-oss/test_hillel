
function KLO(carFuel = "disel", carSize = "XL") 
{
    if (carSize === "XL" && carFuel === "gas") 
    {
        console.log('заправка для XL авто, тип палива gas')
    } 
    else if (carSize === "L" && carFuel === "gas") 
    {
        console.log('заправка для L авто, тип палива gas')
    } 
    else if (carSize === "M" && carFuel === "gas") 
    {
        console.log('заправка для M авто, тип палива gas')
    } else if (carSize === "XL" && carFuel === "disel") 
    {
        console.log('заправка для XL авто, тип палива disel')
    } 
    else if (carSize === "L" && carFuel === "disel") 
    {
        console.log('заправка для L авто, тип палива disel')
    } 
    else if (carSize === "M" && carFuel === "disel") 
    {
        console.log('заправка для M авто, тип палива disel')
    } 
    else 
    {
        console.log('Помилка: неіснуючий розмір або тип палива');
    }
}


KLO("gas", "XL")
KLO("gas", "L")
KLO("gas", "S")
KLO("gas", "M");
KLO("disel", "XL")
KLO("disel", "L")
KLO("disel", "S")
KLO("disel", "M")
KLO()