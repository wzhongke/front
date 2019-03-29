---
title: css 学习笔记
date: 2018-02-04 21:28:00
categories: ["css", "front"]
draft: true
---


css 含有的唯一的注释是 `/* this is a comment */`

Media Query 使用方式如下（and 表示与，not 表示相反，逗号表示或）
```css
@media (orientation: land scape) and (min-device-width: 800px) {
    h1 {color:black;}
}
/* not 只能用在开始 */
@media not (orientation: land scape) and (min-device-width: 800px) {
    h1 {color:red;}
}
```

老的浏览器不支持新的标签，而不能被选择器选择。通过JavaScript创建DOM元素，告诉浏览器该DOM元素存在，就可以为该元素添加样式。
```javascript
document.createElement('main');
```

### feature queries
根据是否支持特性来定制样式，feature query 可以和 media query 嵌套使用。
```css
@supports (display: flex) {
    @media screen {
        /* screen flexbox styles go here */
    }
}
```

# 选择器
CSS的一个主要优势就是可以将样式集合用于一系列的元素。

## 分组选择器
分组选择器可以将相同的样式应用于不同的元素，而且选择器的个数没有限制：
```css
h1, h2, h3 {
    color: black;
}
```

如下的分组是相等的：
```css
/* group 1 */
h1 {color: silver; background: white;} 
h2 {color: silver; background: gray;} 
h3 {color: white; background: gray;} 
h4 {color: silver; background: white;} 
b {color: gray; background: white;}
/* group 2 */
h1, h2, h4 {color: silver;} 
h2, h3 {background: gray;} 
h1, h4, b {background: white;} 
h3 {color: white;}
b {color: gray;}
/* group 3 */
h1, h4 {color: silver; background: white;} 
h2 {color: silver;}
h3 {color: white;}
h2, h3 {background: gray;}
b {color: gray; background: white;}
```

**通配符\***可以匹配其作用范围内的所有元素。 

## class 选择器
class 选择器是一个点和class名的组合：
```css
.warning {
    font-weight: bold; 
    color: red;
}
```

所有 class 属性是 `warning` 的元素都会被赋予以上的样式。以下例子只对`class`属性是 `warning` 的 `p` 标签生效 ：
```css
p.warning {
    font-weight: bold; 
    color: red;
}
```

当一个元素`p`含有多个`class`属性时，可以用如下方式选择（`class` 的值是以空格分割的，值的先后顺序不影响选择）：
```css
/* 所有class属性同时含有 warning和help 的元素 */
.warning.help {background: red;}
/* 所有class属性同时含有 warning和help 的p元素 */
p.warning.help {background: red;}
```

## id 选择器 
ID 在一个文档中可以唯一标识一个元素，其选择器是 井号加上ID值，如下：
```css
#lead-para {font-weight: bold;}
```

ID 应该是在文档中唯一的，但是对于具有相同的ID值的多个元素，选择器样式都会生效。
**对多个元素使用class选择器，对唯一元素使用id选择器，id选择器的优先级比class高**

## 属性选择器
class和id选择器只是属性选择器的特例。属性选择器有四种类型：简单属性选择器，完全属性值选择器，部分属性值选择器 和 特定属性选择器

### 简单属性选择器
简单属性选择器只是根据元素是否含有某个属性来选择，而不考虑它的属性值。
```css
/* 所有含有class属性的h1 */
h1[class]{color: red;}
/* 所有含有title属性的元素 */
*[title] {font-weight: bold;}
/* 所有含有href，并且含有title属性的a */
a[href][title] {font-weight: bold;}
```

### 完全属性值选择器
完全属性值选择器是根据元素的属性值完全等于某个值来选择的。
```css
/* 所有href="http://www.w3.org/", 并且title="W3C Home"的元素  */
a[href="http://www.w3.org/"][title="W3C Home"] {font-size: 200%;}
```
### 部分属性值选择器
部分属性值选择器是根据元素的属性值满足特定条件来选择的，可以归纳为如下表格：

