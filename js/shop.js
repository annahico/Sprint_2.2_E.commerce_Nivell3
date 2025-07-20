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
;

// Exercise 1
function buy(id) {
    console.log(`Intentant afegir producte amb ID: ${id}`);
    let product = products.find((p) => p.id === id);
    
    if (!product) {
        console.error(`Producte amb ID ${id} no trobat!`);
        return;
    }

    console.log('Producte trobat:', product);
    
    let productInCart = cart.find((p) => p.id === id);

    if (productInCart) {
        productInCart.quantity += 1;
        counter++;
        console.log(`Incrementant quantitat del producte ${id}. Nova quantitat: ${productInCart.quantity}`);
    } else {
        product.quantity = 1;
        cart.push(product);
        counter++;
        console.log(`Afegint nou producte ${id} al carret. Quantitat inicial: 1`);
    }

    buttonCounter.innerText = counter;
    console.log('Carret actual:', cart);
    console.log('Comptador total:', counter);
}
// Exercise 2
function cleanCart() {
    console.log('Netejant carret...');
    cart.length = 0; 
    cartList.innerHTML = "";
    totalPrice.innerText = 0;
    counter = 0;
    buttonCounter.innerText = counter;
    console.log('Carret després de netejar:', cart);
}

// Exercise 3
function calculateTotal() {
    console.log('Calculant total...');
    let calculatedTotal = 0;
    cart.forEach((p) => {
        console.log(`Producte: ${p.name}, Preu: ${p.price}, Quantitat: ${p.quantity}`);
        calculatedTotal += p.price * p.quantity;
    });
    console.log('Total calculat:', calculatedTotal);
    return calculatedTotal;
}

// Exercise 4
function applyPromotionsCart(cart) {
    console.log('Aplicant promocions...');
    let totalWithDiscount = 0;
    cart.forEach((p) => {
        if (p.offer && p.quantity >= p.offer.number) {
            p.subtotalWithDiscount = p.quantity * p.price * (1 - p.offer.percent / 100);
            console.log(`Aplicat descompte a ${p.name}: ${p.offer.percent}%`);
        } else {
            p.subtotalWithDiscount = p.quantity * p.price;
        }
        totalWithDiscount += p.subtotalWithDiscount;
        console.log(`Subtotal per ${p.name}: ${p.subtotalWithDiscount.toFixed(2)}`);
    });
    console.log('Total amb descomptes:', totalWithDiscount.toFixed(2));
    return totalWithDiscount;
}

// Exercise 5
function printCart() {
    console.log('Imprimint carret...');
    cartList.innerHTML = "";
    totalPrice.innerText = "";

    const totalWithDiscount = applyPromotionsCart(cart);
    console.log('Productes a mostrar:', cart);

    if (cart.length === 0) {
        console.log('El carret està buit');
        cartList.innerHTML = '<tr><td colspan="4">El carret està buit</td></tr>';
    } else {
        cart.forEach((p) => {
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");

            th.setAttribute("scope", "row");
            th.innerText = p.name;
            td1.innerText = p.price;
            td2.innerText = p.quantity;
            td3.innerText = p.subtotalWithDiscount.toFixed(2);

            tr.append(th, td1, td2, td3);
            cartList.append(tr);
        });
    }

    totalPrice.innerText = totalWithDiscount.toFixed(2);
    console.log('Total mostrat:', totalWithDiscount.toFixed(2));
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    console.log(`Intentant eliminar producte amb ID: ${id}`);
    const index = cart.findIndex((p) => p.id === id);

    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            console.log(`Reduint quantitat del producte ${id}. Nova quantitat: ${cart[index].quantity}`);
        } else {
            cart.splice(index, 1);
            console.log(`Eliminant producte ${id} del carret`);
        }
    } else {
        console.warn(`Producte amb ID ${id} no trobat al carret`);
    }

    counter = 0;
    cart.forEach((p) => {
        counter += p.quantity;
    });

    printCart();
    buttonCounter.innerText = counter;
    console.log('Nou comptador:', counter);
}

function open_modal() {
    console.log('Obrint modal del carret...');
    printCart();
}