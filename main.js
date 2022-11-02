"use strict";
exports.__esModule = true;
exports.subMenu = void 0;
var readlineSync = require("readline-sync");
var ProductManager_1 = require("./src/ProductManager");
function menu() {
    console.log('1: Show list of products');
    console.log('2: Search product by name');
    console.log('3: Add new product');
    console.log('4: Edit product');
    console.log('5: Delete product');
    console.log('0: Exit');
}
function subMenu() {
    console.log('1: Edit name');
    console.log('2: Edit type');
    console.log('3: Edit price');
    console.log('4: Edit amount');
    console.log('5: Edit describe');
    console.log('0: Exit');
}
exports.subMenu = subMenu;
var isLoop = true;
while (isLoop) {
    menu();
    var number = readlineSync.question('Choose function:  ');
    switch (number) {
        case '1':
            ProductManager_1.ProductManager.showProducts();
            break;
        case '2':
            try {
                ProductManager_1.ProductManager.searchByName();
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        case '3':
            try {
                ProductManager_1.ProductManager.addProduct();
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        case '4':
            try {
                ProductManager_1.ProductManager.editProduct();
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        case '5':
            try {
                ProductManager_1.ProductManager.deleteProduct();
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        case '0':
            isLoop = false;
            break;
    }
}
