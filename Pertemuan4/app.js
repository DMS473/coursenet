// Pertemuan ke 4

// let scores = [1,2,3,4,5,6,7,8,9,10];

// for (let i in scores) {
//     process.stdout.write(`${i}`);
// }

// const angka = 5;
// process.stdout.write(`ini ${scores[2]}`);

// latihan part 1
// let ipk = [1.2, 2.3, 3.4, 3.7];

// let hasil = 0;
// metode for of
// for (let i of ipk) {
//     hasil += i;
// }

// metode forEach
// ipk.forEach(element => {
//     hasil += element;
// });

// metode IIFE(imidiately invoke function)
// (() =>{

// })();

// console.log(hasil);

// latihan part 2
// let murid = [["daffa", "ucok", "udin"],[1, 2, 3, 4, 5],["ujang", "upok"]];

// for (let i = 0; i < murid.length; i++){

// }
// console.log(murid.length);

// for(let i of murid){
//     for(let j of i) {
//         console.log(j);
//     }
//     console.log(i);
// }

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];

// console.log(word);


// latihan part 3
const pantun = "makan siang bareng teman cakep";

// let temparr="";
// temparr = pantun.substring(pantun[0],5);

// console.log(temparr);

// let temparr1 = pantun.substring(5,11);
// pantun.indexOf(" ", i+1);
// console.log(pantun.indexOf(" ", 6));

// temparr.push("ujok");
let start = 0;
let akhir = 0;
for (let i=0; i<5; i++) {

    // console.log("I = "+i);
    // akhir = pantun.indexOf(" ", i+1);
    // console.log("a = "+akhir);
    
    // i = akhir;
    // if(akhir < 0){
    //     akhir = pantun.length()-2;
    // }
    // if(akhir)
    let stop = pantun.indexOf(" ", akhir+1)
    if (stop < 0) {
        stop = pantun.length;
    }
    let temp = pantun.substring(start, stop)
    console.log(temp);
    akhir = pantun.indexOf(" ", akhir+1);
    

    // console.log("i = "+i);
    // console.log("start = "+start);
    // console.log("akhir = "+akhir);

    start = akhir + 1;

    // console.log(i);
    // let akhir = start;
    // let temparr1 = pantun.substring(start,pantun.indexOf(" ", akhir+1));
        
    // i += pantun.indexOf(" ", i);

    // console.log(start);
    // console.log(temparr1);
    
    // start += pantun.indexOf(" ", akhir+1);

    // start =0;
    // i--;
    // temparr = pantun.substring(pantun[i],12);
    // pantun.indexOf(" ")
    // i--;
    // console.log(temparr);
    // i += pantun.indexOf(" ",i);
    // console.log(i);
}

// temparr = pantun.substring(pantun[0],pantun.indexOf(" "));
// console.log(temparr);

// console.log(pantun.indexOf(" "));

// latihan part 4