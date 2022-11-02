export class Product {
    code: number;
    name: string;
    type: string;
    price: number;
    amount: number;
    date: string;
    describe: string;

    constructor(code: number,
                name: string,
                type: string,
                price: number,
                amount: number,
                date: string,
                describe: string) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
        this.date = date;
        this.describe = describe;
    }

    setName(name: string) {
        this.name = name;
    }

    setType(type: string) {
        this.type = type;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setAmount(amount: number) {
        this.amount = amount;
    }

    setDescribe(describe: string) {
        this.describe = describe;
    }

}