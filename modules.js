// Commonjs , every file is module (by default)
// Modules -  encapsulated code (only share minimum)



//  data are coming from nameexport.js  and funexport.js
const names = require('./4-nameexport');
const funname=require('./5-utilsfunexports');


console.log(`Names are ${names.john} and ${names.peter}`);

funname(`${names.john}`);
funname(`${names.peter}`);

const item2=require('./6-ulternative-flavor');
// funname(`${items}`);
console.log(item2.items);
console.log(item2.person1);

// sum() automatically being module which is being required here
require('./7-mind_genrade');