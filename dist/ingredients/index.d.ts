declare type IngredientUnits = '块' | '克' | '片' | '个' | '根' | '毫升';
/**
 * 抽象定义食材
 */
export declare abstract class Ingredient {
    name: string;
    amount: number;
    unit: IngredientUnits;
    protected constructor(amount: number, name: string, unit: IngredientUnits);
    toString(): string;
    abstract describe(): void;
}
/**
 * 鸡翅的状态：
 * '生的'|'腌制完成的'|'煎好的'|'做好了'
 */
declare type ChickenWingsStatus = 'raw' | 'pickled' | 'fried' | 'ok';
interface IChickenWingsStatus {
    raw: ChickenWingsStatus;
    pickled: ChickenWingsStatus;
    fried: ChickenWingsStatus;
    ok: ChickenWingsStatus;
}
/**
 * 鸡翅状态值
 */
export declare const ChickenWingsStatus: IChickenWingsStatus;
/**
 * 鸡翅
 */
export declare class ChickenWings extends Ingredient {
    private _status;
    constructor(_status?: ChickenWingsStatus);
    describe(): void;
    get status(): ChickenWingsStatus;
    set status(value: ChickenWingsStatus);
}
/**
 * 盐
 */
export declare class Salt extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 生抽
 */
export declare class SoySauce extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 姜
 */
export declare class Ginger extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 八角
 */
export declare class StarAnise extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 葱
 */
export declare class Scallion extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 料酒
 */
export declare class CookingWine extends Ingredient {
    constructor();
    describe(): void;
}
/**
 * 可乐
 */
export declare class Cola extends Ingredient {
    constructor();
    describe(): void;
}
export {};
