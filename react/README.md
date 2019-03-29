---
title: react 
date: '2018-08-06 15:45:00'
---

# 安装
安装 react：
```bash
npm install -g create-react-app
```

创建新的工程：
```bash
create-react-app myapp
```


当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中的状态数据就能够更方便地交流共享了。


React will replace any existing content inside DOM containers.

The React team primarily recommends these solutions:

If you’re learning React or creating a new single-page app, use Create React App.
If you’re building a server-rendered website with Node.js, try Next.js.
If you’re building a static content-oriented website, try Gatsby.
If you’re building a component library or integrating with an existing codebase, try More Flexible Toolchains.

# CDN 链接地址
开发版本：
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

生产环境版本：
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```
# Hello World
最简单的 React 例子如下：
```js
ReactDOM.render(
    <h1>Hello, World!</h1>
    document.getElementById('root')
);
```

# Rendering Elements
通过将 react 元素和一个根 DOM 元素传入 `ReactDOM.render()` 来渲染页面：
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root')); 
```

React 元素是不可修改的。一旦创建一个元素，那么它的孩子或者属性都不能被修改。

# Components and Props
组件可以将 UI 分割成独立的，可复用的部分。

从概念上看，组件跟 JavaScript 的函数很像。组件接受任意的参数（"props"），并且返回一个描述如何在屏幕上展示的 react 元素。

## 函数和类组件
JavaScript 函数是定义一个组件的最简单的方式：
```js
function Welcome (props) {
    return <h1>Hello, {props.name}</h1>;
}
```

也可以通过 ES6 `class` 定义一个组件：
```js
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {props.name}</h1>;
    }
}
```

以上两个组件是等价的。

## 渲染组件
通过如下的方式渲染上面定义的组件。渲染时，react 会将元素上定义的属性以对象的方式传到组件中，对象的名称是 `props`.
```js
// React 使用参数{name: 'Sara'}调用 `Welcome` 组件
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**所有的react组件都不能修改他们的`props`**

# state and lifecycle
state 和 `props` 类似，但是 state 是组件私有的，是完全被组件控制的。使用 state，必须是 ES6 的 `class` 类型.
```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

每次更新，`render` 方法都会被调用。但是，只要我们将 `<Clock />` 渲染到 DOM 节点中，就只使用一个 `Clock` 实例。这让我们可以使用其他的特性，如本地状态和生命周期钩子。

## 增加本地状态
将通过如下三步将 `props` 转换成本地的状态：
1. 将 `this.props.date` 替换为 `this.state.date`
    ```js
    class Clock extends React.Component {
        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
    }
    ```

2. 增加构造器，初始化 `this.state`:
    ```js
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
    }
    ```

3. 将 `data` 属性从 `<Clock/>` 中移除：
    ```js
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
    ```

## 增加生命周期方法

生命周期方法                   | 调用时间
:----------------------------|:-----------------------
`componentDidMount()`        | 组件第一次渲染时调用
`componentWillUnmount()`     | 组件被移除时调用

在 `Clock` 组件中增加生命周期方法：
```js
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount () {
        // 与数据流无关的属性，不要放到 state 中
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick () {
        // 更新数据
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
```

## 正确使用 state

1. 不能直接更改 state
    ```js
    // Wrong
    this.state.comment = 'Hello';
    // Correct
    this.setState({comment: 'Hello'});
    ```

2. state 更新可能是异步的。为了提高性能，react 可能会将多个 `setState()` 调用合成为一个更新。
   因为 `this.props` 和 `this.state` 可能会异步更新，所以不能依赖于他们之前的 state 计算下一个 state
    ```js
    // Wrong
    this.setState({
        counter: this.state.counter + this.props.increment,
    });
    // Correct
    this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
    }));
    ```

3. state 更新会被合并

# 事件
可以通过如下方法为元素绑定事件：
```js
handleClick = () => {
    console.log('this is:', this);
}

render() {
    return (
        <button onClick={this.handleClick}>
        Click me
        </button>
    );
}

// 或者
render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <button onClick={(e) => this.handleClick(e)}>
        Click me
        </button>
    );
}
```

# 条件渲染
React 中的条件渲染同 JavaScript 中的条件语句类似。React 使用 JavaScript 的 `if` 或者 条件表达式来根据当前的 state 创建元素。
```js
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

## inline if
```js
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
            <h2>
            You have {unreadMessages.length} unread messages.
            </h2>
        }
        </div>
    );
}
```

其原理就是使用 JavaScript 的 `true && expression` 的方式来实现一个简单的 if 条件。

## inline  if-else
可以使用 JavaScript 的条件表达式来实现 `if-else`
```js
render () {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn? (
                <LogoutButton onClick={this.handleLogoutClick} />
            ): (
                <LoginButton onClick={this.handleLoginClick} />
            )}
        </div>
    )
}
```

## 返回 null 来阻止渲染
在组件中使用 `null` 作为返回值，代替渲染的输出，能够使得该组件不会被渲染。
```js
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
        Warning!
        </div>
    );
}
```

组件的 `render` 方法返回 `null`，也依然会调用组件的生命周期的方法。

# Lists and Keys
对于数组，我们可以像 JavaScript 中那样遍历，然后组合成列表：
```js
const numbers = [1,2,3,4]
const listItems = numbers.map((number) => {
    <li>{number}</li>
})

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);
```

当运行这段代码时，会有一个警告：对于列表项目应该提供一个 key。
`key` 是一个特殊的字符串属性，用来唯一标识列表中的项目，需要在创建列表时提供。
```jsx
<li key={number.toString()}>
    {number}
</li>
```

`key` 只有在遍历数组的上下文环境中才有效：
```jsx
/** 错误实例 */
function ListItem(props) {
    const value = props.value;
    return (
        // Wrong! There is no need to specify the key here:
        <li key={value.toString()}>
        {value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Wrong! The key should have been specified here:
        <ListItem value={number} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
}

/** 正确实例 */
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                value={number} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
}
```

# Forms
`input`, `textarea` 等用户可能会修改他们的值，使得他们的值超出 state 的控制。因此，需要一些其他的方式来更新 state 中的值：
```jsx
class NameForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value : ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {
        alert ('a name was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
```

同 vue 相比，显得略微笨拙


