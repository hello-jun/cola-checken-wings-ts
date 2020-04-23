/**
 * 食材单位
 */
import {ok} from "assert";

type IngredientUnits = '块' | '克' | '片' | '个' | '根' | '毫升'

/**
 * 抽象定义食材
 */
export abstract class Ingredient {
  name: string              // 食材名称
  amount: number            // 食材需要数量
  unit: IngredientUnits     // 食材的单位
  protected constructor(amount: number, name: string, unit: IngredientUnits) {
    this.amount = amount
    this.name = name
    this.unit = unit
    this.describe()
  }

  toString() {
    return JSON.stringify(this)
  }

  abstract describe(): void //食材描述
}

/**
 * 鸡翅的状态：
 * '生的'|'腌制完成的'|'煎好的'|'做好了'
 */
type ChickenWingsStatus = 'raw' | 'pickled' | 'fried' | 'ok'

interface IChickenWingsStatus {
  raw: ChickenWingsStatus,
  pickled: ChickenWingsStatus,
  fried: ChickenWingsStatus,
  ok: ChickenWingsStatus,
}

/**
 * 鸡翅状态值
 */
export const ChickenWingsStatus: IChickenWingsStatus = {
  raw: 'raw',
  pickled: 'pickled',
  fried: 'fried',
  ok: 'ok',
}

/**
 * 鸡翅
 */
export class ChickenWings extends Ingredient {
  private _status: ChickenWingsStatus                  //鸡翅的状态应该是私有的
  constructor(_status: ChickenWingsStatus = 'raw') {
    super(8, '新鲜的鸡翅', '块')
    this._status = _status
  }

  describe(): void {
    console.log("鸡翅：凌晨3点，来自新西兰农场的原生态鸡翅，可能是世界上肉质最好的鸡翅之一！")
  }

  get status(): ChickenWingsStatus {
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
    super(2, '盐', '克')
  }

  describe(): void {
    console.log("盐 ：昼夜交错时分，取自千年盐都自贡东源井最深处深处的一钵盐，极致提鲜")
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
    console.log("生抽：海天特级金标生抽，一滴入味，两滴入髓")
  }

}

/**
 * 姜
 */
export class Ginger extends Ingredient {
  constructor() {
    super(2, '姜', '片')
  }

  describe(): void {
    console.log('姜 ：外婆家种的生姜，儿时的味道')
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
    console.log('八角：广西表哥送的八角，每一个角，都是表哥的爱')
  }

}

/**
 * 葱
 */
export class Scallion extends Ingredient {
  constructor() {
    super(1, '葱', '根')
  }

  describe(): void {
    console.log('葱 ：与邻居小姐姐一起种下的葱，如今都已亭亭玉立')
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
    console.log('料酒：取自一瓶朴实无华的没有品牌标签的料酒')
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
    console.log('可乐：一瓶82年的可乐，年代稍微有点久远，喝了可能会上头')
  }

}

