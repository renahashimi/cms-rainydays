let cartItems = JSON.parse(localStorage.getItem("cartItems"));


const cartContent = document.querySelector(".cartcontent");
const totalPrice = document.querySelector(".totalsum");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".backtoshop");
const cardNumber = document.querySelector (".cardnumber");

function addToCart (){ 

  let total = 0;
  if(total === 0) {
    totalPrice.innerHTML += `<h3>Total: </h3>
    `;
  } ;
  
  cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
  
  backToShop.innerHTML = "";
  backToShop.innerHTML += `<div><h2> GO BACK TO </h2>
                            <div class ="backtoshoplist">                              
                              <p><a href="products.html">collection</a></p>
                              <p><a href="index.html">homepage</a></p>
                              
                            </div>`;

  //cartContent.innerHTML += `<div><p class="noitems">No products in cart</p></div>`;
  //document.querySelector(".cartcontainer").innerHTML = getCart();

  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  //localStorage.getItem("cartItems");
  const title = cartItems.name;
  const image = cartItems.images[0].src;
  const price = cartItems.prices.price / 100;
  const id = cartItems.id;

  const item = {id, title, image, price};
  localStorage.setItem("cartItems", JSON.stringify(item));



cartContent.innerHTML += `<div class="cartcontainer1" jacket-id="${item.id}>
  <div class="cartInfo">
    <div class="cartcontent">
          <div class="cartimage" style="background-image: url(${item.image})" alt"${item.title}"></div>

        <div>
          <h2 class="cartname">${item.title}</h2>
          <p class="cartprice">${item.price}kr</p>
          </div>
          <button class="removebtn"><i class="fa-regular fa-x fa-xl" style="color: #0a3641;"></i></button>   

        </div>      
      </div>
    </div
</div>`;


let totalSum = +item.price;
total += totalSum;

total = total.toFixed(0);
totalPrice.innerHTML += `<h3>${total}kr</h3>`;

}

addToCart(); 


localStorage.setItem("cartItems", JSON.stringify(cartItems));