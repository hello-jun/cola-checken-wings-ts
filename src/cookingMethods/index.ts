// 所有的烹饪方法
import {
  Ingredient,
  ChickenWings,
  CookingWine,
  ChickenWingsStatus
} from '../ingredients'

export type Methods = 'pickle' | 'fry' | 'braise'

/**
 * 检查食材数量是否足够
 * @param ingredients
 */
function checkIngredientAmount(...ingredients: Ingredient[]): boolean {
  return ingredients.every(el => Boolean(el.amount))
}

/**
 * 腌制：放入鸡翅、料酒进行腌制去腥
 * @param chickenWings
 * @param cookingWine
 */
export function pickle(chickenWings: ChickenWings, cookingWine: CookingWine, ...ingredients: Ingredient[]): void {
  const enoughAmountSign: boolean = checkIngredientAmount(chickenWings, cookingWine)
  if (enoughAmountSign && chickenWings.status === ChickenWingsStatus.raw) {
    console.log('>>>>>>>进入烹饪步骤1---->[腌制],预计耗时20分钟')
    chickenWings.status = ChickenWingsStatus.pickled
    console.log(`烹饪步骤1---->[腌制]：腌制成功！腌制了20分钟，鸡翅完全去掉了腥味，肉质变得松软~，状态变为---->${chickenWings.status}`)
  } else {
    throw new Error(`烹饪步骤1---->[腌制]：鸡翅在腌制前已经被处理成${chickenWings.status}状态了，腌制失败，请重新制作吧`)
  }
}

/**
 * 煎炸：将鸡翅放入锅中煎炸至两面金黄
 * @param chickenWings
 */
export function fry(chickenWings: ChickenWings, ...ingredients: Ingredient[]): void {
  const enoughAmountSign: boolean = checkIngredientAmount(chickenWings)
  if (chickenWings.status === ChickenWingsStatus.pickled && enoughAmountSign) { //鸡翅状态是腌制完成状态
    console.log('>>>>>>>进入烹饪步骤2---->[煎炸]，预计耗时5分钟')
    chickenWings.status = ChickenWingsStatus.fried
    console.log(`烹饪步骤2---->[煎炸]：煎炸成功！小心翼翼地煎炸了5分钟，鸡翅已经被煎至两面金黄，冒出了阵阵肉香~，状态变为---->${chickenWings.status}`)
  } else {
    throw new Error(`烹饪步骤2---->[煎炸]：哦豁，被你炸糊了，放弃吧，你不适合做菜`)
  }
}

/**
 * 焖： 放入鸡翅以及其他配料，大火焖至汤汁粘稠，然后转小火收汁
 * @param chickenWings
 * @param ingredients
 */
export function braise(chickenWings: ChickenWings, ...ingredients: Ingredient[]): void {
  const enoughAmountSign: boolean = checkIngredientAmount(chickenWings, ...ingredients)
  if (chickenWings.status === ChickenWingsStatus.fried && enoughAmountSign) { //鸡翅状态是腌制完成状态
    console.log('>>>>>>>进入烹饪步骤3---->[焖]，预计耗时10分钟')
    chickenWings.status = ChickenWingsStatus.fried
    console.log(`烹饪步骤3---->[焖]：倒入可乐，并放入 ${ingredients.reduce((pre, current) => pre += current.name + '、', '')}~，大火焖至汤汁粘稠，然后转小火收汁`)
  } else {
    throw new Error(`烹饪步骤3---->[焖]：哦豁，烹饪步骤错了，制作失败了呢，请重新制作吧`)
  }
}