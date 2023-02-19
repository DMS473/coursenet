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