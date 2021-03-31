import { fruits } from '../products/products.js';
import { cart } from '../cart/cart-data.js';
import { findById, calcItemTotal } from '../utils.js';
console.log(calcItemTotal(cart, fruits));