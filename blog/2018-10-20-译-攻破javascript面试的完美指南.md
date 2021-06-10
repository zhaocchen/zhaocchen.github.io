---
slug: 译-攻破javascript面试的完美指南
title: 译-攻破javascript面试的完美指南
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: [javascript面试]
---

<!--truncate-->

攻破javascript面试的完美指南(开发者视角)

## 0. 前言

> 本文适合有一定js基础的前端开发人员阅读。原文是我google时无意发现的， 被一些知识点清晰的解析所打动， 决定翻译并记录下来。这个过程断续进行了两个月， 期间工作遇到的部分疑问也在文中找到了答案。这篇好的文章值得被推荐。

> 说明：因为外网的缘故， 原文中的一些视频连接并没有贴出。部分采用意译， 示例代码有少许差别。由于英文水平有限， 欢迎指出错误和批评。

  为了向你说明js面试的复杂性， 尝试给出代码段的输出。 

 console.log(2.0 == '2' == new Boolean(true) == '1')
 // true

十有八九的会给出false， 其实运行结果是true。

JavaScript是难的。 如果太聪明面试问类似问题， 我们也无可奈何。 但是什么是我们应该准备的呢？深入学习这十一个基本知识点，有助于你的JS面试。

## 1.熟悉js函数 ##

function 是JavaScript的精髓。不同于其他语言， 在js中， 一个函数可以分配成一个变量， 作为参数传递给其他函数也可以作为其他函数的返回值。

 console.log(square1(5));
 /* ... */
 function square1(n) { return n * n; }
 // 25

 console.log(square2(5)); 
 var square2 = function(n) { 
   return n * n; 
 }
 // square2 is not a function

JS中， 如果你把函数定义为变量， 变量的名字会被提升， 但是JS执行到它的定义才能被访问。

你可能在一些代码中频繁的见到如下代码。

 var simpleLibrary = function() {
    var simpleLibrary = {
         a: 0,
         b: 0,
         add: function(a, b) {
             return a + b;
         },
         subtract: function(a, b) {
             return a - b;   
         }
    }
   return simpleLibrary;
 }();

一个函数变量中变量和函数被分装， 可以避免全局变量污染。 从JQuery到Lodash的库采用这用技术提供$、_等

## 2.熟悉bind、apply和call ##

你可能在所有常用库中看到过这三个函数。它们允许局部套用， 我们可以把功能组合到不同的函数。一个优秀的js开发者可以随时告诉你关于这三个函数。

首先， 这些都是函数的原型方法去改变行为来实现一些功能。依据JS开发者Chad, 用途描述如下：

>当你想要函数在特定上下文中调用，使用.bind()， 很适用于事件。
>当你期望立即调用函数并修改上下文， 使用.call()或.apply()

### 一个应急调用实例

解释一下上述描述。假设你的数学老师要求你创建一个库并提交。你写了一个可以计算圆周长和面积的抽象库。

    var mathLib = {
        pi: 3.14,
        area: function(r) {
            return this.pi * r * r;
        },
        circumference: function(r) {
            return 2 * this.pi * r;
        },
    }

你把函数库提交给老师。现在是时间提交被称为计算库的代码。

    mathLib.area(2) // 12.56

当你提交第二个代码实例时， 你发现指南中老师要求你常量pi精确到小数点后5位数。你使用的是3.14， 不是3.14159。现在由于最后期限已过你没有机会提交库。 JS call函数可以帮你。 只需要调用你的代码如下。

    mathLib.area.call({pi: 3.14159}, 2) //    12.56636

加入你注意到call函数具有两个参数。

- 上下文
- 函数参数

在area函数中， 上下文是对象被关键词this代替。后面的参数作为函数参数被传递。 如下：

    var cylinder = {
        pi: 3.14,
        volume: function(r, h) {
            return this.pi * r * r * h;
        },
    }

call 调用如下：

    cylinder.volume.call({pi: 3.14159}, 2, 6); //    75.39815999999999

你看到这些函数的参数在上下文对象后被传递了吗？

