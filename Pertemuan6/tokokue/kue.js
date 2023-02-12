// latihan kue

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

// factory class Kitchen
class Kitchen{
    constructor(kotak){
        this.container = kotak || [];
    }

    // methode
    bake(...cake){
        const [id, name, price, ingredients, type, isSweet] = cake
        switch (type) {
            case "chocolate":
                this.container.push(new Chocolate(id, name, price, ingredients, type, isSweet));
                break;
            case "sweet":
                this.container.push(new Sweet(id, name, price, ingredients, type, isSweet));
                break;
            case "strawberry":
                this.container.push(new Strawberry(id, name, price, ingredients, type, isSweet));
                break;    
        }   
    }// end bake method

    eat(id){
        this.container = this.container.filter(kue => kue.id !== id);
    }// end eat method

    addSugar(id){
        this.container = this.container.map(kue => {
            if(kue.id === id) {
                kue.isSweet = !kue.isSweet;
            }
            return kue;
        })
    }// end addSugar method

    showCookies(){
        console.log("Our Cookie list:");
        this.container.forEach(kue => {
            console.log(`${kue.id}. ${kue.name} harga: Rp.${kue.price}`)
        })
    }// end showCookies method

    showIngredient(id){
        console.log(`${this.container[id-1].name} ingredients are: `)
        let nomor = 1;
        this.container[id-1].ingredients.forEach(ing => {
            console.log(`${nomor}. ${ing}`);
            nomor++;
        })
    }

    addIngredient(id, ingredienBaru){
        this.container[id-1].ingredients.push(ingredientBaru);
    }// end addIngredient method

    cookiesByIngredient(bahan){
        this.container = this.container.filter(kue => kue.ingredients.includes(bahan));
        
        if(this.container.length == 0){
            console.log("There's no cookie.")
        } else {
            let angka = 1;
            console.log(`Cookies with ${bahan} ingredients:`);
            this.container.forEach(cookies => {
                console.log(`${angka}. ${cookies.name}`)
                angka++;
            })
        }


        

    }

}


const kitchen = new Kitchen();

kitchen.bake(1, "Chocolate Cookies", 10000, ["Chocolate", "Butter"], "chocolate", true);
kitchen.bake(2, "Brownies Cakep", 20000, ["Chocolate", "flour", "pepper"], "chocolate", false);

// kitchen.eat(1);

// kitchen.addSugar(2);



// kitchen.showCookies();

// kitchen.addIngredient(2, "Baking ")

// kitchen.showIngredient(2);

// console.log(kitchen.container[0].ingredients[0]);

// kitchen.cookiesByIngredient("Chocolate")


console.log(kitchen.container)