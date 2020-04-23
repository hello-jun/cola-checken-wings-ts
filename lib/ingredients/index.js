"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 抽象定义食材
 */
var Ingredient = /** @class */ (function () {
    function Ingredient(amount, name, unit) {
        this.amount = amount;
        this.name = name;
        this.unit = unit;
        this.describe();
    }
    Ingredient.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Ingredient;
}());
exports.Ingredient = Ingredient;
/**
 * 鸡翅状态值
 */
exports.ChickenWingsStatus = {
    raw: 'raw',
    pickled: 'pickled',
    fried: 'fried',
    ok: 'ok',
};
/**
 * 鸡翅
 */
var ChickenWings = /** @class */ (function (_super) {
    __extends(ChickenWings, _super);
    function ChickenWings(_status) {
        if (_status === void 0) { _status = 'raw'; }
        var _this = _super.call(this, 8, '鸡翅', '块') || this;
        _this._status = _status;
        return _this;
    }
    ChickenWings.prototype.describe = function () {
        console.log(this.name.padStart(2, ' ') + " X " + this.amount + this.unit + "\uFF1A\u51CC\u66683\u70B9\uFF0C\u6765\u81EA\u65B0\u897F\u5170\u519C\u573A\u7684\u539F\u751F\u6001\u9E21\u7FC5\uFF0C\u53EF\u80FD\u662F\u4E16\u754C\u4E0A\u8089\u8D28\u6700\u597D\u7684\u9E21\u7FC5\u4E4B\u4E00\uFF01");
    };
    Object.defineProperty(ChickenWings.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    return ChickenWings;
}(Ingredient));
exports.ChickenWings = ChickenWings;
/**
 * 盐
 */
var Salt = /** @class */ (function (_super) {
    __extends(Salt, _super);
    function Salt() {
        return _super.call(this, 2, '精盐', '克') || this;
    }
    Salt.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u663C\u591C\u4EA4\u9519\u65F6\u5206\uFF0C\u53D6\u81EA\u5343\u5E74\u76D0\u90FD\u81EA\u8D21\u4E1C\u6E90\u4E95\u6700\u6DF1\u5904\u6DF1\u5904\u7684\u4E00\u94B5\u76D0\uFF0C\u6781\u81F4\u63D0\u9C9C");
    };
    return Salt;
}(Ingredient));
exports.Salt = Salt;
/**
 * 生抽
 */
var SoySauce = /** @class */ (function (_super) {
    __extends(SoySauce, _super);
    function SoySauce() {
        return _super.call(this, 10, '生抽', '毫升') || this;
    }
    SoySauce.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u6D77\u5929\u7279\u7EA7\u91D1\u6807\u751F\u62BD\uFF0C\u4E00\u6EF4\u5165\u5473\uFF0C\u4E24\u6EF4\u5165\u9AD3");
    };
    return SoySauce;
}(Ingredient));
exports.SoySauce = SoySauce;
/**
 * 姜
 */
var Ginger = /** @class */ (function (_super) {
    __extends(Ginger, _super);
    function Ginger() {
        return _super.call(this, 2, '生姜', '片') || this;
    }
    Ginger.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u5916\u5A46\u5BB6\u79CD\u7684\u751F\u59DC\uFF0C\u513F\u65F6\u7684\u5473\u9053");
    };
    return Ginger;
}(Ingredient));
exports.Ginger = Ginger;
/**
 * 八角
 */
var StarAnise = /** @class */ (function (_super) {
    __extends(StarAnise, _super);
    function StarAnise() {
        return _super.call(this, 2, '八角', '个') || this;
    }
    StarAnise.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u5E7F\u897F\u8868\u54E5\u9001\u7684\u516B\u89D2\uFF0C\u6BCF\u4E00\u4E2A\u89D2\uFF0C\u90FD\u662F\u8868\u54E5\u7684\u7231");
    };
    return StarAnise;
}(Ingredient));
exports.StarAnise = StarAnise;
/**
 * 葱
 */
var Scallion = /** @class */ (function (_super) {
    __extends(Scallion, _super);
    function Scallion() {
        return _super.call(this, 1, '香葱', '根') || this;
    }
    Scallion.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u4E0E\u90BB\u5C45\u5C0F\u59D0\u59D0\u4E00\u8D77\u79CD\u4E0B\u7684\u8471\uFF0C\u5982\u4ECA\u90FD\u5DF2\u4EAD\u4EAD\u7389\u7ACB");
    };
    return Scallion;
}(Ingredient));
exports.Scallion = Scallion;
/**
 * 料酒
 */
var CookingWine = /** @class */ (function (_super) {
    __extends(CookingWine, _super);
    function CookingWine() {
        return _super.call(this, 20, '料酒', '毫升') || this;
    }
    CookingWine.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u53D6\u81EA\u4E00\u74F6\u6734\u5B9E\u65E0\u534E\u7684\u6CA1\u6709\u54C1\u724C\u6807\u7B7E\u7684\u6599\u9152");
    };
    return CookingWine;
}(Ingredient));
exports.CookingWine = CookingWine;
/**
 * 可乐
 */
var Cola = /** @class */ (function (_super) {
    __extends(Cola, _super);
    function Cola() {
        return _super.call(this, 500, '可乐', '毫升') || this;
    }
    Cola.prototype.describe = function () {
        console.log(this.name + " X " + this.amount + this.unit + "\uFF1A\u4E00\u74F682\u5E74\u7684\u53EF\u4E50\uFF0C\u5E74\u4EE3\u7A0D\u5FAE\u6709\u70B9\u4E45\u8FDC\uFF0C\u559D\u4E86\u53EF\u80FD\u4F1A\u4E0A\u5934");
    };
    return Cola;
}(Ingredient));
exports.Cola = Cola;
