// A. Cek bilangan genap dan ganjil
var number = 10;

if ((number % 2) == 0) {
    console.log(number + " adalah bilangan genap")
} else if ((number % 2) == 1) {
    console.log(number + " adalah bilangan ganjil")
} else {
    console.log("Inputan diluar nalar")
}

// B. Cek score nilai
var score = 100;

if(score >= 85 && score <= 100){
    console.log("GRADE A")
} else if(score >= 70) {
    console.log("GRADE B")
} else if(score >= 55) {
    console.log("GRADE C")
} else if(score >= 40) {
    console.log("GRADE D")
} else if(score >= 0) {
    console.log("GRADE E")
} else {
    console.log("Inputan diluar nalar")
}

// Switch case 
// var angka = 90;
// switch(true) {
//     case (angka<=100):
//       console.log("GRADE A")
//       break;
//     case (angka>100):
//       console.log("GRADE S")
//       break;
//     default:
//         console.log("DILUAR NALAR")
//   } 


// C. Study Case 2
let harga = 750000
let promo = "Discount10%"
var diskon;
var result = 0;

switch(promo) {
    case "Discount10%":
        if (harga >= 500000) {
            result = harga * 9 / 10
        } else if (harga >= 300000) {
            result = harga * 95 / 100
        } else if (harga < 300000) {
            result = harga * 975 / 1000
        }
      break;

    case "DiscountHarbolnas":
        if (harga >= 250000) {
            result = harga * 85 / 100
        } else if (harga < 250000) {
            result = harga 
        }
      break;
    // default:
    //   console.log("DILUAR NALAR")
} 

console.log(result)


