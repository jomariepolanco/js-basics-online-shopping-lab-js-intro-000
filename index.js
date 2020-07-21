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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    console.log(oneItem)
  } else if (cart.length === 2) {
    var twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    console.log(twoItems)
  } else {
    var cartData = [];
    for (var i = 0; i < cart.length - 1; i++) {
      cartData.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
  var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`
  }
  console.log(threePlusItems)
}
viewCart()


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
if (typeof cardNumber === undefined){
  return "Sorry, we don't have a credit card on file for you."
} else {
  cart = [];
  return `Your total cost is $${total}, which will be charged to the cart ${cardNumber}.`
}
}
