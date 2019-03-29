
let Client = require('ssh2').Client;

class SSH {
    constructor (ip, time) {
        this.ip = ip;
        this.time = time;
    }

    getLog () {
        let conn = new Client();
        let that = this;
        let command =  `ls -l /search/odin/resin/wap/web/data/secadmin_blackurl_new.dat.agent`;
        return new Promise((resolve, reject) => {
            conn.on('ready', function () {
                console.log('Client :: ready');
                let data = '';
                conn.exec(command, function(err, stream) {
                    if (err) throw err;
                    stream.on ('close', function (code, signal) {
                        console.log(`Stream :: close :: code:  ${code} + , signal: ${signal}`);
                        conn.end();
                    }).on ('data', function(chunk) {
                       data += chunk;
                        // 提取 uuid
                    }).on('end', function () {
                        resolve(data);
                    }).stderr.on('data', function (data) {
                        console.log(`STDERR: ${data}`)
                    })
                });
            }).connect({
                host: that.ip,
                port: 22,
                username: 'username',
                password: 'passwd'
            })
        });
    }
}

module.exports = SSH;