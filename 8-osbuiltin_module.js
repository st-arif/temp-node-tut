// some built in modules

const os = require('os');
const os=require('os');

//info about current user   
console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(`the system update is ${os.uptime()} seconds`);

const currentOs={
    name: os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOs);