import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const localCart = localStorage.getItem(CART);
    const JsCart = JSON.parse(localCart);

    if (localCart) {
        return JsCart;
    } else {
        return [];
    }

}

export function setCart(JsCart){
    const localCart = JSON.stringify(JsCart);
    localStorage.setItem(CART, localCart);
    
}

export function addToCart(productId){
    const cart = getCart();

    const existingCartItem = findById(cart, productId);

    if (existingCartItem){
        existingCartItem.quantity++;
    } else {
        const newCartItem = 
        {   
            id: productId,
            quantity: 1
        };

        cart.push(newCartItem);
    }
    setCart(cart);
}