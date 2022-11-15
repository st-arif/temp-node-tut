// path module

const path=require('path');
//it gives seperator 
console.log(path.sep);

const filepath=path.join("/content/","subfolder","file.txt");
//it gives the director in  the folder where files is saved
console.log(filepath);

//it gives file name
console.log(path.basename(filepath));

//it gives whole path where file is saved
const absolute=path.resolve(__dirname,'content','subfolder','file.txt');
console.log(absolute);