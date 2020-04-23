"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 所有的烹饪方法
var ingredients_1 = require("../ingredients");
/**
 * 检查食材数量是否足够
 * @param ingredients
 */
function checkIngredientAmount() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    return ingredients.every(function (el) { return Boolean(el.amount); });
}
/**
 * 腌制：放入鸡翅、料酒进行腌制去腥
 * @param chickenWings
 * @param cookingWine
 */
function pickle(chickenWings, cookingWine) {
    var ingredients = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ingredients[_i - 2] = arguments[_i];
    }
    var enoughAmountSign = checkIngredientAmount(chickenWings, cookingWine);
    if (enoughAmountSign && chickenWings.status === ingredients_1.ChickenWingsStatus.raw) {
        chickenWings.status = ingredients_1.ChickenWingsStatus.pickled;
        console.log("\u70F9\u996A\u6B65\u9AA41---->[\u814C\u5236]\uFF1A\u814C\u5236\u6210\u529F\uFF01\u814C\u5236\u4E8620\u5206\u949F\uFF0C\u9E21\u7FC5\u5B8C\u5168\u53BB\u6389\u4E86\u8165\u5473\uFF0C\u8089\u8D28\u53D8\u5F97\u677E\u8F6F~\uFF0C\u72B6\u6001\u53D8\u4E3A---->" + chickenWings.status + "\n");
    }
    else {
        throw new Error("\u70F9\u996A\u6B65\u9AA41---->[\u814C\u5236]\uFF1A\u9E21\u7FC5\u5728\u814C\u5236\u524D\u5DF2\u7ECF\u88AB\u5904\u7406\u6210" + chickenWings.status + "\u72B6\u6001\u4E86\uFF0C\u814C\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5236\u4F5C\u5427");
    }
}
exports.pickle = pickle;
/**
 * 煎炸：将鸡翅放入锅中煎炸至两面金黄
 * @param chickenWings
 */
function fry(chickenWings) {
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    var enoughAmountSign = checkIngredientAmount(chickenWings);
    if (chickenWings.status === ingredients_1.ChickenWingsStatus.pickled && enoughAmountSign) { //鸡翅状态是腌制完成状态
        console.log('>>>>>>>进入烹饪步骤2---->[煎炸]，预计耗时5分钟\n');
        chickenWings.status = ingredients_1.ChickenWingsStatus.fried;
        console.log("\u70F9\u996A\u6B65\u9AA42---->[\u714E\u70B8]\uFF1A\u714E\u70B8\u6210\u529F\uFF01\u5C0F\u5FC3\u7FFC\u7FFC\u5730\u714E\u70B8\u4E865\u5206\u949F\uFF0C\u9E21\u7FC5\u5DF2\u7ECF\u88AB\u714E\u81F3\u4E24\u9762\u91D1\u9EC4\uFF0C\u5192\u51FA\u4E86\u9635\u9635\u8089\u9999~\uFF0C\u72B6\u6001\u53D8\u4E3A---->" + chickenWings.status + "\n");
    }
    else {
        throw new Error("\u70F9\u996A\u6B65\u9AA42---->[\u714E\u70B8]\uFF1A\u54E6\u8C41\uFF0C\u88AB\u4F60\u70B8\u7CCA\u4E86\uFF0C\u653E\u5F03\u5427\uFF0C\u4F60\u4E0D\u9002\u5408\u505A\u83DC");
    }
}
exports.fry = fry;
/**
 * 焖： 放入鸡翅以及其他配料，大火焖至汤汁粘稠，然后转小火收汁
 * @param chickenWings
 * @param ingredients
 */
function braise(chickenWings) {
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    var enoughAmountSign = checkIngredientAmount.apply(void 0, __spreadArrays([chickenWings], ingredients));
    if (chickenWings.status === ingredients_1.ChickenWingsStatus.fried && enoughAmountSign) { //鸡翅状态是腌制完成状态
        console.log('>>>>>>>进入烹饪步骤3---->[焖]，预计耗时10分钟\n');
        chickenWings.status = ingredients_1.ChickenWingsStatus.fried;
        console.log("\u70F9\u996A\u6B65\u9AA43---->[\u7116]\uFF1A\u5012\u5165\u53EF\u4E50\uFF0C\u5E76\u653E\u5165 " + ingredients.reduce(function (pre, current) { return pre += current.name + '、'; }, '') + "~\uFF0C\u5927\u706B\u7116\u81F3\u6C64\u6C41\u7C98\u7A20\uFF0C\u7136\u540E\u8F6C\u5C0F\u706B\u6536\u6C41\n");
    }
    else {
        throw new Error("\u70F9\u996A\u6B65\u9AA43---->[\u7116]\uFF1A\u54E6\u8C41\uFF0C\u70F9\u996A\u6B65\u9AA4\u9519\u4E86\uFF0C\u5236\u4F5C\u5931\u8D25\u4E86\u5462\uFF0C\u8BF7\u91CD\u65B0\u5236\u4F5C\u5427");
    }
}
exports.braise = braise;
