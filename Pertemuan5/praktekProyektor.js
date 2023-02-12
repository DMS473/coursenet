// part 1 odd even checker

const numbers = 10;

const hasil = function checker(number) {
    if (number %2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(hasil(numbers));

console.log("\n================================================");
// part 2 power of 2
const angkas = [10,2,3,5,6,12,7]


// cara ES5
function powerOf2(number) {
    let temp = [];
    for (let i = 0; i < number.length; i++) {
        temp.push(number[i] * number[i]);
        // return number * number;
    }
    return temp;
}
function filterNumber(number) {
    let temp = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i]>10){
            temp.push(number[i]);
        }
        // temp.push(number[i] * number[i]);
        // return number * number;
    }
    return temp;
}

const hasil1 = filterNumber(powerOf2(angkas));
console.log(hasil1);

// ES6
// console.log("cara ES6")
// angkas.map(num => num*num)
// angkas.filter(num => num >10)
// angkas.forEach(angkas => {
//     console.log(angkas);
// })

// Chain functions
// console.log("\n================================ chain")
// const angkas2 = [10,2,3,5,6,12,7]
// angkas2.map(num => num*num).filter(num => num >10).forEach(num => console.log(num));

// part 3 
let items = [
    {
        id: 1,
        nama: "Envy USA",
        type: "apple",
        price: 50000,
        stock: 50,
        isSold: true
    },
    {
        id: 2,
        nama: "Fresh Ponkan",
        type: "orange",
        price: 35000,
        stock: 50,
        isSold: false
    }
]

const getItems = (item) => {
    console.log("Fruit list:")
    item.forEach(item => {
        if(item.isSold === true){
            console.log(`${item.id}. [X] ${item.nama} ${item.type}, Rp. ${item.price}, ${item.stock} pcs`)
        } else {
            console.log(`${item.id}. [ ] ${item.nama} ${item.type}, Rp. ${item.price}, ${item.stock} pcs`)
        }
    })
}


// getItems(items)

// Create a list of items
const addItem = (...params) => {

    const [nama, type, price, stock] = params;
    let id;
    if (items.length === 0){
        id =0;
    } else {
        id = items.length;
    }

    let temp = {
        id: ++id,
        nama,
        type,
        price,
        stock,
        isSold: false
    }
    items.push(temp)
    // console.log(temp)
    console.log(params)
}

// Delete a list of items
const deleteItem = (id) => {
    items = items.filter(item => {
        return item.id !== id
    })
    console.log(`Fruit id ${id} has been deleted`)
}

// update a list of items
const updateItem = (...params) => {
    const [id, nama, type, price, stock] = params
    items = items.map(item => {
        if (item.id === id) {
            item.nama = nama;
            item.type = type;
            item.price = price;
            item.stock = stock;
        }
        return item;
    })
    console.log(`Fruit id ${id} has been updated`)
}


// function changestatus is sold
const changeStatus = id => {
    items = items.map(item => {
        if (item.id === id){
            item.isSold = !item.isSold;
        }
        return item;
    })
}


addItem("Melon Madu", "melon", 27500, 15);

deleteItem(2)

updateItem(3,"Melonadu", "melon", 27500, 15);
changeStatus(3);


getItems(items)

// konsep destructuring
// const students = ["daffa", 3.5, true];
// const [name1, gpa, isGraduated] = students;
// console.log(name1,gpa, isGraduated);

// const mahasiswa = {
//     nama: "daffa",
//     gpa1: 3.5,
//     isGraduated1: true
// }
// const {nama, gpa1, isGraduated1} = mahasiswa; 
// console.log(nama, gpa1, isGraduated1);

