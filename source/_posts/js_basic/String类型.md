---
title: 犀牛-String类型
permalink: string
date: "2018/11/12"
mathjax: true
tags: 
- JS 
- String
- 犀牛书
categories: JS
---
# String类型

## 1. 描述

1. 属性：length，返回字符串中的字符数
2. 使用new时返回一个String对象，不带new则是转换参数为字符串
3. JavaScript的字符串是不可变的，String类的所有方法`（包括数组方法）`都不允许修改某个字符串的内容，这些方法都是返回一个全新的字符串
4. String是类数组；可以使用`s[1]`的方式代替`s.charAt(1)`,也可以在字符串上使用for/in来遍历每一个字符

    ```js
    new String("abcd") ->
    0: "a"
    1: "b"
    2: "c"
    3: "d"
    length: 4
    __proto__: String
    [[PrimitiveValue]]: "abcd"

    ```

## 2. 方法

### String.length 字符串长度

描述：一个只读属性，最后一个字符的索引都是string.length-1;该属性`不可枚举，不可配置，不可写`

### String.charAt() 取得字符串中第n个字符

概要：`string.charAt(n)`  
参数：n：希望返回的字符在字符串string中的索引  
返回：字符串string的第n个字符  
描述：返回字符串中的第n个字符。如果n不在0~string.length-1之间，这个方法将返回一个空的字符串。

### String.charCodeAt() 取得字符串中第n个字符的编码

概要：`string.charCodeAt(n)`  
参数：n：待返回编码在字符串string中的索引  
返回：返回第n个字符的Unicode编码，一个16位的整数，值在0~65535之间  
描述：与charAt()类似，如果n值不在有效范围内，那么该方法返回NaN

### String.concat() 连接字符串

概要：`string.concat(value, ...)`  
描述：concat将每一个参数都转化为字符串，并按照它们的顺序添加到string的末尾，返回最终的连接结果字符串，注意string本身是不会有变化的；不过一般使用+号来代替此方法

### String.fromCharCode() 从字符编码创建字符

概要：`String.fromCharCode(c1, c2...)`  
参数：c1，c2...：指定待创建的字符串中字符的Unicode编码，一个或多个整数  
返回：一个新的字符串，内容为指定编码对应的字符相加  
描述：其实fromCharCode是一个String构造函数的属性，不是String对象或字符串的方法；该方法和charCodeAt相对应

### String.indexOf() 从头搜索字符串

概要：`string.indexOf(substring)` `string.indexOf(substring, start)`  
参数：
> substring：在string中搜索的字符串  
> start：可选整数参数；指定搜索的起始位置。省略该参数默认为0。如果为负数也可以理解为0，超出string长度，则永远找不到。

返回：substring在string中第一次出现时的第一个字符所在位置的下标，没有找到返回-1

### String.lastIndexOf() 从后面搜索字符串

描述：和indexOf相对立，从字符串末尾开始寻找匹配，找不到返回-1

### String.match() 找到一个或多个满足正则表达式的匹配结果

概要：`string.match(regexp)`  
参数：一个匹配模式的regexp对象。如果不是RegExp对象，那么它将传入RegExp构造函数转为RegExp对象  
返回：一个包含匹配结果的数组。取决于regexp是否使用了“g”属性

1. 有g：对字符串进行一次全局搜索，没有找到结果返回null；找到一个或多个匹配结果则返回一个数组`(不会包含index，input等属性和圆括号子表达式的信息，想获得这些信息请使用RegExp.exec())`
2. 没有g：只会执行一次匹配，没有结果返回null；有则会返回一个包含匹配结果和其信息的数组；该数组元素0位是匹配的字符串、剩下的元素为正则表达式中子表达式的匹配文本，同时还有两个额外的属性：index对应匹配文本在string中的开始位置，input属性则是对该string本身的引用

### String.replace() 替换匹配正则表达式的一个或多个字串

概要:`string.replace(regexp, replacement)`  
参数：  
> regexp：可以是直接查询的`字符串或者RegExp对象`(会转换，除了字符串)  
> replacement：一个`函数或者字符串`，再调用时生成替换文本

