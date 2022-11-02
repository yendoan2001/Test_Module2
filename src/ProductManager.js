"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var Product_1 = require("./Product");
var readlineSync = require("readline-sync");
var main_1 = require("../main");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager.showProducts = function () {
        console.table(this.products);
    };
    ProductManager.searchByName = function () {
        var name = readlineSync.question('Input name of product you want to search:  ');
        var product = this.findProductByName(name);
        if (product !== undefined) {
            console.table(product);
        }
        else
            throw new Error('This product is not existed');
    };
    ProductManager.findProductByName = function (name) {
        return this.products.find(function (product) {
            return product.name == name;
        });
    };
    ProductManager.addProduct = function () {
        var code = +readlineSync.question('Input code of product:  ');
        var product_find = this.findProduct(code);
        if (product_find == undefined) {
            var name_1 = readlineSync.question('Input name of product:  ');
            var type = readlineSync.question('Input type of product:  ');
            var price = +readlineSync.question('Input price of product:  ');
            var amount = +readlineSync.question('Input amount of products:  ');
            var describe = readlineSync.question('Input describe of product:  ');
            var date = new Date().toLocaleDateString();
            var product = new Product_1.Product(code, name_1, type, price, amount, date, describe);
            this.products.push(product);
        }
        else {
            throw new Error('This product is existed');
        }
    };
    ProductManager.editProduct = function () {
        var code = +readlineSync.question('Input code of product you want to edit:  ');
        var product = this.findProduct(code);
        if (product !== undefined) {
            var loop = true;
            while (loop) {
                (0, main_1.subMenu)();
                var number = readlineSync.question('Choose function:  ');
                switch (number) {
                    case '1':
                        var name_2 = readlineSync.question('Input new name of product:  ');
                        product.setName(name_2);
                        break;
                    case '2':
                        var type = readlineSync.question('Input new type of product:  ');
                        product.setType(type);
                        break;
                    case '3':
                        var price = +readlineSync.question('Input new price of product:  ');
                        product.setPrice(price);
                        break;
                    case '4':
                        var amount = +readlineSync.question('Input new amount of product:  ');
                        product.setAmount(amount);
                        break;
                    case '5':
                        var describe = readlineSync.question('Input new describe of product:  ');
                        product.setDescribe(describe);
                        break;
                    case '0':
                        loop = false;
                        break;
                }
            }
        }
    };
    ProductManager.deleteProduct = function () {
        var code = +readlineSync.question('Input code of product you want to delete:  ');
        var product = this.findProduct(code);
        if (product !== undefined) {
            ProductManager.products = ProductManager.products.filter(function (product) { return product.code !== code; });
        }
        else {
            throw new Error("This product is not existed");
        }
    };
    ProductManager.findProduct = function (code) {
        return this.products.find(function (product) {
            return product.code == code;
        });
    };
    ProductManager.products = [];
    return ProductManager;
}());
exports.ProductManager = ProductManager;
