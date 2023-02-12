class Students {
    constructor(id, name, major, age, isGraduated){
        this.id = id;
        this.name = name;
        this.major =major;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    speakUp(){
        console.log(`Hi, my name is ${this.name}. I\'m ${this.age} years old.`);
        console.log(`My major is ${this.major}`);
    }

    growUp(){
        this.age++;
    }
}

let students = new Students(1, "Daffa", "IT", 20, true);
let students2 = new Students(2, "affa", "ITI", 21, false);


students2.growUp();

// students.speakUp();
// students2.speakUp();

// console.log(students);
// console.log();
// console.log(students2);

class Employee {
    constructor(id, name, job){
        this.id = id || 0;
        this.name = name || "";
        this.job = job || "";
    }
}

class Programmer extends Employee {
    constructor(id, name, job, skills){
        super(id, name, job)
        this.skills = skills;
    }
}

class Designer extends Employee {
    constructor(id, name, job, tools){
        super(id, name, job)
        this.tools = tools;
    }
}


const programmer1 = new Programmer(1, "Daffa", "backend developer", ["html", "css", "js", "php", "laravel"]);
const designer1 = new Designer(2, "Muis", "Video editor", ["cap-cut", "audio trimmer"])

// console.log(programmer1)
// console.log(designer1)


// 
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

class Showroom {
    constructor(rooms) {
        this.rooms = rooms || [];
    }
    showVehicle(){
        if(this.rooms.length > 0) {

            console.log("List mobil:")
                
            this.rooms.forEach(mobil => {
                // cara output 1
                // console.log(`${mobil.id}. ${mobil.brand} ${mobil.name} tipe ${mobil.type} harga: Rp.${mobil.price}`)
            
                // cara deconstructure
                const {id, name, type, brand, price} = mobil
                console.log(`${id}. ${brand} ${name} tipe ${type} harga: Rp.${price}`)
            })

        } else {
            console.log("tidak ada mobil")
        }   
    }
    addVehicleObj(mobil){
        this.rooms.push(mobil);
    }
    addVehicle(...car){
        const [name ,type, brand ,price] = car
        // console.log(`${id}. ${brand} ${name}`)
        let id = this.rooms.length + 1

        switch(type){
            case "suv":
                this.rooms.push(new SUV(id, name, type, brand ,price))
                break;
            case "truck":
                this.rooms.push(new Truck(id, name, type, brand ,price))
                break;
            case "sport":
                this.rooms.push(new Sport(id, name, type, brand ,price))
                break;
        }
    }

    deleteVehicle(id) {
        this.rooms = this.rooms.filter(mobil => mobil.id !== id);
    }

    updateVehicle(...params) {
        const [id, name, type, brand, price] = params;

        this.rooms = this.rooms.map(mobil => {
            if (mobil.id === id) {
                mobil.name = name;
                mobil.type = type;
                mobil.brand = brand;
                mobil.price =price;
                // let tempObject = [
                //     this.name = name,
                //     this.type = type,
                //     this.brand = brand,
                //     this.price = price
                // ]
            }
            return mobil
        })
    
    }



}


const brio = new SUV(1, "Brio", "suv", "Honda", 500000000);


const showroom = new Showroom();


// showroom.addVehicleObj(brio)
showroom.addVehicle("HR-V", "sport", "Honda", 350000000);
showroom.addVehicle("Hino Mania", "truck", "Hino", 1550000000);

// showroom.deleteVehicle(1);
showroom.updateVehicle(2, "Hino Super Box", "sport", "Suzuki", 100000);


// showroom.showVehicle()



console.log(showroom.rooms);