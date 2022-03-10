class Grocery {
    id : number
    name : string;
    quantity : number;
    price : number;

    constructor(id : number, name : string, quantity : number, price : number){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addCart(newItem){
    return ("You have " + newItem.quantity + " " + newItem.name + " that cost $" + newItem.price + "\n")
}

let groc_LemonBars = new Grocery(1, "Lemon Bars", 4, 4.98);
let groc_AppleFrit = new Grocery(2, "Apple Fritters", 6, 2.97);
let groc_FrostSugCook = new Grocery(3, "Frosted Sugar Cookies", 20, 5.98);
let groc_MntBttrCook = new Grocery(4, "Mint Buttercreme Sugar Cookies", 8, 3.98)


let groceries= [
    addCart(groc_LemonBars),
    addCart(groc_AppleFrit),
    addCart(groc_FrostSugCook),
    addCart(groc_MntBttrCook)
];

var table = document.getElementById('shopping_cart').getElementsByTagName('tbody')[0];

for (var i = 0; i < groceries.length; i++) {

    var newRow = table.insertRow();

    var newCell = newRow.insertCell();

    var newText = document.createTextNode(groceries[i]);

    newCell.appendChild(newText);
}











