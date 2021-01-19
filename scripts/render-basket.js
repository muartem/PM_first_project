let basket = []
const CART_counter = document.querySelector('.cart-counter')
const CART_pricer = document.querySelector('.cart-price')

updateCart(BASKET.elements, BASKET.price)

function updateCart(count, price){
    CART_counter.innerText = count
    CART_pricer.innerText = price + " " + CURRENCY
}