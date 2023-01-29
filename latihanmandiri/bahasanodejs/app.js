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
console.log("Luas lingkarannya adalah : "+luas_tabung);