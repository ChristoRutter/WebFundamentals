function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {}
    pizza.crust = crustType
    pizza.sauce = sauceType
    pizza.cheese = cheese
    pizza.toppings = toppings
    return pizza
}

function randomPizza(){
    var randPizza = {}
    var randCrust = ["deep dish", "thin", "hand tossed"]
    var randSauce = ["traditional", "white", "marinara"]
    var randCheese = ["mozzerella", "feta"]
    var randToppings = ["pepperoni", "sausage", "bacon"]
    randPizza.randCrust = randCrust[Math.floor(Math.random() * 3)]
    randPizza.randSauce = randSauce[Math.floor(Math.random() * 3)]
    randPizza.randCheese = randCheese[Math.floor(Math.random() * 2)]
    randPizza.randToppings = randToppings[Math.floor(Math.random() * 3)]
    return randPizza
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["pepperoni", "sausage"]);
console.log(pizza2)

var pizza3 = pizzaOven("deep dish", "white", "mozzarella", ["pepperoni", "bacon"]);
console.log(pizza3)

var pizza4 = pizzaOven("thin", "traditional", "feta", ["pepperoni", "bacon", "olives"]);
console.log(pizza4)
console.log(randomPizza())