Apply 是相似的， 除了函数参数以列表的方式被传递。

    cylinder.volume.apply({ pi: 3.14159 }, [2, 6]); //    75.39815999999999

你知道call的用法， apply用法反之亦然。 那么 ， bind的用法呢？

Bind函数的用途呢？它允许我们将上下文注入一个函数， 该函数返回一个带有更新上下文的新函数。这意味着， 这个变量将是用户提供的变量。当和JS事件一起运行时这是非常有用的。

> 你应该熟悉在JS中使用这三个函数去组合功能

## 3.熟悉js作用域(闭包) ##

JS作用域是一个潘多拉魔盒。数以百计的面试难题有这个概念构成。 有三种作用域：

- 全局作用域
- 本地/函数作用域
- 块级作用域(ES6引进)

全局作用域是我们通常做的那样：

 x = 10;
 function Foo() {
   console.log(x); // Prints 10
 }
 Foo()

函数作用域生效当你定义一个局部变量时：

 pi = 3.14;
 function circumference(radius) {    
      pi = 3.14159;
      console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
 }
 circumference(2);

ES16标准介绍过新块级作用域，限制一个变量作用域带给定的括号块。

    var a = 10;
    function Foo() {
        if (true) {
            let a = 4;
        }
        console.log(a);
    }
    Foo() //    10, 因为关键词key

函数和条件都被视为块。以上例子应该给出4，因为条件声明已经生效。但是ES6销毁了块级变量的作用域，作用域进入全局。

现在来自神奇的作用域。它可以通过闭包实现。JS闭包是一个返回另一个函数的函数。

如果有人要求你，实现输入一个字符串并逐次返回字符。如果给出一个新的字符串， 需要替换旧字符串。他被简单成为生成器。

    function generator(input) {
        var index = 0;
        return {
            next: function() {
                if (index < input.length) {
                    index += 1;
                    return input[index - 1];
                }
                return "";
            }
        }
    }
    var mygenerator = generator('hello');
    mygenerator.next(); //    "h"
    mygenerator.next(); //    "e"
    mygenerator = generator('word');
    mygenerator.next(); //    "w"

此时， 作用域扮演一个重要的角色。一个闭包是返回另一个函数和包裹数据的一个函数。以上字符串生成器便是一个闭包。index的值在多个函数调用中被保存。内部函数可以访问父级函数中定义的变量。这是一个不同的作用域。假设你在二级函数中定义了一个函数， 它可以访问所有父级变量。

> JS作用域会给你带来很多问题， 彻底理解它。

## 4.熟悉this(全局域、函数域、对象域) ##

JS中， 我们经常把函数和对象组合。假设在浏览器中， 在全局上下文中它涉及window对象。我的意思是， 如果你现在打开浏览器控制台输入this， 改制为true

    this === window //    true

当程序的上下文和作用域改变时， this随之发生改变。现在观察this在一个局部上下文中：

    function Foo() {
        console.log(this.a);
    }
    Foo() //    undefined
    var food = { a: 'hello--' };
    Foo.call(food); //    hello--

你可以尝试预测一下输出：

    function Roo(){
        console.log(this); // prints {}?
    }
    Roo() //    Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

不，你还没有获胜。因为this此时是一个全局对象。记住， 无论父级作用域是什么， 它都讲被它的孩子继承。因此， 它打印出了window对象。我们讨论的三个方法实际上用于设置this对象。

现在，this的最后一个类型。在对象中的this, 如下：

    var person = {
        name: 'Tom',
        age: 26,
        get identity() {
            return { 
                who: this.name,
                howOld: this.age
            }
        }
    }

我仅仅使用getter语法， 它是一个可以作为变量调用的函数。

    person.identity; //    {who: "Tom", howOld: 26}

因此， 这实际是对象自己。this正如我们前面所提到的不同地方的表现不同。

## 5.熟悉对象(freeze、seal属性) ##

可以通过以下方式创建对象：

    var marks = {}
    var marks = new Object();

我们大多是熟悉的对象如下：

    var marks  = { physics: 98, maths: 95, chemistry: 91 };

