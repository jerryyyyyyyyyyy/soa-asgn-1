// OS Module

const os = require('os')
// current user info
const user = os.userInfo()
console.log(user);

// System Uptime in seconds
console.log(`System Uptime ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    TotalMemory: os.totalmem(),
    FreeMemory: os.freemem(),
}
console.log(currentOS);
