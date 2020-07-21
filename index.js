var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //randomly generate price between 1 and 100
 let min = 1
 let max = 100
 let random = Math.floor(Math.random() * (max - min)) + min
//create new object representing item consisting of itemName: itemPrice
var itemObject = {
  itemName: item,
  itemPrice: random
}
//add items to cart
cart.push(itemObject)
//return itemName has been added to your cart. after adding new item to cart
return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  //if cart is empty, return "Your shopping cart is empty"

  if (cart.length === 0) {
    return "Your shopping cart is empty."
    //1 item in cart
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    //2 items in cart
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    //3+ items in cart
  } else {
    //loop through cart
    var plusThreeItems = "";
    for (var i = 0; i < cart.length; i++) {
      plusThreeItems = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    console.log(`${plusThreeItems}, and ${cart[cart.length].itemName} at $${cart[cart.length].itemPrice}.`);
  }
}



function total() {
  // write your code here
var totalSum = 0;
for (let i = 0; i < cart.length; i++) {
  totalSum += cart[i].itemPrice;
}
console.log(total);
}

function removeFromCart(item) {
  // write your code here
//if item is there, remove from cart destructively
for (let i = 0; i < cart.length; i++) {
  if (item === cart[i].itemName) {
    cart.splice(i,1);
    return cart;
  } else {
    console.log("That item is not in your cart.")
  }
}
//if not, return "that item is not in your cart"

}

function placeOrder(cardNumber) {
  // write your code here

}
