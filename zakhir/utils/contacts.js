const fs = require('fs');

// const dirpath = '.data'
// if(!)

// const mkdir = 

const LoadData = () =>{
    const getData = JSON.parse(fs.readFileSync('../data/contacts.json',));
return getData;
}

module.exports = {LoadData};
// console.log(getData)