它是一个键值对存储键、值。JS 对象具备的一个特殊属性， 把任何东西可以视为value。这意味着， 我们可以把一个数组、对象、函数作为value来存储。有何不可呢？

你借助JSON的stringify、parse防范可以轻松的把对象转成一个JSON， 相应的可以再转成对象。

    JSON.stringify(marks); //    "{"physics":98,"maths":95,"chemistry":91}"
    JSON.parse('{"physics":98,"maths":95,"chemistry":91}'); //    {physics: 98, maths: 95, chemistry: 91}

因此，对于对象你有了解一些什么呢。使用Object.keys很容易迭代对象

    var highScore = 0;
    for (k of Object.keys(marks)) {
        if (marks[k] > highScore) {
            highScore = marks[k];
        }
    }
    console.log(highScore); //    98

Object.values 以数组的方式返回对象的值。

其他重要的对象函数：

- Object.prototype(object)
- Object.freeze(function)
- Object.seal(function)

Object.prototype提供更多可以应用的重要函数。如下：

Object.prototype.hasOwnProperty 用于发现一个对象是否存在一个原型或键。

    marks.hasOwnProperty('physics'); //    true
    marks.hasOwnProperty('greek'); //    false

Object.prototype.instanceof 评估一个对象是否是特定原型的类型。

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    var newCar = new Car('Jack', 'City', '2008');
    console.log(newCar instanceof Car) //    true

现在介绍其它两个函数。Object.freeze 允许我们冻结一个对象， 使得存在的属性不能被改变。

    var marks = {physics: 98, math: 95, chemisty: 91}
    finalizedMarks = Object.freeze(marks); //    {physics: 98, maths: 95, chemistry: 91}
    finalizedMarks['physics'] = 86; 
    console.log(marks); //    {physics: 98, maths: 95, chemistry: 91}

代码中， physics属相并未被改变。我们可以使用Object.isFrozen来判断，给定对象是否被冻结

    Object.isFrozen(finalizedMarks); //    true

Object.seal 与freeze有细微差别。前者允许配置属性， 但是不允许添加或删除属性。

    var marks = {physics: 98, math: 95, chemisty: 91}
    Object.seal(marks); //    {physics: 98, math: 95, chemisty: 91}
    delete marks.chemisty //    false
    marks.physics = 95;
    console.log(marks); //    {physics: 95, math: 95, chemisty: 91}
    marks.greek = 86;
    console.log(marks); //    {physics: 95, math: 95, chemisty: 91}

同样， 可以借助Object.isSealed判断对象是否被密封。

    Object.isSealed(marks) //    true

## 6.熟悉原型继承 ##

在传统的js中隐藏着继承的概念， 使用原型技术。你在ES5、ES6中看到的所有new class语法仅仅是底层原型OOP的表层。使用js函数创建一个class.

    var animalGroups = {
        MAMMAL: 1,
        REPTILE: 2,
        AMPHIBIAN: 3,
        INVERTEBRATE: 4,
    };
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    var dog = new Animal("dog", animalGroups.MAMMAL);
    console.log(dog); //    Animal { name: 'dog', type: 1 }
    var crocodile = new Animal("crocodile", animalGroups.REPTILE);
    console.log(crocodile); //    Animal { name: 'crocodile', type: 2 }

此时， 我们创建一个类（使用关键词new）。可以使用如下方式对class追加方法。

    Animal.prototype.shout = function() {
      console.log(this.name+'is'+this.sound+'ing...');
    }

你可能有疑问。现在class中没有sound属性。是的。定义一个sound属性几乎没有可能，可以由继承它的子类进行传递。

js中， 如下实现继承。

    function Dog(name, type) {
      Animal.call(this, name, type);
      this.sound = 'bow';
    }
    // console.log(Dog); // [Function: Dog]

定义一个特殊的函数Dog。为了继承Animal， 需要call传递this和其他参数。如下方式实例化一个Jack。

    var pet = new Dog('Jack', animalGroups.MAMMAL);
    console.log(pet);   // Dog { name: 'Jack', type: 1, sound: 'bow' }
    console.log(pet instanceof Dog); // true
    console.log(pet instanceof Animal); // false

