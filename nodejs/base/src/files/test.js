let fs = require('fs') 
fs.readFile('D://download//xcb_blackagent.cfg', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let lines = data.toString().split('\n');
    let i=1;
    let ln = 0;
    for (; ln<lines.length; ln ++) {
        let single = ln % 2 === 0;
        if (single) {
            console.log(`"DEFAULT_TABLE${i}"${lines[ln].substring(lines[ln].indexOf('="'))}`)
        } else {
            console.log(`"DEFAULT_BLACKFILE${i}"${lines[ln].substring(lines[ln].indexOf('="'))}`)
            i++;
        }
    }
 });