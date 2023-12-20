import { errorMessage } from "./errormessage.js";
import { url } from "./script.js";


const productSectionMen = document.querySelector(".productSectionMen");  


export async function getProductsMen() {
  try {
    const response = await fetch(url);
    const products = await response.json(); 

    productSectionMen.innerHTML = "";

    for (let i = 0; i <products.length; i++) {
        if (products[i].onSale === true) {
            products[i].price = products[i].discountedPrice; 
        } if (products[i].gender === "Male") {
            productSectionMen.innerHTML += ` <div class="jacketInfo">
                                             <div class="jacketContainer">
                                             <a href="product.html?id=${products[i].id}" class="productJacket>
                                             <div class="productname">${products[i].title}</div>
                                             <div class="productImage"style="background-image: url(${products[i].image})" alt"${products[i].title}"></div>
                                             <p class="productPrice">${"$" + products[i].price}</p><div>
                                             <div class="bnBox"><a href="product.html?id=${products[i].id}" id="bn">READ MORE</a></div> 
                                             </a>
                                             </div>
                                             </div>`;
                     
    }}

} catch(error) {
    console.log("Unknown error", error);
    productSectionMen.innerHTML = errorMessage();

}

}

getProductsMen();

