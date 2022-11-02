import {Product} from "./Product";
import * as readlineSync from "readline-sync";
import {subMenu} from "../main";


export class ProductManager {
    static products: Product[] = [];

    static showProducts() {
        console.table(this.products);

    }

    static searchByName(): void {
        let name = readlineSync.question('Input name of product you want to search:  ');
        let product = this.findProductByName(name);
        if (product !== undefined) {
            console.table(product);
        } else throw new Error('This product is not existed')
    }

    static findProductByName(name: string): Product | undefined {
        return this.products.find(product => {
            return product.name == name;
        })
    }


    static addProduct() {
        let code = +readlineSync.question('Input code of product:  ');
        let product_find = this.findProduct(code);
        if (product_find == undefined) {
            let name = readlineSync.question('Input name of product:  ');
            let type = readlineSync.question('Input type of product:  ');
            let price = +readlineSync.question('Input price of product:  ');
            let amount = +readlineSync.question('Input amount of products:  ');
            let describe = readlineSync.question('Input describe of product:  ');
            let date = new Date().toLocaleDateString();
            let product = new Product(code, name, type, price, amount, date, describe);
            this.products.push(product);
        } else {
            throw new Error('This product is existed');
        }
    }

    static editProduct() {
        let code = +readlineSync.question('Input code of product you want to edit:  ');
        let product = this.findProduct(code);
        if (product !== undefined) {
            let loop = true;
            while (loop) {
                subMenu();
                let number = readlineSync.question('Choose function:  ');
                switch (number) {
                    case '1':
                        let name = readlineSync.question('Input new name of product:  ');
                        product.setName(name);
                        break;
                    case '2':
                        let type = readlineSync.question('Input new type of product:  ');
                        product.setType(type);
                        break;
                    case '3':
                        let price = +readlineSync.question('Input new price of product:  ');
                        product.setPrice(price);
                        break;
                    case '4':
                        let amount = +readlineSync.question('Input new amount of product:  ');
                        product.setAmount(amount);
                        break;
                    case '5':
                        let describe = readlineSync.question('Input new describe of product:  ');
                        product.setDescribe(describe);
                        break;
                    case '0':
                        loop = false;
                        break;
                }
            }

        }
    }

    static deleteProduct() {
        let code = +readlineSync.question('Input code of product you want to delete:  ');
        let product = this.findProduct(code);
        if (product !== undefined) {
            ProductManager.products = ProductManager.products.filter(product => product.code !== code);
        } else {
            throw new Error("This product is not existed");
        }
    }


    static findProduct(code: number): Product | undefined {
        return this.products.find(product => {
            return product.code == code;
        })
    }

}


