const angkas = [1,2,3,4,5];

// cara 1 function biasa
// function countMean(array) {
//     let sum = 0;
//     for (let i of array) {
        
//         sum += i;
//     }
//     return sum / array.length;
// }
// let hasil = countMean(angkas);

// cara 2 function array
// function countMean(array) {
//     let sum = 0;
//     for (let i of array) {
        
//         sum += i;
//     }
//     return sum / array.length;
// }

let hasil ;
hasil = (angkas) => {
    let sum = 0;
    for (let i of angkas) {
        
        sum += i;
    }
    return sum / angkas.length;
}

// cara 3 dengan menggunakan imidiately invoke function 


console.log(hasil);

// latihan part 2 membuat palindrome console.log true

const benda = "kodok"



function palindrome(benda) {
    return benda === benda.split("").reverse().join("");
}