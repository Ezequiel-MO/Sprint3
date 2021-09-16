// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
  {
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
var cartList = [];
var cart = [];
var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let item;
  for (let i = 0; i < products.length; i++) {
    if (i + 1 === id) {
      item = products[i];
      cartList.push(item);
    }
  }
  // 2. Add found product to the cartList array
  console.log("this is the cartList =>", cartList);
  return cartList;
}

// Exercise 2

function cleanSubTotal() {
  for (let [key, value] of Object.entries(subtotal)) {
    value.value = 0;
  }
  return subtotal;
}

function cleanDiscounts() {
  for (let [key, value] of Object.entries(subtotal)) {
    value.discount = 0;
  }
  return subtotal;
}

function cleanCart() {
  cartList.length = 0;
  cleanSubTotal();
  cleanDiscounts();
  console.log("this is the empty cartList =>", cartList);
  return cartList;
}

// Exercise 3
function calculateSubtotals() {
  cleanSubTotal();
  // 1. Create a for loop on the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    if (cartList[i].type === "grocery") {
      subtotal.grocery.value += cartList[i].price;
    } else if (cartList[i].type === "beauty") {
      subtotal.beauty.value += cartList[i].price;
    } else if (cartList[i].type === "clothes") {
      subtotal.clothes.value += cartList[i].price;
    } else return;
  }
  applyPromotionsSubtotals();
  console.log("this is the subtotal =>", subtotal);
  return subtotal;
}

// Exercise 4
function calculateTotal() {
  total = 0;
  // Calculate total price of the cart either using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  let totalDiscount = 0;
  for (key in subtotal) {
    totalDiscount += subtotal[key].discount;
    console.log("total discountzz =>", totalDiscount);
  }
  total = total - totalDiscount;
  console.log("this is the total =>", total);
  return total;
}

// Exercise 5
function applyPromotionsSubtotals() {
  let oilCounter = 0;
  let cupcakeCounter = 0;
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name === "cooking oil") {
      oilCounter++;
    } else if (cartList[i].name === "Instant cupcake mixture") {
      cupcakeCounter++;
    }
  }
  if (oilCounter >= 3) {
    subtotal["grocery"].discount += oilCounter * 0.5;
    console.log("discount oil=>", oilCounter * 0.5);
  }

  if (cupcakeCounter >= 10) {
    let cupcakePrice = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === "Instant cupcake mixture") {
        cupcakePrice = products[i].price;
      }
    }
    subtotal["grocery"].discount += Math.round(
      cupcakeCounter * (cupcakePrice / 3)
    ).toFixed(2);
  }

  console.log("subtotal with discount =>", subtotal);
  return subtotal;
}

// Exercise 6
function generateCart() {
  let cartItem = {};
  let quantityCounter = 1;
  let index;
  for (let i = 0; i < cartList.length; i++) {
    if (cart.some((item) => item.name === cartList[i].name)) {
      quantityCounter++;

      index = cart.findIndex((item) => item.name === cartList[i].name);
      cart[index].quantity = quantityCounter;
    } else {
      quantityCounter = 1;
      cartItem = { ...cartList[i], quantity: quantityCounter };
      cart.push(cartItem);
    }
    console.log(quantityCounter);
  }
  applyPromotionsCart();
  console.log("this is the cart=>", cart);
}

// Exercise 7
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    cart[i].subtotal = cart[i].quantity * cart[i].price;
    if (cart[i].name === "cooking oil" && cart[i].quantity >=3) {
      cart[i].subtotalWithDiscount = cart[i].quantity * (cart[i].price - 0.5);
    } else if (cart[i].name === "Instant cupcake mixture" && cart[i].quantity >=10) {
      cart[i].subtotalWithDiscount = Math.round(
        (cart[i].quantity * cart[i].price * 2) / 3
      );
    }
  }
  return cart;
}

// Exercise 8
function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let cartItem = {}
  let selectedItem;
  let index;

  for (let i=0; i<products.length; i++){
    if (i +1 === id) {
      selectedItem = products[i];
    }
  }

  if(cart.some(item => selectedItem.name === item.name)){
    index = cart.findIndex((item) => item.name === selectedItem.name);
    cart[index].quantity = cart[index].quantity + 1;
    cart[index].subtotal = cart[index].price *cart[index].quantity; 
    
    if(cart[index].name === 'cooking oil'){
      if(cart[index].quantity >= 3){
        cart[index].subtotalWithDiscount = cart[index].quantity * (cart[index].price - 0.5);
      } 
    } else if (cart[index].name === 'Instant cupcake mixture'){
      if(cart[index].quantity >= 10){
        cart[index].subtotalWithDiscount = Math.round(
          (cart[index].quantity * cart[index].price * 2) / 3
        );
      }
    } 
  } else {
    cartItem = {
      ...selectedItem,
      quantity: 1,
      subtotal: selectedItem.price,
    }
    cart.push(cartItem)
  }
  
}

// Exercise 9

const deleteSubtotalWithDiscountProperty = selectedItem => delete selectedItem.subtotalWithDiscount


  
  const checkIfDiscountsApplyAndUpdate = selectedItem => {
    const isCookingOil = selectedItem.name === "cooking oil"
    const isInstantCupcakeMixture = selectedItem.name === "Instant cupcake mixture"
    const LessThan3Units = selectedItem.quantity < 3
    const LessThan10Units = selectedItem.quantity < 10
  if (isCookingOil) {
        if (LessThan3Units) {
          deleteSubtotalWithDiscountProperty(selectedItem)
        } else {
          selectedItem.subtotalWithDiscount =
            selectedItem.quantity * (selectedItem.price - 0.5);
        }
      } else {
        if (isInstantCupcakeMixture) {
          if (LessThan10Units) {
            deleteSubtotalWithDiscountProperty(selectedItem)
          } else {
            selectedItem.subtotalWithDiscount = Math.round(
              (selectedItem.quantity * selectedItem.price * 2) / 3
            );
          }
        }
      }
    }


const updateQuantityAndSubtotal= (selectedItem) =>{
  selectedItem.quantity = selectedItem.quantity -1 ;
  selectedItem.subtotal = selectedItem.quantity * selectedItem.price;
}


const findPositionInCartItemToRemove = selectedItem =>  cart.findIndex((item) => item.name === selectedItem.name);
 
const removeSelectedItemfromCart = position => {
  cart.splice(position, 1);
}

const isSelectedItemInCart = selectedItem => cart.some((item) => selectedItem.name === item.name)

const findSelectedItem = id => {
  let selectedItem;
  for (let i=0; i<cart.length; i++){
    if (i+1 === id) {
      selectedItem = cart[i];
    }
  }
  return selectedItem;
}


function removeFromCart(id) {
  const selectedItem = findSelectedItem(id)
  const moreThanOneSelectedItemInCart =  selectedItem.quantity > 1

  if (isSelectedItemInCart(selectedItem)) {

    if (moreThanOneSelectedItemInCart) {
      updateQuantityAndSubtotal(selectedItem)
      checkIfDiscountsApplyAndUpdate(selectedItem)
      
    } else {
      const position = findPositionInCartItemToRemove(selectedItem)
      removeSelectedItemfromCart(position)
    }
  }
  console.log("cart>=", cart);
}

//problemas - 
//al disminuir la cantidad, el subtotal no se actualiza
//al eliminar un elemento único, no se queda vacío el carrito

// Exercise 10
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}