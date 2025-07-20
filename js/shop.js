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
        cart.push(product);
        counter++;
    }

    buttonCounter.innerText = counter;
}

// Exercise 2
function cleanCart() {
    cart = [];
    cartList.innerHTML = "";
    totalPrice.innerText = 0;
    counter = 0;
    buttonCounter.innerText = counter;
}

// Exercise 3
function calculateTotal ()  {
    // Calculate total price of the cart using the "cartList" array
 total = 0;
    cart.forEach((p) => (total += p.price * p.quantity));
    return total;
}
   
// Exercise 4
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
    let totalWithDiscount = 0;
    cart.forEach((p) => {
        if (p.offer && p.quantity >= p.offer.number) {
            p.subtotalWithDiscount =
                p.quantity * p.price * (1 - p.offer.percent / 100);
        } else {
            p.subtotalWithDiscount = p.quantity * p.price;
        }
        totalWithDiscount += p.subtotalWithDiscount;
    });

    return totalWithDiscount;
}

// Exercise 5
function printCart()  {
    // Fill the shopping cart modal manipulating the shopping cart dom
cartList.innerHTML = "";
    totalPrice.innerText = "";

    const totalWithDiscount = applyPromotionsCart(cart);

    cart.forEach((p) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        th.setAttribute("scope", "row");
        th.innerText = p.name;
        td1.innerText = p.price;
        td2.innerText = p.qty;
        td3.innerText = p.subtotalWithDiscount.toFixed(2);

        tr.append(th, td1, td2, td3);

        cartList.append(tr);
    });

    totalPrice.innerText = totalWithDiscount.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    const index = cart.findIndex((p) => p.id === id);

    if (index !== -1) {
        if (cart[index].qty > 1) {
            cart[index].qty -= 1;
        } else {
            cart.splice(index, 1);
        }
    }

    counter = 0;
    cart.forEach((p) => {
        counter += p.qty;
    });

    printCart();
    buttonCounter.innerText = counter;
}

function open_modal() {
    printCart();
}