选择器	             |  描述
:------------------|:----------------
[attribute]	       | 用于选取带有指定属性的元素。
[attribute=value]  | 用于选取带有指定属性和值的元素。
[attribute~=value] | 用于选取属性值中包含**指定词汇**的元素。
[attribute|=value] | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[attribute^=value] | 匹配属性值以指定值开头的每个元素。
[attribute$=value] | 匹配属性值以指定值结尾的每个元素。
[attribute*=value] | 匹配属性值中包含指定值的每个元素。

```css
/* 可以选取 lang 属性值是 en 或者以 en- 开始的元素
 如: <p lang="en"></p> <p lang="en-us"></p> */
*[lang|="en"] {color: white;}

/* 选取属性中包含某个值的元素，该值是在以空格分割的属性值的集合中 
 如 <p class="urgent warning"></p> 
 以下两个选择器等价 */
p[class~="warning"] {font-weight: bold;}
p.warning {font-weight: bold;}

/* 选取属性值中包含某个值的元素 */
input[title*="format"] {background-color: #dedede;}

/* 选取属性值以某个值开始的元素 */
a[href^="mailto:"] {font-style: italic;}

/* 选取属性值以某个值结束的元素 */
a[href$=".pdf"] {font-weight: bold;}

/* 对属性值的大小写不敏感 
 可以匹配    
    <a href="test.pdf">pdf</a>
    <a href="test.PDF">PDF</a>*/
a[href$=".pdf"i] {font-weight: bold;}

```

## 后代选择器
```css
/* 选择所有h1的em后代元素，而且不管em的深度 */
h1 em {color: gray;}
/* 子选择器：只选择 h1 元素的 strong 子元素 */
h1 > strong {color: red;}
/* 相邻兄弟元素：选择紧跟着h1的p元素，h1和p有相同的父元素 */
h1 + p {margin-top: 0;}
/* 兄弟选择器：选择 h2 之后的 ol元素，h2 和 ol 有相同的父元素 */
h2 ~ ol {font-style: italic;}
html > body table + ul{margin-top: 1.5em;}
```

## 伪类选择器
伪类选择器可以根据元素的状态或者文档的状态不同赋予不同的样式。**伪类选择器是应用在当前选择器上的，`p:first-child`是指`p`是第一个元素，而不是`p`的第一个元素**

### 结构化伪类选择器

```css
/* :root 伪类选择器 ：选择文档的根元素，HTML中就是html根元素*/
:root {border: 10px dotted gray;}
body {border: 10px solid black;}

/* :empty 空元素选择：没有任何内容（空格也算内容）的元素.
 <input></input> <img/> 也能匹配到 *:empty */
p:empty {display: none;}

/* :only-child 唯一子元素选择：该元素是其父元素的唯一子元素 */
img:only-child {border: 1px solid black;}
/* 使用后代选择器时，:only-child 只要该元素是其父元素唯一子元素即可
<a href='test'><span><img src="test"/></span><span>test</span></a> 也可以匹配 */
a img:only-child {border: 1px solid black;}

/* :only-of-type 唯一类型，img是p的子元素，且是p子元素中唯一的img元素 */
p > img:only-of-type {float: right; margin: 20px;}

/* :first-child 第一个子元素选择器：该元素是其父元素的第一个孩子元素 */
p:first-child {font-weight: bold;}

/* :last-child 最后一个子元素选择器：该元素是其父元素的最后一个孩子元素 */
p:last-child {font-weight: bold;}

/* only-child 该元素是其父元素的唯一子元素 */
p:only-child {color: red;} 
p:first-child:last-child {background-color: red;}

/* :first-of-type 第一个类型选择器：该元素是父元素的第一个该种类型的元素 */
tr:first-of-type {border-left: 1px solid red;}

/* :last-of-type 最后一个类型选择器：该元素是父元素的最后一个该种类型的元素 */
tr:first-of-type {border-left: 1px solid red;}

/* only-of-type 唯一类型选择器：该元素是父元素中唯一一个该类型的元素 */
table:only-of-type{color: red;} 
table:first-of-type:last-of-type {background: red;}

/* :nth-child() 第n个子元素选择器：该元素是其父元素的第n个子元素 下标从1开始*/
p:nth-child(1) {font-weight: bold;}
/* 还可以使用 an + b 的形式循环定义，每隔三个选择一个元素. n从0开始。下例子中会选择 1，4，7，10... */
ul>li:nth-child(3n+1) {font-weight: bold;}
/* 奇数元素选择，偶数元素选择的简化版 */
ul>li:nth-child(odd) {font-weight: bold;}
ul>li:nth-child(even)
ul>li:nth-last-child(2n+1) {background: silver;}

/* 与nth-child 对应的类型选择器 */
p > a:nth-of-type(even) {background: blue; color: white;}
p > a:nth-last-of-type(even) {background: blue; color: white;}
```

