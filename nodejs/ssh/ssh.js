let Client = require('ssh2').Client;

class SSH {
    constructor (ip, time) {
        this.ip = ip;
        this.time = time;
    }

    async getLog (command) {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            let that = this;
            let datatime = '20180419';
            conn.on('ready', function () {
                console.log('Client :: ready');
                let data = '';
                conn.exec(command, function(err, stream) {
                    if (err) throw err;
                    stream.on ('close', function (code, signal) {
                        conn.end();
                    }).on ('data', function(chunk) {
                       data += chunk;
                        // 提取 uuid
                    }).on('end', function () {
                        resolve(data);
                        console.log("resolve: " + that.ip)
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
            console.log('hee end')
        });
    }
}

module.exports = SSH;