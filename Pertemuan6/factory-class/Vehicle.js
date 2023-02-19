
// class vehicle terpisah
class Vehicle {
    constructor(id, name, type, brand, price){
        this.id = id || 0;
        this.name = name || "";
        this.type = type || "";
        this.brand = brand || "";
        this.price = price || 0;
    } 
}

class SUV extends Vehicle {
    constructor(id, name, type, brand, price){
        super(id, name, type, brand, price);
    }
}

class Truck extends Vehicle {
    constructor(id, name, type, brand, price) {
        super(id, name, type, brand, price);
    }
}

class Sport extends Vehicle {
    constructor(id, name, type, brand, price) {
        super(id, name, type, brand, price);
    }
}