// Parent class Cookie
class Cookie {
    constructor(id, name, price, ingredients, type){
        this.id = id || 0;
        this.name = name || "";
        this.price = price || 0;
        this.ingredients = ingredients || [];
        this.type = type || "";
    }
    
    // // method
    // showIngredient(id){

    // } 


}// end class Cookie

// child class Chocolate
class Chocolate extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet){
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet || false;
    }
}// end class Chocolate

// child class Sweet
class Sweet extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet){
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet || false;
    }
}// end class Sweet

// child class Strawberry
class Strawberry extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet){
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet || false;
    }
}// end class Strawberry

module.exports = {
    Chocolate,
    Sweet,
    Strawberry
}