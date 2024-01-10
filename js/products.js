import { errorMessage } from "./errormessage.js";

const collectionName = document.querySelector(".collectionname");
const productSection = document.querySelector(".productSection");  

export async function getProductsWC() {
  try {
    const response = await fetch("https://rainy-days.renahashimi.no/wp-json/wc/store/products");
    const products = await response.json(); 
    
    console.log(products, response);
    
    
    productSection.innerHTML = "";
    collectionName.innerHTML += `<h1>Collection</h1>`;


    for (let i = 0; i <products.length; i++) {
      const price = products[i].prices.price / 100;

        productSection.innerHTML += ` <div class="jacketInfo">
                                        <div class="jacketContainer">
                                          <a href="productpage.html?id=${products[i].id}" class="productJacket>
                                            <div class="hidden"><p class="hidden">"R"</p></div>
                                            <div class="productImage"style="background-image: url(${products[i].images[0].src})" alt"${products[i].name}"></div>
                                            <div><h2 class="productname">${products[i].name}</h2></div>
                                            <div><p class="productPrice">${price}kr</p><div>
                                            <div class="bnBox"><a href="productpage.html?id=${products[i].id}" id="bn">READ MORE</a></div> 
                                          </a>
                                        </div>
                                      </div>`;             
    };


  
} catch(error) {
    console.log("Unknown error", error);
    productSection.innerHTML = errorMessage();
}
}
getProductsWC();



