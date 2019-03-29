let events = require('events')

let event = new events.EventEmitter();

function listener1() {
    console.log('listener1 事件触发');
}

/**
 * EventEmitter 的每个事件由一个事件名和若干个参数组成
 * 事件名是表达一定语义的字符串
 * EventEmitter 支持若干个事件监听器。当事件触发时，注册到这个事件的监听器会被依次调用，事件参数作为回调函数传递
 */
event.on('some_event', listener1)

event.on('some_event', function (arg1, arg2) {
    console.log('listener2', arg1, arg2)
})

/**
 * 为指定事件添加一个监听器
 */
event.addListener('some_event', function () {
    console.log('listener3, addListener')
})

event.addListener('some_event', function () {
    console.log('listener3, addListener')
})

/**
 * 设置最大监听器数目
 */
event.setMaxListeners(3);

/**
 * 为事件注册一个单次监听器，每个监听器最多只会触发一次，触发后解除该监听器
 */
event.once('some_event', function() {
    console.log('listener4')
})



event.emit('some_event', 'arg1', 'arg2');

/**
 * 根据事件以及其函数移除监听器
 */
event.removeListener('some_event', listener1);
event.emit('some_event', 'arg1', 'arg2');

/**
 * 移除所有的监听器
 */
event.removeAllListeners();

