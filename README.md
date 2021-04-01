## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


Local Storage
Need to set and get cart cart array using local storage
Will require 3 functions
To set: `setCart()`
    need to stringify cart data so that it is serialized `.stringify`
    need to set cart `.setItem('key', [cartArray])` first parameter is the cart name key, second is the cart array (parsed)
To get: `getCart()`
    will only get cart if the cart exists, if not will return an empty array `if(cartTruthy) return' else return [];`
    cart needs to be parsed so we can use it as an object  `JSON.parse`

Need to add items to the cart `addItemsToCart`
    needs to take in the id of the current product. `product.id`  Will be called in an event listener on the products  `li`  ??
    On click:
        Does item exist in Cart 
            get cart `getCart` should be as an array of objects
            save cart to a variable (so it can be pushed to)
            loop through cart and use  `findById` to see if it exists
                if find by id returns a match increment product quantity `cartItem.quantity++`
                else create an object for the product with the proper id (from findById)
                push this product to the cart array (which will be an empty array on first click because getCart will create it if no items are currently in cart)
                finally set the cart `setCart(cart)`

 event listner on submit order
    On Click:
        alert there purchase `alert` display what they purchased  (cart should be saved in a var by now?? otherwise getCart again?)  
             