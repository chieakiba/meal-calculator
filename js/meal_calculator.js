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

//Diner objects and constructor functions
/* @param orders is object: {food: [], drinks: []}  */
var Diner = function (orders) {
    this.orders = orders;
};

var sally = new Diner({
    food: ['spaghetti'],
    drink: ['cabernet sauvignon']
});
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

var diners = [sally, richard, david, jessica];

//Calculating total price of the meal


$(document).ready(function () {
    //Total bill per person and overall bill
    /* @param orders is var diners (see above).  */
    function total(diners) {
        var totalBill = 0;
        for (var i = 0; i < diners.length; i++) {
            var diner = diners[i];
            var totalFood = 0;
            for (var j = 0; j < diner.orders.food.length; j++) {
                var food = MealPrice[diner.orders.food[j]];
                if (food !== undefined && food !== '') {
                    totalFood += food;
                } else {
                    console.log('One or more of the dishes are not listed on the menu!');
                }
            }
            totalBill += totalFood;

            var totalDrink = 0;
            for (var k = 0; k < diner.orders.drink.length; k++) {
                var drink = DrinkPrice[diner.orders.drink[k]];
                if (drink !== undefined && drink !== '') {
                    totalDrink += drink;
                } else {
                    console.log('One or more of the drinks are not listed on the menu!');
                }
            }
            totalBill += totalDrink;
        }
        return totalBill;
    }
    var totalForDiners = Math.round(total(diners));
    console.log(totalForDiners);
    var totalWithTax = Math.round(totalForDiners * 1.10);
    console.log(totalWithTax);
    var totalWithTip = Math.round(totalWithTax * 1.20);
    console.log(totalWithTip);
    var split = Math.round(totalWithTip / 4);
    console.log(split);
    $('.final').append('$' + totalWithTip);
    $('.total').append('$' + split);
})
