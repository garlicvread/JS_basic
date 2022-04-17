// Function makeTotalPrice
// Input: An object in the form of {quantity1: number, price1: number, quantity2: number, price2: number}
// Output: quantity1 * price1 + quantity2 * price2

function makeTotalPrice(obj) {
    return obj.quantity1 * obj.price1 + obj.quantity2 * obj.price2;
}

let inputA = {
    quantity1: 4,
    price1: 500,
    quantity2: 2,
    price2: 300
};

document.writeln(makeTotalPrice(inputA));