### 动态伪类选择器

1. 超链接的伪类
    `:link` 未被访问的超链接，标签`<a>`中含有`href`属性
    `:visited` 已经被访问的超链接

2. 动作伪类
    `:focus` 获取到输入焦点的元素
    `:hover` 鼠标悬停的元素
    `:active` 被用户触发的元素，比如一个用户使用鼠标按下去期间的元素

```css
a:link {color: navy;}
a:visited {color: gray;} 
input:focus {color: orange;} 
a:hover {color: red;} 
a:active {color: yellow;}
```

### UI 伪类
根据用户选择的不同状态，展现不同样式，一般是可交互类元素。

name        | 描述
:-----------|:-------------
:enabled    | 可以输入的元素
:disabled   | 不可以更改的元素
:checked    | 被选择的单选框或复选框
:indeterminate | 单选框或复选框既不是 checked 状态，也不是 unchecked 状态。一般是script修改DOM产生的
:default    | 默认被选中的单选框，复选框或者选项
:valid      | 用户的输入满足元素要求的有效性
:invalid    | 用户输入不满足元素要求的有效性
:in-range   | 用户的输入在最小和最大值之内
:out-of-range | 用户的输入在最小和最大值之外
:required   | 输入不能为空
:optional   | 输入可以为空
:read-write | 用户可以输入的元素
:read-only  | 不能输入的元素

```css
:enabled {font-weight: bold;} 
:disabled {opacity: 0.5;}

:checked {background: silver;} 
:indeterminate {border: red;}

/* 在HTML中，对checkbox和radio能够修改的样式有限，可以修改其label标签 */
input[type="checkbox"]:checked + label { 
    color: red;
    font-style: italic;
}

input:required { border: 1px solid #f00;} 
input:optional { border: 1px solid #ccc;}
input:not([required]) { border: 1px solid #ccc;}

input[type="email"]:focus { 
    background-position: 100% 50%; 
    background-repeat: no-repeat;
} 
input[type="email"]:focus:invalid {
    background-image: url(warning.jpg); 
}
input[type="email"]:focus:valid { 
    background-image: url(checkmark.jpg);
}

input[type="number"]:focus { 
    background-position: 100% 50%; 
    background-repeat: no-repeat;
} 
input[type="number"]:focus:out-of-range {
    background-image: url(warning.jpg);
}
input[type="number"]:focus:in-range { 
    background-image: url(checkmark.jpg);
}
```

### `:target` 伪类
`:target` 选择的是页面内的锚点。即URL最后`#`之后的值是页面内某元素的id。

```css
*:target {border-left: 5px solid gray; }
```

### `:not()` 反向选择伪类
`:not()` 可以选择不包含括号中内容的元素，但是括号中只能包含简单的选择器，不支持父类或者祖先等复合选择。
```css
*.link:not(li):not(p) {font-style: italic;}
```

## 伪元素选择器
伪元素在Document中插入虚构的元素来达到特定的效果。**伪元素选择需要放到选择器的最后**
`::first-letter ::first-line` 只能用在`display:block`的元素上

1. 将首字母放大
    ```css
    /* 将第一段的首字母放大 */
    p:first-of-type::first-letter {font-size: 200%;}
    ```
2. 选择第一段
    ```css
    p::first-line { font-size: 150%; color: purple;}
    ```
3. 在元素之前或之后创建内容
    ```css
    /* h2标签开始处，插入content中的内容 */
    h2::before {content: "[["; color: silver;}

    /* h2标签结尾处，插入content中的内容 */
    h2::after{content:"]]"; color: silver;}
    ```

