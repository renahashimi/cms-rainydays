import { errorMessage } from "./errormessage.js";
import { url } from "./script.js";
import { getProductsMen } from "./men.js";


const productSection = document.querySelector(".productSection");  

export async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json(); 


    productSection.innerHTML = "";

    for (let i = 0; i <products.length; i++) {
      if (products[i].onSale === true) {
        products[i].price = products[i].discountedPrice;
      } if (products[i].gender === "Female") {
        productSection.innerHTML += ` <div class="jacketInfo">
                                        <div class="jacketContainer">
                                          <a href="product.html?id=${products[i].id}" class="productJacket>
                                            <div><h2 class="productname">${products[i].title}</h2></div>
                                            <div class="productImage"style="background-image: url(${products[i].image})" alt"${products[i].title}"></div>
                                            <p class="productPrice">$${products[i].price}</p><div>
                                            <div class="bnBox"><a href="product.html?id=${products[i].id}" id="bn">READ MORE</a></div> 
                                          </a>
                                        </div>
                                      </div>`;
                     
  
    }};
  

} catch(error) {
    console.log("Unknown error", error);
    productSection.innerHTML = errorMessage();
}
}
getProducts();



