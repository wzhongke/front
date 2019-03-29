
let Client = require('ssh2').Client;

class SSH {
    constructor (ip, time) {
        this.ip = ip;
        this.time = time;
    }

    async getLog () {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            let that = this;
            let command = "ls -l /search/odin/resin/news/data/news_front_blacklist.txt"
            conn.on('ready', function () {
                console.log('Client :: ready');
                let data = '';
                conn.exec(command, function(err, stream) {
                    if (err) throw err;
                    stream.on ('close', function (code, signal) {
                        conn.end();
                    }).on ('data', function(chunk) {
                       data += chunk;
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
            console.log('hee end')
        });
    }
}

let mechine = 
`resinhub01.news.sjs.ted	10.144.13.81
resinhub01.news.zw.ted	10.146.109.123
resinhub02.news.sjs.ted	10.144.39.118
resinhub02.news.zw.ted	10.146.116.85
resinhub03.news.sjs.ted	10.144.62.42
resinhub03.news.zw.ted	10.152.72.36
resinhub04.news.sjs.ted	10.144.69.125
resinhub04.news.zw.ted	10.152.72.37`

let mechines = [];
for (let m of mechine.split('\n')) {
    if (m.indexOf('\t') != -1) {
        mechines.push(m.substring(0 ,m.lastIndexOf('\t')));
    }
}
console.log(mechines);

for (let m of mechines) {
    let sshcon = new SSH(m);
    let sum = 0;
    sshcon.getLog().then (data => {
        console.log(`${m}:  ${data}`);
    }).catch (e => {
        console.log(e);
    });
}


// for (let dsc of ['djt']) {
//     console.log(dsc);
//     for (let i=1; i<=50; i++) {
//         let sshcon = new SSH(`resinhub${i>=10 ? i: '0' + i}.wap.${dsc}.ted`, '_10')
//         sshcon.getLog().then (data => {
//             console.log(`resinhub${i>=10 ? i: '0' + i}.wap.${dsc}.ted ${data}`);
//         });
//     }
// }


