const { cpuUsage, memoryUsage } = require("process");

setInterval(() => {
    let cp = cpuUsage();
    let mem = memoryUsage();
    console.log(Object.keys(cp))
    console.log(
        `CPU = ${cp} | Memory = ${mem}`
    )
}, 1000)

// isso daqui foi só um teste mesmo,
// ver o uso de cpu com node. nem sabia que
// existia. 

