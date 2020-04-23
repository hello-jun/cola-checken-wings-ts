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
        var _this = _super.call(this, 8, '新鲜的鸡翅', '块') || this;
        _this._status = _status;
        return _this;
    }
    ChickenWings.prototype.describe = function () {
        console.log("鸡翅：凌晨3点，来自新西兰农场的原生态鸡翅，可能是世界上肉质最好的鸡翅之一！");
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
        return _super.call(this, 2, '盐', '克') || this;
    }
    Salt.prototype.describe = function () {
        console.log("盐 ：昼夜交错时分，取自千年盐都自贡东源井最深处深处的一钵盐，极致提鲜");
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
        console.log("生抽：海天特级金标生抽，一滴入味，两滴入髓");
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
        return _super.call(this, 2, '姜', '片') || this;
    }
    Ginger.prototype.describe = function () {
        console.log('姜 ：外婆家种的生姜，儿时的味道');
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
        console.log('八角：广西表哥送的八角，每一个角，都是表哥的爱');
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
        return _super.call(this, 1, '葱', '根') || this;
    }
    Scallion.prototype.describe = function () {
        console.log('葱 ：与邻居小姐姐一起种下的葱，如今都已亭亭玉立');
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
        console.log('料酒：取自一瓶朴实无华的没有品牌标签的料酒');
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
        console.log('可乐：一瓶82年的可乐，年代稍微有点久远，喝了可能会上头');
    };
    return Cola;
}(Ingredient));
exports.Cola = Cola;
