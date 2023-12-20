/* ALL THE WRONG CODES



      numberOfItems.innerHTML =  `<p class="carttotal"> ${numberOfItemsNow.length}`;
    
      numberOfItems.innerHTML += `<p class="carttotal"> ${numberOfItemsNow.length}`;
      */
      



/*const params = new URLSearchParams (window.location.search);
const id = params.get ("id");
const productId = "https://api.noroff.dev/api/v1/rainy-days/" + id;


const cartContainer = document.querySelector(".cartcontainer");
const cartContent = document.querySelector(".cartcontent");
const backToShop = document.querySelector (".content4");
const totalSum = document.querySelector(".totalsum");
const removeItem = document.querySelector(".remove");


import { getCart } from "./data/getCart.js";
import { errorMessage } from "./errormessage.js";
import { apiUrl } from "./script.js";
import { getApiProduct } from "./data/getapiproductsingle.js";

/*
fetch(getApiProduct)
.then(function(response) {
  return response.json();
  
})
.then(function(data) {
  localStorage.setItem("cartItems", JSON.stringify(data));
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
    
  }
});
*/



let productInCart = JSON.parse(localStorage.getItem("cartItems"));
let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));


const cartContent = document.querySelector(".cartcontainer");
const totalPrice = document.querySelector(".totalsum");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".backtoshop");
const numberOfItems = document.querySelector (".cartnumber");
try {


  cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
  numberOfItems.innerHTML += `<p>${productInCart.length}</p>`;
console.log(numberOfItems);


  backToShop.innerHTML = "";
  backToShop.innerHTML += `<div><h2> GO BACK TO </h2>
                            <div class ="backtoshoplist">                              
                              <p><a href="women.html">woman</a></p>
                              <p><a href="index.html">homepage</a></p>
                              <p><a href="men.html">men</a></p>
                            </div>`;

  //cartContent.innerHTML += `<div><p class="noitems">No products in cart</p></div>`;
  //getCart(cartItems);

/*
  const title = productInCart.title;
  const image = productInCart.image;
  const price = productInCart.price;
  const itemId = productInCart.id;*/
 //document.querySelector(".cartcontainer").innerHTML = localStorage.getItem("cartItems",);


function addToCart (){
/*let cartContent = JSON.getItem("cartItems", product);*/
let total = 0;
if (productInCart!==null) {
   cartContent.innerHTML += `<div><p class="noitems">No products in cart</p></div>`;

} else {


productInCart.forEach(cart => {
  cartContent.innerHTML += `<div class="cartcontainer1" jacket-id="${cart.id}
  <div class="cartInfo">
    <div class="cartcontent">
      <div class="cartimage" <img src="url(${cart.image})" alt"${cart.title} cover"></div>

        <div>
          <h2 class="productname">${cart.title}</h2>
          <p class="productPrice">$${cart.price}</p>

        </div>
        </div>
        <div class="removebtn">remove</div>   
      </a>
      </div>
</div>`;
  
});

};





/*
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
cartItems.forEach(cart => {


  
  
});*/
}  


addToCart();
}catch(error) {
  console.log("Unknown error", error);
  cartContent.innerHTML = errorMessage();
}



/*
let total = 0;

cartItems.forEach(cartItems => {
  
  
});


  
  */
  /*cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${cartItems.id}
  <div class="cartInfo">
    <div class="cartcontent">
      <div class="cartimage" <img src="url(${cartItems.image})" alt"${cartItems.title} cover"></div>

        <div>
          <h2 class="productname">${cartItems.title}</h2>
          <p class="productPrice">$${cartItems.price}</p>

        </div>
        </div>
        <div class="removebtn">remove</div>   
      </a>
      </div>
</div>`;
  
  
  
  
  
  
  
  
  cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${jacket.id}
  <div class="cartInfo">
    <div class="cartcontent">
      <div class="cartimage" <img src="url(${jacket.image})" alt"${jacket.title} cover"></div>

        <div>
          <h2 class="productname">${jacket.title}</h2>
          <p class="productPrice">$${jacket.price}</p>

        </div>
        </div>
        <div class="removebtn">remove</div>   
      </a>
      </div>
</div>`;
}
*/

//localStorage.setItem("cartItems", JSON.stringify(cartItems));
 
