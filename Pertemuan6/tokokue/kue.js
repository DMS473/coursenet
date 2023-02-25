// latihan kue



const Kitchen = require("./Kitchen")


const kitchen = new Kitchen();

kitchen.bake(1, "Chocolate Cookies", 10000, ["Chocolate", "Butter"], "Chocolate", true);
kitchen.bake(2, "Brownies Cakep", 20000, ["Chocolate", "Flour", "Pepper"], "Chocolate", false);
kitchen.bake(3, "Sweet Butter", 70000, ["Butter", "Milk", "Sugar"], "Sweet", false);
kitchen.bake(4, "Red Velvet", 40000, ["Strawberry", "Milk", "Sugar"], "Strawberry", true);
kitchen.bake(5, "Berry Cake", 50000, ["Pepper", "Strawberry", "Butter"], "Strawberry", false);
// kitchen.eat(1);

// kitchen.addSugar(2);


kitchen.sortCookies("asc");
// kitchen.showCookies();

// kitchen.addIngredient(2, "Baking ")

// kitchen.showIngredient(2);

// console.log(kitchen.container[0].ingredients[0]);

// kitchen.categoriesCookiesByIngredient("Chocolate")
// kitchen.sortCookies("desc");

// kitchen.categoriesCookies();

// console.log(kitchen.container)