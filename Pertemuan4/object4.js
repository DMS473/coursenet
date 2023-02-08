// array to object
const array = ["JS for dummies", "learning", 150000, 5, true];

const hasil = array => {
    let hasil = {};

    hasil.name = array[0];
    
    return hasil;
}

console.log(hasil(array));

// latihan part 2 menemtukan pemenang pemilihan presiden
const votingan = ["vincent", "ncent", "james", "vincent"]

const hitungVote = vote => {
    let hasil = 0;

    for (let i = 0; i < vote.length; i++) {
        if (vote[i] === "james") {
            hasil += 1;
        }
    }
    return hasil
}
console.log(hitungVote(votingan));