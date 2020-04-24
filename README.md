# 前言
cola-chicken-wings-ts 项目仅作为学习 TypeScript 时的一个入门级Demo项目。  
愿望是更加快乐地学习 TypeScript！

阅读与coding时 ，请结合 [@xcatliu/《TypeScript 入门教程》](https://ts.xcatliu.com/) 和 [@tslang/《TypeScript 官方文档（中文版）》](https://www.tslang.cn/) 食用，哪里不会查哪里！

做完本项目后，你可以:
1. 对 TypeScript 类型系统有大概的认知
2. 可以在项目中上手进行 TypeScript 开发了

---

适合以下人群：
- 熟悉 JavaScript，有学习 TypeScript 的意向
- 想要学习或者正在学习 TypeScript，但是觉得阅读文档枯燥困难    
- 有面向对象编程经验，掌握 Java / C# 等面向对象语言
--- 

不适合以下人群：
- 没有系统深入学习过 JavaScript
- 已经能很熟练的使用 TypeScript

---

## 关于 TypeScript & JavaScript 的一些看法
通过阅读 TypeScript 相关文档，可以发现，TypeScript 是从面向对象的角度去进行类型检查，这一点与 JavaScript 委托思想相悖论，毕竟它的作者——安德斯·海尔斯伯格，是 C# 的首席架构师 ，设计思想一脉相承。  
有趣的是，通过 tsc 编译器编译后最终却生成 JavaScript。  
大家都想用 JavaScript,但是又被它的委托设计思想弄得很烦恼，在复杂环境下，很难十分去明确一个属性值或位置(如：著名的鸭子模型)；但是隔壁面向对象的语言如Java等，严格的类设计，却不存在这个烦恼。JavaScript 的规范制定者看到了这个，觉得还不错，因此，从ES6开始，就有了Class 这个关键字。  
但是它永远只是一个"伪类"，因为Class只是ECMA将原型委托做了一层障眼法！在js运行时，前面提到的问题仍旧会存在。  
有问题的 JavaScript 无法自身去解决问题。    
此时，比较成熟的 TypeScript 出现了，它只关心编译阶段，在编译阶段，就通过面向对象的思想去检查程序，如果发现错误，直接编译错误，保证在纠正完错误生成的js代码中，属性值的存取与使用都是明确的。  
TypeScript 做完这些事后，剩下的依旧交给 JavaScript 去做，这样就解决了上述说的问题
>注：如果没有系统学习过 JavaScript 的同学，直接上手学习 TypeScript 的话，可能让你在理解 JavaScript 原型与原型链的知识点的时候存在思维困难； 

---

# 项目简介

项目简单抽象了现实生活中做“可乐鸡翅”的过程，结合 TypeScript 类型系统，对 TypeScript 的以下知识点，做了针对性的运用：
1. 原始数据类型
2. 内置对象类型
3. 自定义类型
4. 函数
5. 接口
6. 类
7. 泛型
8. 枚举
9. 数组
10. 字符串字面量类型
11. 类型断言
12. 声明文件

每一个知识点，在源码中都会有注释进行标注。如：  
```typescript
/**
 * 鸡翅的状态：
 * '生的'|'腌制完成的'|'煎好的'|'做好了'
 * @description 字符串字面量类型
 */
type ChickenWingsStatus = 'raw' | 'pickled' | 'fried' | 'ok'

/**
 * 定义鸡翅状态类型
 * @description 接口 自定义对象类型
 */
interface IChickenWingsStatus {
  raw: ChickenWingsStatus,
  pickled: ChickenWingsStatus,
  fried: ChickenWingsStatus,
  ok: ChickenWingsStatus,
}

```

--- 

# 运行

- 安装依赖  
进入根目录下执行  
`yarn`

- 执行  
`npx ts-node ./src/index.ts`

- 自动生成声明文件至 `lib` 目录  
`npx tsc`