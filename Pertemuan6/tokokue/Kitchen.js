const { Chocolate, Sweet, Strawberry} = require("./Cookie");

// factory class Kitchen
class Kitchen{
    constructor(kotak){
        this.container = kotak || [];
    }

    // methode
    bake(...cake){
        const [id, name, price, ingredients, type, isSweet] = cake
        switch (type) {
            case "Chocolate":
                this.container.push(new Chocolate(id, name, price, ingredients, type, isSweet));
                break;
            case "Sweet":
                this.container.push(new Sweet(id, name, price, ingredients, type, isSweet));
                break;
            case "Strawberry":
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
            if(kue.isSweet == true) {
                console.log(`${kue.id}. [v] ${kue.name}, Rp.${kue.price}`)
            } else {
                console.log(`${kue.id}. [ ] ${kue.name}, Rp.${kue.price}`)
            }
            
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

    addIngredient(id, ingredientBaru){
        this.container[id-1].ingredients.push(ingredientBaru);
    }// end addIngredient method

    categoriesCookiesByIngredient(bahan){
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
    }// end cookiesByIngredient method
 
    sortCookies(type){
        // this.container = this.container.map()
        console.log(this.container);
        switch(type){
            case "asc":
                this.container = this.container.sort((a,b) => a.price - b.price);
                break;
            case "desc":
                this.container = this.container.sort((a,b) => b.price - a.price);
                break;

        }
        console.log(this.container);
    }// end sortCookies method

    categoriesCookies(){
        let arrSet = new Set();
        
        this.container.forEach(kue => {
            // console.log(kue.type);
            arrSet.add(kue.type);
        })
        // console.log(arrSet)
        // console.log(this.container);
        arrSet.forEach(tipe => {
            
            console.log(`${tipe}:`);
            // this.container = this.container.filter(kue => kue.type == tipe);

            // console.log(this.container);
            let angka = 1;
            this.container.filter(kue => kue.type == tipe).forEach(kue => {
                console.log(`${angka}. ${kue.name}`);
                angka++;
            })
            console.log()
        })
        
    }

}// end class Kitchen


module.exports = Kitchen