# 选择器的特征和级联
选择器的优先值可以用四部分来表示：0,0,0,0，它的值有以下方式决定：
- 对于每个ID选择器，用 0,1,0,0 表示
- 对于每个类选择器，属性选择器，伪类选择器，用 0,0,1,0 表示
- 对于每个元素选择器，伪元素选择器，用 0,0,0,1 表示
- 对于内部样式，用 1,0,0,0 表示
- 通配符是 0,0,0,0
- 继承而来的属性没有值，优先级最低


```css
html > body table tr[id="totals"] td ul > li {color: maroon;} /* 0,0,1,7 */
tr#totals {color:black;} /* 0,1,0,1 */
/* 通配符是 0,0,0,0 */
* {color: gray;} /* 0,0,0,0 */
/* !important 表示优先级最高，用在样式的最后，只对一个样式起作用 */
p.light {color: yellow; font: smaller Times, serif !important;}
```

## 级联规则
级联规则如下：
1. 找到所有适用于该元素的声明
2. 根据明确定义的权重对适用于该元素的声明排序，具有 `!important` 的规则比没有的高。
3. 根据来源对适用于该元素的声明排序，作者的样式比阅读者的样式优先级高，阅读者的 `important` 样式优先级最高，作者和阅读者的样式比浏览器的默认样式高。
4. 根据元素的优先值进行排序
5. 如果前4个排序的优先级相同，则根据先后出现的顺序排序，最后出现的优先级高。

对于`a`标签的伪类推荐顺序如下： link-visited-focus-hover-active
```css
a:link {color: blue;} 
a:visited {color: purple;} 
a:focus {color: green;}
a:hover {color: red;} 
a:active {color: orange;}
```

# 距离
长度单元可以分为两种：绝度长度单元和相对长度单元。

## 绝对长度单元
绝对长度单元有如下7种，括号中为css属性值的缩写形式：
1. Inches--英寸(in)
2. Centimeters--厘米(cm)  1in = 2.54cm
3. Millimeters--毫米(mm)  1cm = 10mm
4. Quarter-millimeters—-25毫米(q)
5. Points--点(pt) 一般来说 1in = 72pt
6. Picas--12点(pc)  1pt = 12pc
7. Pixels--像素

## 分辨率单元
随着响应式布局的出现，3种描述分辨率的新类型也随之出现：
1. Dots per inch -- 每英寸的点数 (dpi)
2. Dots per centimeters -- 每厘米的点数 (dpcm)
3. Dots per pixel uni -- 每像素的点数 (dppx)

这三种分辨率类型一般用于媒体相关。
```css
@media (min-resolution: 500dpi) { 
    /* rules go here */
}
```

## 相对距离
`em` 是以当前元素内字体大小为基数的，1em等于该元素中小写字母m的宽度。
`ex` 是以小写字母x的高度为基数的，不同字体的x高度不同，也会导致`ex`单位的变化。
`rem` 是以当前文档的root元素，也就是html元素字体大小为基数的。
```html
<style>
h1 {font-size: 24px;}
h2 {font-size: 18px;}
p {font-size: 12px;}
h1, h2, p {margin-left: 1em;} 
small {font-size: 0.8em;}
</style>

<h1>Left margin = <small>24 pixels</small></h1> 
<h2>Left margin = <small>18 pixels</small></h2>
<p>Left margin = <small>12 pixels</small></p>
```

## 视窗相对距离
1. Viewport width unit (vw)：1vm 是整个视窗宽度的1/100. 如果视窗宽度是975px，那么1vm=9.75px
2. Viewport height unit (vh)：1vh 是整个视窗高度的1/100.
3. Viewport minimum unit (vmin)：取 1vm 和 1vh 的最小值
4. Viewport maximum unit (vmax): 取 1vm 和 1vh 的最大值

## 计算 `calc`
可以通过 `calc` 来实现简单的 加减乘除 的计算。该方式的兼容性并不好。
```css
p {width: calc(90% - 2em);}
```

## 使用属性 `attr()`
在css中，可以使用`attr()`将HTML中的属性值提出来放到样式中：
```css
p::before {content: "[" attr(class) "]";}
```

## RGB 和 RGBa
RGB是将不同程度的红绿蓝三种颜色组合起来形成的各种各样的颜色。在css中，用`rgb(red,green,blue)`来表示各种不同程度的组合。其中三个参数的取值可以是0-255之间的整数，也可以是0%-100%之间的百分比（可以是小数），但不能是两种方式的混合。
```css
p{color:rgb(100%,0%,100%);}
p{color:rgb(255,0,255);}
```

