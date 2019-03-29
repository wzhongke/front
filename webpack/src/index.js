
import _ from 'lodash'; // Lodash, now imported by this script
import './style.css';
import MyImage from './page.png'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    let element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // 将图像添加到我们现有的 div。
    let myIcon = new Image();
    myIcon.src = MyImage;

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });
    element.appendChild(btn);
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());