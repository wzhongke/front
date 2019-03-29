let mysql = require('mysql');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'wang',
    password: 'wang',
    database: 'mysql'
});

connection.connect();

// 查询
connection.query('SELECT * FROM output_new limit 10', function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    for (r in result) {
        console.log(result[r].data);
    }
    console.log('------------------------------------------------------------\n\n');
});

// 插入
let addSql = 'INSERT INTO tablestatus (tablename, code, requestId, address, user, create_time) VALUES (?, ?, ?, ?, ?, ?)';
let addSqlParams = ['tablename', 2, '832_123143133', 'address', 'user', '2017-05-27 15:29:32'];

connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
})

var delSql = 'DELETE FROM tablestatus where id=539714';
// 删除
connection.query(delSql, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
