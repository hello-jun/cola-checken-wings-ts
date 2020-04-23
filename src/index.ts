// 从头到尾输出一分 可乐鸡翅
import * as ingredients from './ingredients';
import * as cookingMethods from './cookingMethods'
import './copyright'

console.log('=========== START ==============\n')
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
  console.log('>>>>>>>准备食材---->\n')
  for (let [key, value] of Object.entries(Ingredients)) {
    basket[key] = new ingredients[value]()
  }
  console.log('\n>>>>>>>预处理食材---->\n')
  for (let [key, value] of Object.entries(basket)) {
    basket[key] = prepareIngredients(value)
  }
}()

/**
 * 预处理食材，如清洗
 * @param ingredient
 */
function prepareIngredients<T extends ingredients.Ingredient>(ingredient: T): T { // 泛型以及泛型约束
  console.log(`清洗或切或盛碗---->${ingredient.name}`)
  // do something
  return ingredient
}

/**
 * 步骤迭代生成器
 */
function* createIterator() {
  for (let [key, value] of Object.entries(Steps)) {
    yield value
  }
}

const stepsIterator = createIterator() // 自己会做类型推导

let done: boolean = false  // 是否完成
const {chickenWings, cookingWine, salt, soySauce, ginger, starAnise, scallion, cola} = basket

console.log('\n>>>>>>>开始烹饪，根据鸡肉状态---->[腌制]---->[煎炸]---->[焖]\n')

while (!done) { //遍历迭代器控制烹饪步骤顺序
  const step = stepsIterator.next()
  done = step.done as boolean   // 断言
  const stepName: cookingMethods.Methods | boolean = !done && <cookingMethods.Methods>step.value
  if (typeof stepName !== 'boolean') cookingMethods[stepName](<ingredients.ChickenWings>chickenWings, cookingWine, salt, soySauce, ginger, starAnise, scallion, cola)
}

console.log('=========== END ==============\n')
console.log('可乐鸡翅制作完成！\n')
console.log('注：如需导出菜谱，请在项目root dir 执行: tsc ,将会自动生成 .d.ts声明文件至 lib 目录下')
