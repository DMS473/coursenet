

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
    }// end showVehicle

    addVehicleObj(mobil){
        this.rooms.push(mobil);
    }// end addVehicleObj (kurang recommended)
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
    }// end addVehicle

    deleteVehicle(id) {
        this.rooms = this.rooms.filter(mobil => mobil.id !== id);
    }// end deleteVehicle

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
    }// end UpdateVehicle


}//end class Showroom