返回：一个新的字符串，匹配RegExp的地方替换为replacement  
描述：RegExp有没有g会影响替换的次数，有g将替换所有匹配的字符串，没有g只替换第一个匹配的字符串；regexp是字符串的话只能替换第一个匹配的字符串  
replacement如果是一个字符串，那么其中的`$数字`可以引用匹配的子表达式的文本

```javascript
$1,$2,...$99  匹配1~99个regexp中圆括号子表达式的文本
$&  匹配regexp字串
$` 匹配字串左边文本
$' 匹配字串右边文本
$$ 美元符号
```

replacement是函数，这个函数将在每一个匹配结果上调用`(调用次数==匹配次数)`，返回的字符串作为替换文本。传入函数的第一个参数是匹配该模式的字符串。接下来的参数是匹配字符串的子表达式，可能是0个或者多个。倒数第2个参数是整数表示匹配结果的位置，最后一个参数是string对象本身

### String.search() 根据正则表达式查找

概要:`string.search(regexp)`  
参数：一个regexp对象，不是则会转换为regexp对象  
返回：string中第一个匹配regexp的子串的位子，没有则返回-1  
描述：search不会执行全局匹配，会忽略g标志。同时也忽略regexp的lastIndex属性，总是从string的头部开始搜索

### String.slice() 提取一个子串

概要：`string.slice(start, end)`  
参数：
> start：切片开始的位置，如果为负数从尾部计算  
> end：可选，可以为负数，不指定则为length-1

返回：一个新的字符串，内容为从start开始到end结束的子串，但是不包含end位的字符  
描述：相比substring更为灵活，允许负数；相比于substr，后者使用一个位置和一个长度截取；和Array.slice很类似，就算可以负数，但是小于等于-length之后就会没有意义了，相当于在不存在的下标进行截取，返回空串，同样的正数过大也会失去意义

### String.split() 将一个字符串切分为由子串组成的数组

概要：`string.split(delimiter, limit)`
参数：
> delimiter：string切分处的`字符串或者正则表达式`  
> limit：可选的正数指定返回数组的最大长度，没有指定则不限制长度

返回：字符串组成的数组，通过delimiter切分string。  
描述：

1. 连续匹配的delimiter之间会产生空字符串；如果delimiter与字符串开头匹配，那么数组第一个元素是空串，相同的，如果末尾匹配，则数组最后一个元素是空串
2. 如果delimiter是空串或则匹配空串的正则表达式，则会将string中的每一个字符之间断开，返回数组长度等于string的长度(没有指定limit时)
3. 没有指定delimiter，那么返回的数组中只有一个没有切分的string元素
4. 返回的数组中是不会有delimiter切分字串的，但是如果delimiter是一个包含圆括号的正则表达式，那么匹配圆括号中的字串将会被返回

### String.substr() 提取一个子串`(不再是ECMAscript标准)`

概要：`string.substr(start, length)`
参数：
> start：开始的位子，如果是负数则从尾部开计  
> length：截取的长度，省略该值则一直截取到字符串末尾

返回：string的一部分的末尾

### String.substring() 提取一个子串

概要：`string.substring(from, to)`  
参数：
> from：一个非负整数，指定要提取的字串的第一个字符在string中的下标  
> to：一个非负整数，省略截取到string末尾

返回：一个新的字符串  
描述：

1. 如果from大于to会交换两个值的位置
2. 对于负数直接看做0

### String.toLocaleLowerCase() 转小写

概要：`string.toLocaleLowerCase()`  
返回：string的一个本地化小写副本，只有一小部分语言支持本地化小写映射，大部分情况下和toLowerCase()返回的内容一样

### String.toLocaleUpperCase()

### String.toLowerCase()

### String.toUpperCase()

### String.toString()

返回：string的原始字符串值，一般用不到
描述：在非String对象上调用报错

### String.trim() 去掉开头和结尾的空白字符

### String.valueOf() 返回对应的字符串

描述:`string.valueOf() === string //true`  
在非String对象上调用此方法报错

### String.localeCompare() 使用本地特定的顺序比较字符串

概要：`string.localeCompare(target)`  
参数：target：与string进行比较的字符串；使用区分地区的方法  
返回：一个表示比较结果的数字。`string<target` 返回负数  
描述：相比于大于和小于操作符使用Unicode编码比较字符串，localeCompare提供了一中根据默认本地排序来比较字符串的方法。具体实现由底层操作系统决定
