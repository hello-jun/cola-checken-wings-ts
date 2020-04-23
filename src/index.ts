// 从头到尾输出一分 可乐鸡翅
import * as ingredients from './ingredients';
import * as cookingMethods from './cookingMethods'

console.log('=========== START ==============')
/**
 * 烹饪步骤枚举
 */
enum Steps {
  pickle = 'pickle',
  fry = 'fry',
  braise = 'braise',
}

/**
 * 食材枚举
 */
enum Ingredients {
  chickenWings = 'ChickenWings',
  salt = 'Salt',
  soySauce = 'SoySauce',
  ginger = 'Ginger',
  starAnise = 'StarAnise',
  scallion = 'Scallion',
  cookingWine = 'CookingWine',
  cola = 'Cola'
}

interface Basket {                  // 任意属性
  [propName: string]: ingredients.Ingredient
}

const basket: Basket = Object.create(null)  // 所有的菜都放到篮子里

/**
 * 初始化食材
 */
~function initIngredients() {
  for (let [key, value] of Object.entries(Ingredients)) {
    basket[key] = prepareIngredients(new ingredients[value]())
  }
}()

/**
 * 步骤迭代生成器
 */
function* createIterator() {
  for (let [key, value] of Object.entries(Steps)) {
    yield value
  }
}

/**
 * 预处理食材，如清洗
 * @param ingredient
 */
function prepareIngredients<T extends ingredients.Ingredient>(ingredient: T): T { // 泛型以及泛型约束
  console.log(`预处理食材---->${ingredient.name}`)
  // do something
  return ingredient
}

const stepsIterator = createIterator() // 自己会做类型推导
console.log('步骤迭代器类型：', typeof stepsIterator)

let done: boolean = false  // 是否完成
const {chickenWings, cookingWine, salt, soySauce, ginger, starAnise, scallion, cola} = basket
while (!done) {
  const step = stepsIterator.next()
  done = step.done as boolean   // 断言
  const stepName: cookingMethods.Methods | boolean = !done && <cookingMethods.Methods>step.value
  if (typeof stepName !== 'boolean') cookingMethods[stepName](<ingredients.ChickenWings>chickenWings, cookingWine, salt, soySauce, ginger, starAnise, scallion, cola)
}

console.log('=========== END ==============')
console.log('可乐鸡翅制作完成！')
