const folder = require("fs");

class Vehicle {
  constructor(id, name, type, brand, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.price = price;
    // this.container = [];
  }

  static getVehicles() {
    let temp = JSON.parse(folder.readFileSync("./data.json", "utf8"));

    let mobils = temp.map((car) => {
      const { id, name, type, brand, price } = car;

      return new Vehicle(id, name, type, brand, price);
    });

    return mobils;
  }

  static showVehicles() {
    let vehicles = this.getVehicles();
    console.log("Vehicles list: ");
    vehicles.forEach((car) => {
      console.log(`${car.id}. ${car.name}, Rp. ${car.price}`);
    });
  }

  static addVehicle(...params) {
    const vehicles = this.getVehicles();
    const [name, type, brand, price] = params;
    let id = vehicles[vehicles.length-1].id + 1;

    vehicles.push(new Vehicle(id, name, type, brand, price));
    this.save(vehicles);

    console.log(`"${name}" has been added successfully`);
  }

  static deleteVehicle(id) {
    let vehicles = this.getVehicles();
    vehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    this.save(vehicles);
    console.log(`data has been deleted successfully`);
  }

  static updateVehicle(id, name, type, brand, price) {
    let vehicles = this.getVehicles();
    vehicles = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        vehicle.name = name;
        vehicle.type = type;
        vehicle.brand = brand;
        vehicle.price = price;
      }
      return vehicle;
    });
    this.save(vehicles);
    console.log(`Data has been updated successfully`);
  }

  static save(vehicles) {
    const vehicleStrings = JSON.stringify(vehicles, null, 2);
    folder.writeFileSync("data.json", vehicleStrings);
  }
} // end class Vehicle

// const mobilTes = new Vehicle(4, "Dky 2023", "suv", "hatsu", 30000);

// console.log(mobilTes);

// Vehicle.getVehicles()

// Vehicle.addVehicle("Dky 2023", "suv", "hatsu", 30000);

Vehicle.deleteVehicle(6);

// Vehicle.updateVehicle(5, "2023 New suzuki", "sedan", "suzuki", 90000);

// Vehicle.showVehicles();4, "Dky 2023", "suv", "hatsu", 30000)

// console.log(id, name, type, brand, price)

// console.log(mobils)

// console.log(temp[1]);

// let mobil1 = temp[1]

// Vehicle.container.push(mobil1);

// console.log(Vehicle.container);

// let mobil1 = new Vehicle(temp[1]);

// console.log(mobil1);

// temp.forEach(element => {
//     // const {id, name, type, brand, price} = element;
//     // this.container.push(new Vehicle(element.id, element.name, element.type, element.brand, element.price));

//     // console.log(element);

// });

// this.container.push(new Vehicle(4, "Dky 2023", "suv", "hatsu", 30000));

// let showRoom = temp.map(car => {
//     // const
//     // return (new Vehicle(4, "Dky 2023", "suv", "hatsu", 30000));
// })