我们不能在子函数中分配name和type，但是可以调用超级函数Animal并设置属性。。pet拥有其父的（name, type）属性。是否也继承了方法。

    pet.shout(); // is not a function

为什么没有继承呢？  因为不能继承父class的方法。如何补救？

    Dog.prototype = Object.create(Animal.prototype);
    var pig = new Dog('Jack', animalGroups.MAMMAL);
    pig.shout(); // Jackisbowing...

现在shout方法是有效的。Object.constructor函数检查对象的class.

    console.log(pig.constructor); // [Function: Animal]

检查pig的结果。Animal是父类。这是因为Dog的类

    console.log(Dog.prototype.constructor); // [Function: Animal]

输出是Aimal。我们应该设置Dog为其本身， 这样类的所有实例(对象)都应该在类所属的地方给出正确的类名。

    Dog.prototype.constructor = Dog;
    console.log(Dog.prototype.constructor); // [Function: Dog]

关于原型继承， 我们应该记住以下几条：

- class 属性使用this绑定
- class 方法使用prototype对象来绑定
- 为了继承原型， 使用call函数传递this
- 为了继承方法, 使用Object.create连接父和子的原型
- 通设置子class构造函数本身为获取正确的标识。

注意：即使使用新的class语法， 这些事情也会发生。了解这些对你熟悉js有帮助。

> js中， call函数和原型对象提供继承

## 7.熟悉callback和promise ##

callback 是 一个I/O执行完毕后执行的函数。一个耗时的I/O操作会阻塞代码， 因此在Python/Ruby不被允许。但是js中， 由于允许异步执行， 我们可以提供异步函数来回调。这个例子是由浏览器到服务器的AJAX(XMLHettpRequest)调用，由鼠标、键盘事件生成。如下：

    function reqListener() {
        console.log(this.responseText);
    }
    var req = new XMLHttpRequest();
    req.addEventListener('load', reqListenter);
    req.open('GET', 'http://www.example.org/example.txt');
    req.send();

其中， reqListenter是GET请求成功后的回调函数。

Promise 是回调函数的优雅的封装， 使得我们优雅的实现异步代码。此时， 不再过多讨论promise, 虽然对于熟悉Js及其重要。

## 8.熟悉正则表达 ##

创建正则表达式，有如下两种方式：

```
var re = /ar/;
var re = new RegExp('ar');
```

以上正则用于匹配字符串。一旦正则已经定义， 可以使用exec函数匹配字符串。

```
re.exec('car')
re.exec('cab')
```

存在复杂的符号， 来实现复杂的正则表达式。

- 字符正则：\w-字母数字， \d-数字， \D-没有数字
- 字符正则：[x-y]x-y区间， [^x]没有x
- 数量正则：+至少一个、?没或多个、*多个
- 边界正则，^开始、$结尾

例子如下：

```
// 1
/\d/.exec('qwe') // null
/\d/.exec('2344') // ["2", index: 0, input: "2344", groups: undefined]
/\d/.exec('2cc4') // ["2", index: 0, input: "2cc4", groups: undefined]

// 2
/e+/.exec('qwe') // ["e", index: 2, input: "qwe", groups: undefined]

// 3
[^x]/.exec('xcc4')  // ["c", index: 1, input: "xcc4", groups: undefined]

// 4
/^q/.exec('qwe') //["q", index: 0, input: "qwe", groups: undefined]
/e$/.exec('qwe') // ["e", index: 2, input: "qwe", groups: undefined]
```

除了exec， 还有match、search，以及replace可以返回一个字符串使用正则表达式。但是主体是一个字符串。

```
'hello 12345'.match(/\d/) // ["1", index: 6, input: "hello 12345", groups: undefined]
'hello 12345'.replace(/1/, 'c') // "hello c2345"
```

正则是个重要的话题， 对于想要简单解决复杂问题的开发人员来说。

> 正则不单单属于js， 你也可以经常在其他语言中见到

## 9.熟悉map、reduce和filter ##

