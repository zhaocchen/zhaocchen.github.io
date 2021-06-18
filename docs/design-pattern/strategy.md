---
slug: strategy
title: 行为型 | 策略模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description:
---

### 意图

定义一系列算法， 将每种算法分别放入独立的类中，并使算法的对象能够相互替换

### 场景

- 需要对象中各种不同的算法变体在运算时切换
- 许多仅在执行某些行为时略有不同的相似类
- 算法在上下文的逻辑中不重要， 需要将类的业务与算法实现细节隔离
- 类中使用了复杂条件运算符以在同一算法的不同变体中切换

应用：

### 缺点

- 策略类需要对外暴露

### 实现

```ts
// 1. 创建一个接口
interface Strategy {
  doOperation(num1: number, num2: number): number;
}

// 2. 创建实现接口的实体类
class OperationAdd implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class OperationSubtract implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class OperationMultiply implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// 3. 创建 Context 类
class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy(num1: number, num2: number): number {
    return this.strategy.doOperation(num1, num2);
  }
}
```

测试

```ts
// 4. 使用 Context 来查看当它改变策略 Strategy 时的行为变化
class StrategyPatternDemo {
  constructor() {
    let context: Context = new Context(new OperationAdd());
    console.log("10 + 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationSubtract());
    console.log("10 - 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationMultiply());
    console.log("10 * 5 = " + context.executeStrategy(10, 5));
  }
}

new StrategyPatternDemo();
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
```

#### 案例：计算年终奖

```js
const strategies = {
  S: (salary) => {
    return salary * 4;
  },
  A: (salary) => {
    return salary * 3;
  },
  B: (salary) => {
    return salary * 2;
  },
};

const calculateBonus = (level, salary) => {
  return strategies[level.toUpperCase()](salary);
};

console.log(calculateBonus("s", 20000));
console.log(calculateBonus("a", 10000));
// 80000
// 30000
```

#### 案例：表单校验

```html
    <form action="#" id="registerForm" method="post">
      请输入用户名：
      <input type="text" name="userName" />
      <button>提交</button>
    </form>
    <script>
      const registerForm = document.getElementById("registerForm");
      const rules = {
        userName: [
          {
            strategy: "isNonEmpty",
            errorMsg: "用户名不能为空",
          },
          {
            strategy: "minLength:10",
            errorMsg: "用户名长度不能小于10位",
          },
        ],
      };

      // 策略类
      var strategies = {
        isNonEmpty: function (value, errorMsg) {
          if (value === "") {
            return errorMsg;
          }
        },
        minLength: function (value, errorMsg, length) {
          if (value.length < length) {
            return errorMsg;
          }
        },
      };

      // 表单提交
      registerForm.onsubmit = () => {
        const errorMsg = validatorFn();
        if (errorMsg) {
          alert(errorMsg);
          return false;
        }
        return false;
      };

      // ######## 外部函数
      // 验证类
      class Validator {
        constructor() {
          this.cache = [];
        }

        // 添加验证方法
        add({ dom, rules }) {
          rules.forEach((rule) => {
            const { strategy, errorMsg } = rule;
            const [strategyName, strategyCondition] = strategy.split(":");
            const { value } = dom;
            this.cache.push(
              strategies[strategyName].bind(
                dom,
                value,
                errorMsg,
                strategyCondition
              )
            );
          });
        }

        // 开始验证
        start() {
          let errorMsg;
          this.cache.some((cacheItem) => {
            const _errorMsg = cacheItem();
            if (_errorMsg) {
              errorMsg = _errorMsg;
              return true;
            } else {
              return false;
            }
          });

          return errorMsg;
        }
      }

      // 验证函数
      function validatorFn() {
        const validator = new Validator();
        Object.keys(rules).forEach((key) => {
          validator.add({
            dom: registerForm[key],
            rules: rules[key],
          });
        });

        const errorMsg = validator.start();
        return errorMsg;
      }
    </script>
```

延伸：element表单校验

例子 https://element.eleme.io/#/zh-CN/component/form

源码 https://github.com/ElemeFE/element/blob/dev/packages/form/src/form-item.vue#L212

插件 [async-validator](https://www.npmjs.com/package/async-validator)
