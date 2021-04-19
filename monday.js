
function makeCake (oatMilkFridge, oatMilkBuy) {
    console.log("result ", oatMilkFridge * oatMilkBuy);
}

makeCake(20,4);
makeCake(1,5);
makeCake(10,10);
makeCake(5,5);

// 2. Multiply - Function Declarations as Values

const shoppingList = function (oatMilkFridge, oatMilkBuy) {
    console.log("result ", oatMilkFridge * oatMilkBuy);
} 

shoppingList(10,3);

//  O3. Multiply - Arrow Function
const moreList = (number1, number2) => {
    const sum = number1 * number2;
    console.log("I calculated! And the sum is... " + sum);
}

moreList(3,4);

// 4. Declarations
function needHolidays (number1, number2) { 
    console.log("Lea gives ", number1 % number2 , " fucks")};

needHolidays(200,5);

const needCake = function (number1, number2) {
    console.log("I need ", number1 % number2, " cakes today!");
}
needCake(4,6);

const bottlesAlcohol = (number1, number2) => {
    const sum = number1 % number2;
    console.log("I need " + sum + " drinks");
}
bottlesAlcohol(70,4);

