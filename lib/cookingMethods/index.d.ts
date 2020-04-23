import { Ingredient, ChickenWings, CookingWine } from '../ingredients';
export declare type Methods = 'pickle' | 'fry' | 'braise';
/**
 * 腌制：放入鸡翅、料酒进行腌制去腥
 * @param chickenWings
 * @param cookingWine
 */
export declare function pickle(chickenWings: ChickenWings, cookingWine: CookingWine, ...ingredients: Ingredient[]): void;
/**
 * 煎炸：将鸡翅放入锅中煎炸至两面金黄
 * @param chickenWings
 */
export declare function fry(chickenWings: ChickenWings, ...ingredients: Ingredient[]): void;
/**
 * 焖： 放入鸡翅以及其他配料，大火焖至汤汁粘稠，然后转小火收汁
 * @param chickenWings
 * @param ingredients
 */
export declare function braise(chickenWings: ChickenWings, ...ingredients: Ingredient[]): void;
