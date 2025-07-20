// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
let total = 0;
let counter = 0;

const cartList = document.getElementById("cart_list");
const totalPrice = document.getElementById("total_price");
const buttonCounter = document.getElementById("count_product");

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let product = products.find((p) => p.id === id);

    let productInCart = cart.find((p) => p.id === id);

    if (productInCart) {
        productInCart.quantity += 1;
        counter++;
    } else {
        product.quantity = 1;
        cart.push(product);
        counter++;
    }

    buttonCounter.innerText = counter;
}

// Exercise 2
function cleanCart () {
    cart.length = 0;
    total = 0;

    let totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = '0';
    }

    printCart();  
    console.log('Cart has been cleaned');
}

// Exercise 3
function calculateTotal ()  {
    // Calculate total price of the cart using the "cartList" array
    let calculateTotal = 0; 

    cart.forEach(item => {
        calculateTotal += (item.subtotalWithDiscount || item.price * item.quantity);
    });
    total = calculateTotal;
    updateTotalInDOM();
    return total;
}
   
// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
  cart.forEach(item => {
    item.subtotal = item.price * item.quantity
    if (item.id === 1 && item.quantity >= 3) {
        item.subtotalWithDiscount = item.subtotal * 0.8; // 20% descompte
    }
    else if (item.id === 3 && item.quantity >= 10) {
        item.subtotalWithDiscount = item.subtotal * 0.7; // 30% descompte
    }
    else {
        item.subtotalWithDiscount = item.subtotal;
    }
});

calculateTotal();
};

// Exercise 5
function printCart()  {
    // Fill the shopping cart modal manipulating the shopping cart dom
const cartListElement = document.getElementById('cart-list');
    if (!cartListElement) return console.error('Cart list element not found');

    cartListElement.innerHTML = '';
    if (cart.length === 0) {
        cartListElement.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.subtotalWithDiscount || item.price * item.quantity).toFixed(2)}`;
            cartListElement.appendChild(listItem);
        });
    }
    updateTotalInDOM();
}



// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    const i = cart.findIndex(product => product.id === id);

    if (i !== -1) {
        if (cart[i].quantity > 1) {
            cart[i].quantity -= 1;
        } else {
            cart.splice(i, 1); // elimina el producte si la quantitat és 1
        }

        applyPromotionsCart();
        calculateTotal();
        printCart();
        CartCount();
        }
    }

const open_modal = () =>  {
    printCart();
}
