function addTaxToPrices(taxrate,...itemsbought)
{
    return itemsbought.map(item=> taxrate *item)
}
let shoppingcart = addTaxToPrices(1.1,46,89,35,79);
console.log(shoppingcart);//[50.6,97.9,38.5,86.9]