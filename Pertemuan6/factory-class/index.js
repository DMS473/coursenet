//  factory function






// const brio = new SUV(1, "Brio", "suv", "Honda", 500000000);


const showroom = new Showroom();


// showroom.addVehicleObj(brio)
showroom.addVehicle("HR-V", "sport", "Honda", 350000000);
showroom.addVehicle("Hino Mania", "truck", "Hino", 1550000000);

// showroom.deleteVehicle(1);
showroom.updateVehicle(2, "Hino Super Box", "sport", "Suzuki", 100000);


// showroom.showVehicle()



console.log(showroom.rooms);