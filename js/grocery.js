// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let item;
    for (let i=0; i<products.length; i++){
        if (i+1 === id) {
            item = products[i]
            cartList.push(item);
        } 
    }
    // 2. Add found product to the cartList array
    console.log("this is the cartList =>", cartList)
    return cartList;
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  total=0;
  for (let [key,value] of Object.entries(subtotal)){
      value.value=0;
  }
  console.log("this is the empty cartList =>", subtotal)
  return cartList;
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    for (let i=0; i<cartList.length; i++){
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if (cartList[i].type === 'grocery'){
            subtotal.grocery.value += cartList[i].price
        }
        else if (cartList[i].type === 'beauty'){
            subtotal.beauty.value += cartList[i].price
        }
        else if (cartList[i].type === 'clothes'){
            subtotal.clothes.value += cartList[i].price
        }
    }
    console.log("this is the subtotal =>", subtotal)
  return subtotal
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for (let i=0; i<cartList.length; i++){
        total += cartList[i].price
    }
    console.log("this is the total =>", total)
    return total;
}

// Exercise 5
function applyPromotionsSubtotals() {
 
}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}