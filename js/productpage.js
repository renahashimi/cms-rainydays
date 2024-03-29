import { errorMessage } from "./errormessage.js";

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");
const apiUrl = "https://rainy-days.renahashimi.no/wp-json/wc/store/products/" + id;


const productContent = document.querySelector(".productContent");
const productName = document.querySelector(".productpagename");

export async function getProductInfo () {
  try {
      const response = await fetch(apiUrl);
      const product = await response.json();

      createSingleProductInfo(product);
      productContent.innerHTML = "";
      

      function createSingleProductInfo (product) {
        setTimeout (function() {

        const price = product.prices.price / 100;

        productContent.innerHTML += `<div class="infoBox">
                                      <div class="imgnameprice">        
                                       <div class="productImage2"style="background-image: url(${product.images[0].src})" alt"${product.name}"></div>

                                        <div class="nameprice"
                                          <h1 class="h1productname">${product.name}</h1>
                                          <p class="productPrice2">${price}kr</p>
                                        </div> 
                                      </div>

                                    <div class="descriptions">
                                      <div class="namepriceX"
                                        <h1 class="h1productnameX">${product.name}</h1>
                                        <p class="productPrice2X">${price}kr</p>
                                      </div> 

                                      <div class="properties">${product.description}</p></div>

                                      <div class="info1">
                                        <p><span>${product.attributes[0].name}:</span> ${product.attributes[0].terms[0].name}</p>
                                        <p><span>${product.attributes[1].name}:</span> ${product.attributes[1].terms[0].name}</p>
                                        <p><span>${product.attributes[2].name}:</span> ${product.attributes[2].terms[0].name}</p>
                                        <br></br>
                                        <div class="skunumber"><span>SKU:</span> ${product.sku}</div>
                                      </div>  
                                    </div>

                                    <div></div>
                              
                                      <div class="selectbox">
                                        <div class="formbox">
                                          <p class="slcSize">SELECT SIZE</p>
                                          <form class="sizeform">
                                          <select class="sizeSelection" id="sizes">
                                           <option value="sizeS" id="selectsize2">${product.variations[0].attributes[0].value}</option>
                                           <option value="sizeM" id="selectsize2">${product.variations[1].attributes[0].value}</option>
                                           <option value="sizeL" id="selectsize2">${product.variations[2].attributes[0].value}</option>
                                           <option value="sizeXL" id="selectsize2">${product.variations[3].attributes[0].value}</option>
                                          </select>
                                         </form>
                                        </div>
                                      
                                        <div class="cartbuttons">
                                          <i class="addtocartbtn" id="atc" data-product-id=${product.id} data-product-title=${product.name} data-product-image=${product.images[0].src}" data-product-price=${product.prices.price}>ADD TO CART</i>
                                          <button id="gtc"><a href="cart.html?id=${product.id}">GO TO CART</a></button>
                                        </div>
                                   </div>`;

//let price = ${product.prices.price / 100};

//ADD TO CART
localStorage.setItem("cartItems", product);

let cart = document.querySelectorAll(".addtocartbtn");


for(let i=0; i<cart.length;i++){
cart[i].addEventListener("click", () =>{
  cartItems (product);
})
}

function cartItems (product){
localStorage.setItem("cartItems", JSON.stringify(product));
}
cartItems(product);
    
}, 2000);

//Go back button - for jackets on product.html
const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "BACK TO JACKETS";

//Loader only for "Productpage" / "productpage.html"
const load = document.querySelector(".loader");
const loader = document.querySelector(".loader-indicator");
load.innerHTML = "Your jacket is loading...";

setTimeout (function () {
  loader.classList.remove("loader-indicator")
}, 2200);

setTimeout(function () {
  load.innerHTML = ""
}, 2200);


//createSingleProductInfo(product);

}


} catch(error) {
  console.log("Unknown error", error);
  productContent.innerHTML = errorMessage();
}
}

getProductInfo()