/*    localStorage.getItem("cartItems");
    cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${cartItems.id}
                                     <div class="cartInfo">
                                       <div class="cartcontent">
                                         <div class="cartimage" <img src="url(${cartItems.image})" alt"${cartItems.title} cover"></div>
   
                                           <div>
                                             <h2 class="productname">${cartItems.title}</h2>
                                             <p class="productPrice">$${cartItems.price}</p>
   
                                           </div>
                                           </div>
                                           <div class="removebtn">remove</div>   
                                         </a>
                                         </div>
                               </div>`;
 };



saveCartItems(cartItems);
}
*/

/*
function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

};*/
 

console.log(productId);

const cart = [];
      cart.push(productId);

      console.log(cart);



export function getCart() {

    const cartContainer = document.querySelector(".cartcontainer");
    if (!cartContainer) {
        return;
    }


    let cart = JSON.parse(localStorage.getItem("cart")) 

if (!cart) {
    cartContainer.innerHTML += `<div><h2>No products in cart</h2></div>
                                    <a href="index.html">Go back to shopping</a>`;   
} else {
    cartContainer.innerHTML += `<div class="cartInfo">   
                                <a href="product.html?id="${data.id}">
                                    <div> 
                                        <img src="${cartItem.image}" alt"${cartItem.title}"
                                        <div class="cartname">${cartItem.title}</div>
                                    </div>
                                </a>   
                                <div><p class="productPrice">${"$" + cartItem.price}</p><div>
                                
                        
                            </div>`;

}

}
getCart();



/*    const productInCart = productInCartItems.find(function(cart) {
     return
  });

  if (!productInCart) {
      const product = {id: cartId, title: cartTitle, image: cartImage, price: cartPrice};
      productInCartItems.push(product);
      saveCartItems(productInCartItems);
      itemsInCart.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;
  } 
else {
     const newProductsInCart = productInCartItems.filter((product) => product.id !== cartId);
     saveCartItems (newProductsInCart);
     itemsInCart.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;
  }
}


export function saveGetCart() {
    localStorage.setItem("jacket", JSON.stringify(cart));
};

saveGetCart();


export function addToCart(productId) {
    let inCartItem;
    cart.push(productId);
    localStorage.setItem("cart")
    

    cart.forEach((cartItem) => {
        if (productId === inCartItem.productId){
            inCartItem = cartItem;
            return;
        }
        
    });

    if (inCartItem) {
        inCartItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }

}


export function renderCartTotal () {

    let cartTotal = 0;

    cart.forEach((cartItem) => {
       cartTotal += cartItem.quantity;
       document.querySelector(".totalSum").innerHTML = "(${cartItem.quantity})´"
    });

}
renderCartTotal();


/*


const cartItems = getCart();
const cartContainer = document.querySelector(".cartcontainer");
const cartContent = document.querySelector(".cartcontent");
const backToShop = document.querySelector (".content4");
const totalSum = document.querySelector(".totalsum");
const removeItem = document.querySelector(".remove");


backToShop.innerHTML += `<a href="index.html">Go back to shopping</a>`;
removeItem.innerHTML += `<button><i class="fa-solid fa-xmark" style="color: #0a3641;"></i></button>`;




backToShop.innerHTML += `<a href="index.html">Go back to shopping</a>`;
removeItem.innerHTML += `<button><i class="fa-solid fa-xmark" style="color: #0a3641;"></i></button>`;
cartContainer.addEventListener("click", function (e) {

cartItems.forEach(cartItem => {


    if (cartItems.length === 0) {
        cartContainer.innerHTML += `<div><p<No products in cart</p></div>
                                    <a href="index.html">Go back to shopping</a>`;
    
    }


    cartContainer.innerHTML += `<div class="cartInfo">   
                                <a href="product.html?id="${cartItem.id}">
                                    <div> 
                                        <img src="${cartItem.image}" alt"${cartItem.title}"
                                        <div class="cartname">${cartItem.title}</div>
                                    </div>
                                </a>   
                                <div><p class="productPrice">${"$" + cartItem.price}</p><div>
                                
                        
                            </div>`;
  
   
});

if (cartItems.length === 0) {
    cartContainer.innerHTML += `<div><p<No products in cart</p></div>
                                <a href="index.html">Go back to shopping</a>`;

}




});


*/
