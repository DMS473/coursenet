class Livestock {
    constructor(id, type){
        this.id = id;
        this.type = type;
    }
}

class Chicken extends Livestock {
    constructor(id, type, eggs){
        super(id, type);
        this.eggs = eggs;
    }
}

class Cow extends Livestock {
    constructor(id, type, milks){
        super(id, type);
        this.milks = milks;
    }
}

class Sheep extends Livestock {
    constructor(id, type, wools){
        super(id, type);
        this.wools = wools;
    }
}

module.exports = {
    Chicken,
    Cow,
    Sheep
}