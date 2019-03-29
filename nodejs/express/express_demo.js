
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false })
 // 静态文件
 app.use(express.static('static'));

// get 请求
app.get('/', function(req, res){
    res.send('Hello World');
});

// post 请求
app.post('/', function(req, res) {
    res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
 });

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 });

 app.get('/test', function(req, res) {   
    console.log("/test GET 请求");
    res.send('正则匹配');
 });

 app.get('/index.html', function(req, res) {
     res.sendFile(__dirname + '/index.html');
 });

 app.get('/process_get', function(req, res) {
    var response = {
        'first_name' : req.query.first_name,
        'last_name' : req.query.last_name
    }
    res.end(JSON.stringify(response));
 });

 app.post('/process_get', urlencodedParser, function(req, res) {
    var response = {
        'first_name' : req.body.first_name,
        'last_name' : req.body.last_name
    }
    res.end(JSON.stringify(response));
 });

 app.get('/file.html', function (req, res) {
    res.sendFile( __dirname + "/" + "file.html" );
 })

// 文件上传
let multer = require('multer');
let fs = require('fs');
app.use(bodyParser.urlencoded({entended: false}));
app.use(multer({dest: '/tem/'}).array('image'));

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);

    let des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File Upload successfully!',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.type('application/json;charset=utf8');
            res.end(JSON.stringify(response));
        })
    })
})

let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});