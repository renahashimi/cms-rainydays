export function getCart() {

    const cartItems = localStorage.getItem("cartItems");

    
    if (!cartItems) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
};

function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
