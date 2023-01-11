function concatenateData (input) {
    //You are <firstName> <lastName>, a <age>-years old person from <town>.
    let name = (input[0]);
    let surname = (input[1]);
    let age = Number(input[2]);
    let town = (input[3]);
    console.log(`You are ${name} ${surname}, a ${age}-years old person from ${town}.`);

}
concatenateData(['Maria', 'Ivanova', 25, 'Pleven'])