
let str = 'this is test uuid:13243400432221132\tkadfa';
let group = str.match(/uuid:(.*?)\t/);
console.log(group[1])