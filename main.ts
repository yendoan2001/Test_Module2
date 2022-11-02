import * as readlineSync from "readline-sync";
import {ProductManager} from "./src/ProductManager";

function menu() {
    console.log('1: Show list of products');
    console.log('2: Search product by name');
    console.log('3: Add new product');
    console.log('4: Edit product');
    console.log('5: Delete product');
    console.log('0: Exit')
}
export function subMenu(){
    console.log('1: Edit name');
    console.log('2: Edit type');
    console.log('3: Edit price');
    console.log('4: Edit amount');
    console.log('5: Edit describe');
    console.log('0: Exit')
}

let isLoop = true;
while (isLoop) {
    menu()
    let number = readlineSync.question('Choose function:  ');
    switch (number) {
        case '1':
            ProductManager.showProducts();
            break;
        case '2':
            try {
                ProductManager.searchByName();
            } catch (e) {
                console.log(e.message);
            }
            break;
        case '3':
            try {
                ProductManager.addProduct();
            } catch (e) {
                console.log(e.message);
            }
            break;
        case '4':
            try {
                ProductManager.editProduct();
            } catch (e) {
                console.log(e.message);
            }
            break;
        case '5':
            try {
                ProductManager.deleteProduct();

            } catch (e) {
                console.log(e.message);
            }
            break;
        case '0':
            isLoop = false;
            break;
    }
}






