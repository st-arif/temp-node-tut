// file system module   (synchronuosly)

const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

// console.log(`${first} and ${second}`);

writeFileSync('./content/result-sync.txt',
`file is attached there are two files ${first} and ${second}`,
{ falg: 'a'})