# 前言
cola-chicken-wings-ts 项目仅为本人学习TypeScript时的一个Demo项目。

## 关于 TypeScript & JavaScript 的一些看法
通过阅读 TypeScript 相关文档，可以发现，TypeScript 是从面向对象的角度去进行类型检查，这一点与 JavaScript 委托思想相悖论，毕竟它的作者——安德斯·海尔斯伯格，是 C# 的首席架构师 ，设计思想一脉相承。  
有趣的是，通过 tsc 编译器编译后最终却生成 JavaScript。  
大家都想用 JavaScript,但是又被它的委托设计思想弄得很烦恼，在复杂环境下，很难十分去明确一个属性值或位置(如：著名的鸭子模型)；但是隔壁面向对象的语言如Java等，严格的类设计，却不存在这个烦恼。JavaScript 的规范制定者看到了这个，觉得还不错，因此，从ES6开始，就有了Class 这个关键字。  
但是它永远只是一个"伪类"，因为Class只是ECMA将原型委托做了一层障眼法！在js运行时，前面提到的问题仍旧会存在。  
有问题的 JavaScript 无法自身去解决问题。    
此时，比较成熟的 TypeScript 出现了，它只关心编译阶段，在编译阶段，就通过面向对象的思想去检查程序，如果发现错误，直接编译错误，保证在纠正完错误生成的js代码中，属性值的存取与使用都是明确的；        
>注：如果没有系统学习过 JavaScript 的同学，直接上手学习 TypeScript 的话，可能让你在理解 JavaScript 原型与原型链的知识点的时候存在思维困难； 

---

适合以下人群：
- 熟悉 JavaScript，有学习TypeScript的意向
- 想要学习或者正在学习 TypeScript，但是觉得阅读文档枯燥困难    
- 有面向对象编程经验，掌握 Java / C# 等面向对象语言
--- 

不适合以下人群：
- 没有系统深入学习过 JavaScript
- 已经能很熟练的使用 TypeScript

---

# 项目简介

本项目在