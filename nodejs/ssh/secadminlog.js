const SSH = require('./ssh')

let dsc = '1.tc'
let command = `cat /search/odin/resin/log/stdout.log.2018042413 | grep 'secadminlog' |grep '119.109.143.191'`;
for (let i=1; i<=15; i++) {
    let sshcon = new SSH(`resinhub${i>=10 ? i: '0' + i}.web.${dsc}.ted`, '_1[012]')
    async function conn (conn) {
        let data = await conn.getLog(command);
        console.log(`resinhub${i>=10 ? i: '0' + i}.web.${dsc}.ted: ${data}`)
       
       
    }

   conn(sshcon)
}