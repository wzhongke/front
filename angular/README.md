
# Angluar 学习笔记
angluara 在很多地方与 vue 的原理类似。

## 显示数据
可以通过把 HTML 模板中的控件绑定到 Angular 组件的属性来显示数据。

### 使用插值表达式显示组件属性
要使用插值表达式，就把组件的属性名包裹在双花括号里放进视图模板，如 {{myHero}}。
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secode-ng';
  myHero = 'Windstorm';
}
```

**一般来说，括号间的素材是一个模板表达式，Angular 先对它求值，再把它转换成字符串。**
```html
<!-- 还可以调用宿主的方法 -->
<!-- "The sum of 1 + 1 is not 4" -->
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>
```

在语法上，模板表达式与 JavaScript 很像。很多 JavaScript 表达式都是合法的模板表达式，但也有一些例外。
你不能使用那些具有或可能引发副作用的 JavaScript 表达式，包括：
- 赋值 (=, +=, -=, ...)
- new、typeof、instanceof 等操作符。
- 使用 ; 或 , 串联起来的表达式
- 自增和自减运算符：++ 和 --
- 一些 ES2015+ 版本的操作符

和 JavaScript 语法的其它显著差异包括：
- 不支持位运算，比如 | 和 &
- 新的模板表达式运算符，比如 |、?. 和 !。

### 内联模板还是模板文件
可以在两种地方存放组件模板。 你可以使用 template 属性把它定义为内联的，或者把模板定义在一个独立的 HTML 文件中， 再通过 @Component 装饰器中的 templateUrl 属性， 在组件元数据中把它链接到组件。
到底选择内联 HTML 还是独立 HTML 取决于个人喜好、具体状况和组织级策略。 上面的应用选择内联 HTML ，是因为模板很小，而且没有额外的 HTML 文件显得这个演示简单些。

### 使用 `ngFor` 显示数组
在模板中使用 `ngFor` 可以显示数组
```html
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero }}
    </li>
  </ul>
```

`<li>` 元素里的 `*ngFor` 是 Angular 的“迭代”指令。 它将 `<li>` 元素及其子级标记为“迭代模板”.

### 通过 `ngIf` 进行条件显示
Angular 的 ngIf 指令会根据一个布尔条件来显示或移除一个元素.
```html
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```

## 模板语法
Angular 应用管理着用户之所见和所为，并通过 Component 类的实例（组件）和面向用户的模板交互来实现这一点。

### 模板中的 HTML
HTML 是 Angular 的模板语言，HTML 的语法都是有效的。 但是 `<script>` 标签是被禁用的，目的是为了防止注入。

### 表达式上下文
典型的表达式上下文就是这个组件实例，它是各种绑定值的来源。 在下面的代码片段中，双花括号中的 recommended 和引号中的 itemImageUrl2 所引用的都是 AppComponent 中的属性。
表达式的上下文可以包括组件之外的对象。 比如模板输入变量 (let customer)和模板引用变量(#customerInput)就是备选的上下文对象之一。

```html
<h4>{{recommended}}</h4>
<img [src]="itemImageUrl2">
<ul>
  <li *ngFor="let customer of customers">{{customer.name}}</li>
</ul>
<label>Type something:
  <input #customerInput>{{customerInput.value}}
</label>
```

表达式中的上下文变量是由模板变量、指令的上下文变量（如果有）和组件的成员叠加而成的。 
**如果你要引用的变量名存在于一个以上的命名空间中，那么，模板变量是最优先的，其次是指令的上下文变量，最后是组件的成员。**

**模板表达式不能引用全局命名空间中的任何东西，比如 window 或 document。它们也不能调用 console.log 或 Math.max。 它们只能引用表达式上下文中的成员。**

### 模板语句
模板语句用来响应由绑定目标（如 HTML 元素、组件或指令）触发的事件。

语句上下文可以引用模板自身上下文中的属性。 在下面的例子中，就把模板的 $event 对象、模板输入变量 (let hero)和模板引用变量 (#heroForm)传给了组件中的一个事件处理器方法。

```html
<button (click)="onSave($event)">Save</button>
<button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
```

### 数据绑定
绑定的类型可以根据数据流的方向分成三类： 从数据源到视图、从视图到数据源以及双向的从视图到数据源再到视图。

1. 从数据源到视图
绑定类型有： 插值、属性、Attribute、CSS 类样式
```
{{expression}}
[target]="expression"
bind-target="expression"
```

2. 从视图到数据源
绑定的类型有：事件
```
(target)="statement"
on-target="statement"
```

3. 双向绑定
```
[(target)]="expression"
bindon-target="expression"
```

**attribute 初始化 DOM property，然后它们的任务就完成了。property 的值可以改变；attribute 的值不能改变。**