函数式编程是最近讨论的话题。许多编程语言的新版本开始包括lambdas等概念(如：java>7)。 js中， 支持函数式结构已经有很长一段时间。此处， 有三个函数需要我们深入学习。数学函数获取输出并给出返回。一个纯正的函数总是依据输入给出返回，如下讨论的函数属于此类函数。

### 9.1 map

map函数在js数组中可用。使用这个函数， 我们通过对每一个元素进行转换来获取一个新的数组。一般的js数组map操作如下：

```
arr.map((elem){
    process(elem);
    return processedValue;
}); // return a new array
```

假设，我们最近工作的串行键不需要字符。 我们需要移除。可以使用map去执行相同的操作从而获取结果数字，而不是通过迭代和发现的方式移除字符。

```
var data = ['2345-34r', '2e345-211', '543-67i4', '346-598'];
var re = /[a-z A-Z]/;
var cleanedData = data.map((elem) => {
    return elem.replace(re, '');
});
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]
```

注意：使用es6的箭头函数语法来定义函数

map接受一个作为参数的函数， 此函数接受一个来自数组的参数。我们需要返回一个处理过的元素， 并应用于数组中的所有元素。

### 9.2 reduce

reduce函数将一个给定的列表归纳出一个返回。我们通过迭代数组执行相同的操作， 并保存中间结果到一个变量中。此处是一个更简洁的方式进行处理。js的reduce一般使用语法如下：

```
arr.reduce((accumulator, value, index) => {
    process(accumulator, value);
    return accumulator;
}, initAccumulator);
```

- initAccumulator, 累加器的初始值
- accumulator， 累加器用于存储中间值和结果值
- value， 对组对应的元素
- index， 数组对应的索引号

reduce 的一个实际应用是将一个数组扁平化， 将内部数组转化为单个数组， 如下：

```
var arr = [[1, 2], [3, 4], [5, 6]]
var flattenedArray = [1, 2, 3, 4, 5, 6]
```

我们可以通过正常的迭代实现， 神奇的是， 使用reduce会更加简洁。

```
var arr = [[1, 2], [3, 4], [5, 6]]
var flattenedArray = arr.reduce((a, v) => {
    return a.concat(v)
}, [])
flattenedArray // (6) [1, 2, 3, 4, 5, 6]
```

### 9.3 filter

filter与map更为接近， 对数组的每个元素进行操作并返回另外一个数组（不同于reduce返回的值）。过滤后的数组可能比原数组长度更短。因为， 我们通过的可能排除 输出数组中更少/零的输入。
filter执行如下：

```
arr.filter((v) => {
    return Boolean;
})
```

v是数组中的元素， 通过true/false表示过滤元素包括/排除。假设， 我们过滤出以t开始以r结束的元素。

```
var words = ["tiger", "toast", "boat", "tumor", "track", "bridge"]
var newData = words.filter((str) => {
    return str.startsWith('t') && str.endsWith('r');
})
newData // (2) ["tiger", "tumor"]
```

当你被问到js方面的问题时， 这三个函数应该信手拈来。如你所看到的， 所有三个函数例子并没有改变原数组， 这也证明了这些函数的纯净性。

## 10. 熟悉错误(异常)处理模式 ##

这部分是许多开发者最不关系的js部分。我了解到很少开发人员讨论错误处理。好的开发方法是小心的将js代码包裹在try/catch周围。

Nicholas C. Zakas， 雅虎的UI工程师， 2018 说过： “经常假设你的代码会失败。事件处理可能不当。记录到服务器。抛出你自己的问题。”

js中， 我们随意码的代码， 可能失败， 如下：

```
$('button').click(function() {
    $.ajax({
        url: 'user.json',
        success: function(res) {
            updateUI(res['posts']);
        }
    });
});
```

此时， 我们落入ajax结果总是JSON对象的陷阱。有时， 服务器会崩溃并返回null。这种情况下， null["posts"]会抛出错误。正确的处理方式如下：

```
$('button').click(function() {
    $.ajax({
        url: 'user.json',
        success: function(res) {
            try {
                updateUI(res['posts']);
            }
            catch(e) {
                logError();
                flashInfoMessage();
            }
        }
    });
});
```

