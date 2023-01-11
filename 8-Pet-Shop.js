function petShop(input) {
    let dogs = Number(input[0]);
    let cats = Number(input[1]);
    let summary = dogs * 2.5 + cats * 4;
    console.log(`${summary} lv.`);
}
petShop(["5", "4"])