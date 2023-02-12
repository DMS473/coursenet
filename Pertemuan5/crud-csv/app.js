const fs = require("fs");


const dogs = {
    houses: [],

    // method
    getDogs: function () {
        // step 1 mengambil data dari file .csv
        let dogs = fs.readFileSync("./data.csv", "utf8");

        // step 2 mengubah menjadi array 
        dogs = dogs.split("\n");
        console.log(dogs);

        //  step 3 mengubah menjadi array 2 dimensi
        dogs = dogs.map(dog => {
            return dog.split(",")
        })
        console.log(dogs);

        // step 4 mengubah array menjadi object
        let arrDogs = []
        let tempDog = {}
        
        for(let dog in dogs) {
            // console.log(dog);
            if (dog != 0) {
                tempDog = {
                    id: Number(dogs[dog][0]),
                    name: dogs[dog][1],
                    breed: dogs[dog][2],
                    characters: dogs[dog][3].split('-'),
                    owner: dogs[dog][4]
                }
                arrDogs.push(tempDog);
                // console.log(tempDog);
            }   
        }
        this.houses = arrDogs;

        // console.log(arrDogs);
        // console.log(dogs)
    },
    showDogs: function () {
        console.log(this.houses);
    },
    addDogs: function (...args) {
        
        const [name, breed, characters, owner] = args;

        let id = this.houses.length;

        let temp = {
            id: ++id,
            name,
            breed,
            characters: characters.split('-'),
            owner
        };
        this.houses.push(temp);
    },
    saveToCSV: function () {
        let result = [];

        this.houses.forEach(function (house){
            
            house.characters.join("-");
            
            console.log(house);

        })
        
        this.houses.map(function (house) {
            result.push(`${house.id},${house.name},${house.breed},${house.characters},${house.owner}`);
        })
        // result = this.houses.join(', ');

        console.log(result);
    } 
}

dogs.getDogs();

dogs.addDogs("Mola", "Pitbull", "Furious-playfull", "Jhon Cena");

// dogs.saveToCSV();


dogs.showDogs();
// console.log(dogs.houses);