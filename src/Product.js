"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(code, name, type, price, amount, date, describe) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
        this.date = date;
        this.describe = describe;
    }
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setType = function (type) {
        this.type = type;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Product.prototype.setDescribe = function (describe) {
        this.describe = describe;
    };
    return Product;
}());
exports.Product = Product;
