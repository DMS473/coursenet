const fs = require("fs");

const { Chicken, Cow, Sheep } = require("./Livestock");

class Farm {
  constructor(id, name, livestocks) {
    this.id = id;
    this.name = name;
    this.livestocks = [];
  }

  static help() {
    console.log("node farm.js help ");
    console.log("node farm.js show ");
    console.log("node farm.js create <farm_name>");
    console.log("node farm.js details <farm_name>");
    console.log("node farm.js add <farm_name> <livestock_type>");
    console.log("node farm.js sell <farm_name> <livestock_id>");
    console.log("node farm.js totalProduce <farm_name>");
    console.log("node farm.js sort <sort_type>");
  }

  static show() {
    const farms = this.getFarms();
    console.log("Farms list:");
    farms.forEach((farm) => {
      console.log(
        `${farm.id}. "${farm.name}" has ${farm.livestocks.length} livestocks`
      );
    });
  }

  static create(params) {
    const farms = this.getFarms();
    const [name] = params;
    const id = farms[farms.length - 1].id + 1;

    farms.push(new Farm(id, name));
    this.saveFarms(farms);
    console.log(`"${name}" has been bought!`);
  }

  static detail(params) {
    const farms = this.getFarms();
    const [name] = params;
    farms.forEach((farm) => {
      if (farm.name == name) {
        console.log(`${name} stats :`);
        farm.livestocks.forEach((livestock) => {
          if (livestock.type == "chicken") {
            console.log(`${livestock.id}. Chicken, eggs : ${livestock.eggs},`);
          } else if (livestock.type == "cow") {
            console.log(`${livestock.id}. Cow, milks : ${livestock.milks},`);
          } else if (livestock.type == "sheep") {
            console.log(`${livestock.id}. Sheep, wools : ${livestock.wools},`);
          }
        });
      }
    });
  }

  static add(params) {
    let farms = this.getFarms();
    const [name, type] = params;

    farms = farms.map((farm) => {
      if (farm.name == name) {
        const id = farm.livestocks.length + 1;
        switch (type) {
          case "chicken":
            farm.livestocks.push(
              new Chicken(id, type, Math.round(Math.random() * 10))
            );
            break;
          case "cow":
            farm.livestocks.push(
              new Cow(id, type, Math.round(Math.random() * 10))
            );
            break;
          case "sheep":
            farm.livestocks.push(
              new Sheep(id, type, Math.round(Math.random() * 10))
            );
            break;
        }
        console.log(`A ${type} has been added to "${name}"!`);
      }
      return farm;
    });
    this.saveFarms(farms);
  }

  static sell(params) {
    let farms = this.getFarms();
    const [name, id] = params;
    let ketemu = false;

    farms.forEach((farm) => {
      if (farm.name == name) {
        farm.livestocks = farm.livestocks.filter((livestock) => {
          if (livestock.id == id) {
            console.log(`A ${livestock.type} has been sold! `);
            ketemu = true;
          }
          return livestock.id != id;
        });
      }
    });
    if (ketemu == false) {
      console.log(`Livestock not found.`);
    }
    this.saveFarms(farms);
  }

  static totalProduce(params) {
    const farms = this.getFarms();
    const [name] = params;
    let totalProduced = 0;

    farms.forEach((farm) => {
      if (farm.name == name) {
        farm.livestocks.forEach((livestock) => {
          switch (livestock.type) {
            case "chicken":
              totalProduced += livestock.eggs;
              break;
            case "cow":
              totalProduced += livestock.milks;
              break;
            case "sheep":
              totalProduced += livestock.wools;
              break;
          }
        });
      }
    });
    console.log(`"${name}" has produced ${totalProduced} goods`);
  }

  static totalProduceReturn(params) {
    const farms = this.getFarms();
    const name = params;
    let totalProduced = 0;

    farms.forEach((farm) => {
      if (farm.name == name) {
        farm.livestocks.forEach((livestock) => {
          switch (livestock.type) {
            case "chicken":
              totalProduced += livestock.eggs;
              break;
            case "cow":
              totalProduced += livestock.milks;
              break;
            case "sheep":
              totalProduced += livestock.wools;
              break;
          }
        });
      }
    });
    return totalProduced;
  }

  static sort(params) {
    let farms = this.getFarms();
    const [sort_type] = params;

    switch (sort_type) {
      case "produce":
        farms.forEach((farm) => {
          farm[sort_type] = this.totalProduceReturn(farm.name);
        });

        farms = farms.sort((a, b) => b.produce - a.produce);

        console.log(`Sort Produce :`);
        let angka = 1;
        farms.forEach((farm) => {
          console.log(`${angka}. ${farm.name} : ${farm.produce} goods`);
          angka++;
        });
        break;
        
      case "livestocks":
        farms = farms.sort((a, b) => b.livestocks.length - a.livestocks.length);
        console.log(`Sort Livestocks :`);
        let angka1 = 1;
        farms.forEach((farm) => {
          console.log(
            `${angka1}. ${farm.name} : ${farm.livestocks.length} Livestocks`
          );
          angka1++;
        });
        break;
    }
  }

  static getFarms() {
    const farms = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    return farms;
  }

  static saveFarms(farms) {
    const farmsString = JSON.stringify(farms, null, 2);
    fs.writeFileSync("./data.json", farmsString);
  }
}

module.exports = Farm;
