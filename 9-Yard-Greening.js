function yardGreening(input) {
    //· "The final price is: {крайна цена на услугата} lv."
    //· "The discount is: {отстъпка} lv."

    let greenSqMeters = (input[0])
    let fullPrice = greenSqMeters * 7.61;
    let discount = fullPrice * 0.18; 
    let finalPrice = fullPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])