- logError函数打算向服务器报告错误。
- flashInfoMessage函数使用“当前服务器不可用”等用户友好型方式展示错误信息。

Nicholas说过， 当你感到不可预期的事情发生时手动抛出错误。区分致命和非致命错误。上面的错误与后台服务器挂机相关，是致命的。因此， 我们应该通知客户服务器因为一些原因挂机。这种情况下， 不是致命的， 但是最好通知服务器。为了创建这样的代码， 首先抛出错误， 从window层级捕捉错误事件， 随后记录信息到服务器。

```
reportErrorToServer = function(error) {
    $.ajax({
        type: "POST",
        url: "http://api.xyz.com/report",
        data: error,
        success: function(res) {}
    });
}

// window error evnet
window.addEvnetListener('error', function(e) {
    reportErrorToServer({
        message: e.message
    });
});

function mainLogic() {
    throw new Error("error tip");
}
```

这个代码需要做如下三件事：

- 监听window层级错误
- 出现错误时， API记录
- 在服务器中记录

你也可以使用新的Boolean函数（es5，es6）在程序之前监测变量的有效性并且不为null、undefined

```
if (Boolean()) {
    // block code
} else {
    throw new Error("Custom message");
}

```

始终考虑错误处理是你自己， 而不是浏览器。

## 11. 其他(提升机制和事件冒泡) ##

对于一个js开发者， 以上都是主要概念。了解少数内部细节可是非常有用的。js在浏览器中的工作机制。什么是提升机制和事件冒泡？

### 11.1 提升机制

提升是  在代码执行过程中将声明的变量推送到程序顶部 的一个过程。

```
function doSomething(v) {
    //
}
doSomething(foo);
var foo;
```

使用脚本语言类似Python执行以上程序， 会抛出错误。你需要先定义再使用。虽然js是脚本语言， 但是它有提升机制。 在这种机制中， 一个js VM在运行程序是做了以下两件事：

- 首先，扫描程序收集所有变量和函数的声明和分配内存空间。
- 通过填充分配的变量来执行程序， 没有分配则填充undefined

以上代码片段中打印“undefined”， 因为最初的扫描中已经收集了变量foo。VM查找所有foo的值。

在 一些地方回抛出错误 和 另外地方使用undefined js环境下的提升机制。学习[一些例子](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)来搞清楚提升。

> author: 声明可以被提升， 赋值不会。

### 11.2 事件冒泡

关于事件冒泡， 依据Arun P（ 一个高级软件工程）所描述：

> “事件冒泡和捕获在HTML DOM API中事件传播的两种方式，当同时注册事件的父子元素中子元素触发事件时。事件的传播方式决定接受事件的元素顺序 ”

关于冒泡， 事件最先由内部元素捕获和处理， 随后传递给父级元素。关于捕获， 顺序相反。我们通常使用addEventListener函数来捆绑事件和事件处理函数

```
addEventListener('click', handler, useCapture=false);
```

useCapture是第三个参数的关键词， 默认为false。因此， 冒泡模式是事件由底部向上传递。 反之， 这是捕获模式。

冒泡模式：

```
<div onClick="divHandler()">
    <ul onClick="ulHandler()">
        <li id="foo"></li>
    </ul>
</div>
<script>
function handler() {}
function divHandler() {}
function ulHandler() {}

documnet.getElementById("foo").addEventListener("click", handler)
</script>
```

点击li元素， 事件顺序：```handler() => ulHandler() => divHandler()```

捕获模式：

```
document.getElementById("foo").addEventListener("click", handler, true)
```

点击li元素， 事件顺序``divHandler => ulHandler() => handler()``

以上都是基础的js知识。 正如我最初提及的， 除了这些， 工作经历和知识、准备对你攻克面试都有帮助。保持学习的习惯， 学习最新得技术(es6)， 深入js各个方面的学习(如V6、测试等)。一些视频也可以教会你一些知识。最后， 数据结构和算法的准备也必不可少。[Oleksii Trekhleb 的算法仓库值得学习](https://github.com/trekhleb/javascript-algorithms)

[阅读原文](https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d)
