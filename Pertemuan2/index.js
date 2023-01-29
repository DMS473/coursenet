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
