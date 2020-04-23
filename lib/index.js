"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 从头到尾输出一分 可乐鸡翅
var ingredients = __importStar(require("./ingredients"));
var cookingMethods = __importStar(require("./cookingMethods"));
require("./copyright");
console.log('=========== START ==============\n');
/**
 * 烹饪步骤枚举
 */
var Steps;
(function (Steps) {
    Steps["pickle"] = "pickle";
    Steps["fry"] = "fry";
    Steps["braise"] = "braise";
})(Steps || (Steps = {}));
/**
 * 食材枚举
 */
var Ingredients;
(function (Ingredients) {
    Ingredients["chickenWings"] = "ChickenWings";
    Ingredients["salt"] = "Salt";
    Ingredients["soySauce"] = "SoySauce";
    Ingredients["ginger"] = "Ginger";
    Ingredients["starAnise"] = "StarAnise";
    Ingredients["scallion"] = "Scallion";
    Ingredients["cookingWine"] = "CookingWine";
    Ingredients["cola"] = "Cola";
})(Ingredients || (Ingredients = {}));
var basket = Object.create(null); // 所有的菜都放到篮子里
/**
 * 初始化食材
 */
~function initIngredients() {
    console.log('>>>>>>>准备食材---->\n');
    for (var _i = 0, _a = Object.entries(Ingredients); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        basket[key] = new ingredients[value]();
    }
    console.log('\n>>>>>>>预处理食材---->\n');
    for (var _c = 0, _d = Object.entries(basket); _c < _d.length; _c++) {
        var _e = _d[_c], key = _e[0], value = _e[1];
        basket[key] = prepareIngredients(value);
    }
}();
/**
 * 预处理食材，如清洗
 * @param ingredient
 */
function prepareIngredients(ingredient) {
    console.log("\u6E05\u6D17\u6216\u5207\u6216\u76DB\u7897---->" + ingredient.name);
    // do something
    return ingredient;
}
/**
 * 步骤迭代生成器
 */
function createIterator() {
    var _i, _a, _b, key, value;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _i = 0, _a = Object.entries(Steps);
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                _b = _a[_i], key = _b[0], value = _b[1];
                return [4 /*yield*/, value];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var stepsIterator = createIterator(); // 自己会做类型推导
var done = false; // 是否完成
var chickenWings = basket.chickenWings, cookingWine = basket.cookingWine, salt = basket.salt, soySauce = basket.soySauce, ginger = basket.ginger, starAnise = basket.starAnise, scallion = basket.scallion, cola = basket.cola;
console.log('\n>>>>>>>开始烹饪，根据鸡肉状态---->[腌制]---->[煎炸]---->[焖]\n');
while (!done) { //遍历迭代器控制烹饪步骤顺序
    var step = stepsIterator.next();
    done = step.done; // 断言
    var stepName = !done && step.value;
    if (typeof stepName !== 'boolean')
        cookingMethods[stepName](chickenWings, cookingWine, salt, soySauce, ginger, starAnise, scallion, cola);
}
console.log('=========== END ==============\n');
console.log('可乐鸡翅制作完成！\n');
console.log('注：如需导出菜谱，请在项目root dir 执行: tsc ,将会自动生成 .d.ts声明文件至 lib 目录下');
