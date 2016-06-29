'use strict';
//Meal price
var MealPrice = {
    'spaghetti': 10,
    'lasagna': 9,
    'eggplant parmigiano': 13,
    'quattro formaggi pizza': 11
};

//Drink price
var DrinkPrice = {
    'cabernet sauvignon': 4,
    'grappa': 4.5,
    'chianti': 5.5,
    'riesling': 5
};


var Diner = function (orders) {
    this.orders = orders;
};

var sally = new Diner({
    food: ['spaghetti'],
    drink: ['cabernet sauvignon']
});
//var sally_total_meal = 0;
//for (var i = 0; i < sally.orders.food.length; i++) {
//    var food = MealPrice[sally.orders.food[i]];
//    if (food !== undefined) {
//        sally_total_meal += food;
//    }
//
//}
//var meal = MealPrice[sally.orders.food[i]];
//var drink = DrinkPrice[sally.orders.drink];
//var total = meal + drink;

console.log(sally.orders);

var richard = new Diner({
    food: ['lasagna'],
    drink: ['grappa']
});
console.log(richard.orders);

var david = new Diner({
    food: ['eggplant parmigiano'],
    drink: ['chianti']
});
console.log(david.orders);

var jessica = new Diner({
    food: ['quattro formaggi pizza'],
    drink: ['riesling']
});
console.log(jessica.orders);
//Diner objects
var diners = [sally, richard, david, jessica];
console.log(total(diners));

function total(diners) {
    var totalBill = 0;
    for (var i = 0; i < diners.length; i++) {
        var diner = diners[i];
        var totalFood = 0;
        for (var j = 0; j < diner.orders.food.length; j++) {
            var food = MealPrice[diner.orders.food[j]];
            if (food !== undefined) {
                totalFood += food;
            } else {
                console.log('One or more of the dishes are not listed on the menu!');
            }
        }

        totalBill += totalFood;

        var totalDrink = 0;
        for (var k = 0; k < diner.orders.drink.length; k++) {
            var drink = DrinkPrice[diner.orders.drink[k]];
            if (drink !== undefined) {
                totalDrink += drink;
            } else {
                console.log('One or more of the drinks are not listed on the menu!');
            }
        }
        totalBill += totalDrink;
    }
    return totalBill;
}

//Price
var Price = function (prices) {
    this.prices = prices;
}


//Calculating total price of the meal
