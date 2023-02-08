let diskon = "HARBOLNAS" ;
let harga = 100000;
let total = 0;
// "harbolnas"
switch (diskon) {
    case "HARBOLNAS":
        if (harga > 300000){
            total = harga * 0.9;
        }else {
            total = harga;
        }
}
console.log(total);