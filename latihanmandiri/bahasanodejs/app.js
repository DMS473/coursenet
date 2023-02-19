// console.log("Startinging");
// console.log("Startinging");

// ALGORITMA dan PSEUDOCODE

// A. Tentukan hasil luas segitiga

/* 1. ALGORITMA
    ----------------------------------------------------------------
    - Rumus luas segitiga adalah alas * tinggi / 2
    - Buat variabel alas
    - Buat variabel tinggi
    - Buat variabel luas
    - Isi variabel luas dengan rumus alas * tinggi / 2

   2. PSEUDOCODE
    ----------------------------------------------------------------
    - SET alas WITH NUMBER
    - SET tinggi WITH NUMBER
    - SET luas WITH alas MULTIPLY tinggi DIVIDE 2
    - PRINT luas

*/

// var alas_segitiga = 10;
// var tinggi_segitiga = 5;
// var luas_segitiga = alas_segitiga * tinggi_segitiga / 2;

// console.log("Luas segitiganya adalah : "+luas_segitiga);



// console.log("Hello world!"); 

// B. Tentukan hasil luas lingkaran

/* 1. ALGORITMA
    ----------------------------------------------------------------
    - Rumus luas lingkaran adalah jari * jari * 22 / 7
    - Buat variabel jari
    - Buat variabel luas
    - Isi variabel luas dengan rumus jari * jari * 22 / 7

   2. PSEUDOCODE
    ----------------------------------------------------------------
    - SET jari WITH NUMBER
    - SET luas WITH jari MULTIPLY jari MULTIPLY 22 DIVIDE 7
    - PRINT luas

*/

// const prompt = require("prompt-sync")({ sigint: true });
// const jari_lingkaran = prompt("berapa panjang jari-jari lingkaran ? ");
// console.log(`You are ${age} years old.`);

// var jari_lingkaran = 7;

// var luas_lingkaran = jari_lingkaran * jari_lingkaran * 22 / 7;

// console.log("Luas lingkarannya adalah : "+luas_lingkaran);


// C. Tentukan hasil luas tabung

/* 1. ALGORITMA
    ----------------------------------------------------------------
    - Rumus luas alas tabung adalah jari * jari * 22 / 7
    - Rumus luas sisi tabung adalah keliling * tinggi
    - Rumus luas tabung adalah 2 * luas lingkaran + luas sisi

    - Buat variabel jari
    - Buat variabel tinggi
    - Buat variabel alas
    - Isi variabel alas dengan rumus jari * jari * 22 / 7

    - buat variabel keliling 
    - Isi variabel keliling dengan rumus 2 * jari * 22 / 7

    - buat variabel sisi
    - Isi variabel sisi dengan rumus keliling * tinggi

    - buat variabel luas
    - Isi variabel luas dengan 2 * alas + sisi


   2. PSEUDOCODE
    ----------------------------------------------------------------
    - SET jari WITH NUMBER
    - SET tinggi WITH NUMBER
    - SET alas WITH jari MULTIPLY jari MULTIPLY 22 DIVIDE 7
    - SET keliing WITH jari MULTIPLY 2 MULTIPLY 22 DIVIDE 7
    - SET sisi WITH keliling MULTIPLY tinggi
    - PRINT luas

*/

var jari_tabung = 7;
var tinggi_tabung = 5;

var alas_tabung = jari_tabung * jari_tabung * Math.PI;
var keliling_tabung = 2 * jari_tabung * Math.PI;
var sisi_tabung = keliling_tabung * tinggi_tabung;
var luas_tabung = 2 * alas_tabung + sisi_tabung;

// console.log(Math.PI);
// console.log("Luas lingkarannya adalah : "+luas_tabung);

// looping
// for(var i = 1; i <= 10; i++) {
//     console.log(`${i} adalah Bilangan ${(i%2) !== 0 ? "Ganjil" : "Genap"}`);
// }
// let j = 1;
// (j%2) !== 0 ? console.log("Ganjil") : console.log("Genap");

//  part 2 mandi lumpur
// const str = 'mandi lumpur';

// for (let i of str) {
//     if (i !== " ") {
//         console.log(i);
//     }
// }

// part 3 sayur lodeh
const sayur = 'sayur lodeh';
let seling = 1;

const temp = [];
// const IsChecked = true;
for (let i of sayur) {
    i = (seling%2) !== 0  ? i.toUpperCase() : i.toLowerCase();
    seling++;
    // i.toLocaleUpperCase();
    temp.push(i);
}
console.log(temp.join(""));

// sayur.toUpperCase();
// console.log("daFaa".toUpperCase());
// str.forEach(c => console.log(c))
// str.array.forEach(element => {
    // console.log(str);
// });

// console.log(str.array);

// const numbers = [65, 44, 12, 4];
// str.forEach(myFunction = (item, index, arr) => {
//     // arr[index] = item * 10;
//     console.log(arr[index]);
// })



// hello = () => {
//     document.getElementById("demo").innerHTML += this;
//   }

// let text = "Hello World!";
// text.toUpperCase();

// console.log(text);

// part 4
const kode = "xooxx";
let uji = 0;
for (let m of kode) {
    m == "x" ? uji++ : uji--;
}
let hasil = uji == 0 ? "sama" : "beda";
console.log(hasil);

// part 5
const faktor = 107;
let uji2 = 0;
for (let k = 1; k <= faktor; k++) {
    if((faktor%k)== 0 ) {
        uji2++;
    } 
}
let hasilFaktor = uji2 == 2 ? "adalah faktor" : "bukan faktor";
console.log(hasilFaktor);


// const test3 = 10;
// test3 = 99;


// for (let test1 = 1; test1 <= 10; test1++) {
//     console.log(test1);
// }
// console.log(test1);


// part 6
const n = 5;
const m = 3;

// model lama
// for(let i = 0; i <= m; i++) {
//     for(let j = 0; j <= n; j++) {
//         process.stdout.write("#")
//     }
//     console.log("");
// }

// model baru
let bentuk = "";
for(let j = 0; j <= n; j++) {
    // bentuk.push("#");
    bentuk = bentuk.concat("#");
}
for(let i = 0; i <= m; i++) {
    console.log(bentuk);
}

// part 7 segituga siku - siku
const siku = 5;
let bentukSiku = "";
for(let i = 0; i <= siku; i++) {
    bentukSiku = bentukSiku.concat("#");
    console.log(bentukSiku);
}