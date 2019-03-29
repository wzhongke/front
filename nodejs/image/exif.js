const exif = require('exif-js');

exif.getData('D:\\xshell\\1497686774954_rotated.jpg', function() {
    console.log(exif.getAllTags(this))
})