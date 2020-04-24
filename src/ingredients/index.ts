///////////////////////////////////////////
/////    所有的食材都在此模块定义        /////
/////////////////////////////////////////

/**
 * 食材单位
 * @description 字符串字面量类型，约束食材单位只能是 '块' | '克' | '片' | '个' | '根' | '毫升'
 */
type IngredientUnits = '块' | '克' | '片' | '个' | '根' | '毫升'

/**
 * 抽象定义食材
 * @description abstract class 抽象了食材公共父类，所有食材都必须继承此 class
 */
export abstract class Ingredient {
  name: string              // 食材名称。 类属性类型声明，下同，其他类中属性不再注释
  amount: number            // 食材需要数量
  unit: IngredientUnits     // 食材的单位
  protected constructor(amount: number, name: string, unit: IngredientUnits) { // 抽象类不能被实例化，但是其子类需要调用其构造方法，因此修饰构造方法为 protected ，并对其参数类型进行约束
    this.amount = amount
    this.name = name
    this.unit = unit
    this.describe()
  }

  toString():string { // 重写了实例对象的 toString 方法，指定返回类型必须是 string. 下同，其他类中的方法返回值不再进行 返回值类型描述
    return JSON.stringify(this)
  }

  abstract describe(): void //食材描述。 抽象方法，子类必须实现
}

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

/**
 * 鸡翅状态值
 * @description 变量赋值 约束类型是自定义类型 IChickenWingsStatus
 */
export const ChickenWingsStatus: IChickenWingsStatus = { // 此处故意命名为 ChickenWingsStatus 与 上面的 字符串字面量 ChickenWingsStatus 一致，但是却不会报错，请体会此处的原理
  raw: 'raw',
  pickled: 'pickled',
  fried: 'fried',
  ok: 'ok',
}

/**
 * 鸡翅
 * @description 鸡翅 class 继承 抽象食材类，下面所有的食材类型相同逻辑
 */
export class ChickenWings extends Ingredient {
  private _status: ChickenWingsStatus                  //鸡翅的状态应该是私有的，使用 private 修饰符修饰
  constructor(_status: ChickenWingsStatus = 'raw') {
    super(8, '鸡翅', '块')
    this._status = _status
  }

  describe(): void {
    console.log(`${this.name.padStart(2, ' ')} X ${this.amount}${this.unit}：凌晨3点，来自新西兰农场的原生态鸡翅，可能是世界上肉质最好的鸡翅之一！`)
  }

  get status(): ChickenWingsStatus {              // 使用存取器，供外部去访问一个私有属性
    return this._status;
  }

  set status(value: ChickenWingsStatus) {
    this._status = value;
  }
}

/**
 * 盐
 */
export class Salt extends Ingredient {
  constructor() {
    super(2, '精盐', '克')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：昼夜交错时分，取自千年盐都自贡东源井最深处深处的一钵盐，极致提鲜`)
  }

}

/**
 * 生抽
 */
export class SoySauce extends Ingredient {
  constructor() {
    super(10, '生抽', '毫升')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：海天特级金标生抽，一滴入味，两滴入髓`)
  }

}

/**
 * 姜
 */
export class Ginger extends Ingredient {
  constructor() {
    super(2, '生姜', '片')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：外婆家种的生姜，儿时的味道`)
  }

}

/**
 * 八角
 */
export class StarAnise extends Ingredient {
  constructor() {
    super(2, '八角', '个')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：广西表哥送的八角，每一个角，都是表哥的爱`)
  }

}

/**
 * 葱
 */
export class Scallion extends Ingredient {
  constructor() {
    super(1, '香葱', '根')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：与邻居小姐姐一起种下的葱，如今都已亭亭玉立`)
  }

}

/**
 * 料酒
 */
export class CookingWine extends Ingredient {
  constructor() {
    super(20, '料酒', '毫升')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：取自一瓶朴实无华的没有品牌标签的料酒`)
  }

}

/**
 * 可乐
 */
export class Cola extends Ingredient {
  constructor() {
    super(500, '可乐', '毫升')
  }

  describe(): void {
    console.log(`${this.name} X ${this.amount}${this.unit}：一瓶82年的可乐，年代稍微有点久远，喝了可能会上头`)
  }

}