RGBa是在RGB之后加一个透明度的参数如：`rgba(255,0,255,0.5)`. 透明度的取值是在0-1之间。

16进制的颜色是用`#RRGGBB`表示的，`RR`是rgb中red的十六进制表示形式。

`color:transparent` 表示完全透明。
`currentColor` 表示当前元素的颜色。

```css
main {color: gray; border-color: currentColor;}
```

# 字体 Fonts
如果使用非广泛应用字体的，可以使用`@font-face`来引入自定义的字体：
```css
@font-face {
    font-family: "SwitzeraADF";
    /* 使用逗号分隔加载两个字体，format指明了该字体文件的格式，如果客户端不支持，那么就不下载 */
    src: url("SwitzeraADF-Regular.otf") format("opentype"),
        url("/fonts/SwitzeraADF-Regular.otf");
}
/* 可以定义缩写 */
@font-face {
    font-family: "H";
    src: local("Helvetica"), local("Helvetica Neue");
}
```

通过该方式引入的字体会在`SwitzeraADF`被引用时才会加载`SwitzeraADF-Regular.otf`文件，也就是所谓的懒加载。
`src`中的url是本服务器的地址，不能是其他站点的地址，否则会有跨域访问的限制。


# 文本属性
文本属性只对文本有影响。

首行文本缩进 `text-indent: <length>|<percentage>`，只能用于block的文本元素。

文本垂直对准 `vertical-align: baseline | sub | super | top | text-top | middle | bottom | text-bottom | <length> |<percentage>`，**该属性只能用于行内元素和可替换元素(比如img, input等)**
- sub：元素的基准线略低于父元素的基准线。
- super：元素的基准线略高于父元素的基准线
- `<percentage>`：将父元素的基线按行高的百分比调整

`word-spacing: <length>|normal` 调整空格分割的字间距，`<length>`一般为正值。
`letter-spacing: <length>|normal` 调整每个文本字母的间距

`text-transform: uppercase | lowercase | capitalize | none` 将文本根据属性设置转换为相应的大小写

`text-decoration: none| [underline‖overline‖line-through‖blink]` 它的值的意思已经比较明确，该声明是非继承的。
```css
p.emph {text-decoration: underline;} 
p.topper {text-decoration: overline;} 
p.old {text-decoration: line-through;}
p.annoy {text-decoration: blink;} 
p.plain {text-decoration: none;}
```

`text-shadow: none | [color] [<length> ‖ <length> <length> <length>?]#`
前两个长度定义了阴影距离文本的水平距离和垂直距离，第三个长度定义了
```css
p.shadow {color: white; text-shadow: 0 0 4px black;}
```

`white-space: normal | nowrap | pre | pre-wrap | pre-line`

value | 空格 | 换行（HTML中的`\n`） | 自动换行
:-----|:----|:-------------------|:----------
normal|合并  | 不换行              | 自动换行
nowrap|合并  | 不换行             | 不自动换行
pre   | 原样 | 换行                | 不自动换行
pre-wrap| 原样 | 换行 | 自动换行
pre-line | 合并 | 换行  | 自动换行

`tab-size: <length> | <integer>` 设置`\t`的长度。

# 展现形式
**改变元素的display属性，并不能改变元素本身的性质**。将p标签变为`display:inline-block`，并不能表明该p标签是行内元素。

## 块元素
经典的盒模型如下图：
![Alt text](images/盒模型.png)

`box-sizing: content-box | padding-box | border-box` 定义元素的width和height属性是以元素内容、padding还是margin的宽高为基准的。

`margin-left border-left padding-left width padding-right border-right margin-right` 这7个值加起来与父元素的width相等。
对于以下样式：
```css
div {width: 500px; border: 3px solid black;}
p.wide {margin-left: 10px; width: auto; margin-right: -50px; }
```

有如下计算公式：10px+0+0+540px+0+0−50px = 500px

`margin-top, border-top, padding-top, height, padding-bottom, border-bottom, margin-bottom` 是控制元素高度的属性。
如果`margin-top` 或者 `margin-bottom` 的值为 `auto`，那么它们的值是0，不会垂直居中