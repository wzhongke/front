
let fs = require('fs');
let data = '';
let util = require('util')

function readFile (path) {
    return new Promise(function (resolve, reject) {
        let readerStream = fs.createReadStream(path);
        let data = '';
        readerStream.setEncoding('UTF8')
        readerStream.on('data', function(chunk) {
            data += chunk;
        })
        readerStream.on('end', function () {
            resolve(data);
        })
    });
}

readFile('E://hospital.txt')
    .then(result => {
        let writerStream = fs.createWriteStream('sql4.sql');
        let datas = result.trim().split('\r\n');
        let update = "INSERT INTO `diamond`.`data_item` (`key`, `value`, `groupDataId`, `note`, `updateTime`, `valid`, `operator`, `createTime`) VALUES ("
        for (let d of datas) { 
            if (d.startsWith('#') || d.indexOf("=") === -1) {
                continue;
            }
            console.log(d);
            let ds = d.split("=");
            let insert;
            if (ds.length == 1) {
                insert = update + `'${ds[0].trim()}', '', '2', '', now(), 'true', '', now());\n`
            } else {
                insert = update + `'${ds[0].trim()}', '${ds[1].trim()}', '2', '', now(), 'true', '', now());\n`
            }
            writerStream.write(insert);
        }
                      
        writerStream.end()
    })