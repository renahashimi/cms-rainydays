import { errorMessage } from "./errormessage.js";

const newArrivalsContent = document.querySelector(".newarrivalscontent");
const contentX = document.querySelector(".content-x");

const url = "https://rainy-days.renahashimi.no/wp-json/wc/store/products";

contentX.innerHTML += `<nav>
                        <ol><li class="collectionlink"><a href="products.html">SHOP COLLECTION</a></li></ol> 
                      </nav>`;  

async function getData() {
    try {
        const response = await fetch(url);
        const jacket = await response.json();
         
        newArrivalsContent.innerHTML = "";
      
        for (let i = 0; i <jacket.length; i++) {
          const price = jacket[i].prices.price / 100;
           if (jacket[i].prices.price < 120000)  {
            
            newArrivalsContent.innerHTML += `<div class="saleInfo2">   
                                              <a href="product.html?id=${jacket[i].id}"class="salejacket>
                                                <div class="saleBox2"> 
                                                  <div class="saleimage2" style="background-image: url(${jacket[i].images[0].src})" alt"${jacket[i].name}"></div>
                                                  <div><h2 class="salename">${jacket[i].name}</h2></div>
                                                  <p class="salepricefull-na">${price}kr</p><div>
                                                </div>   
                                              </a>  
                                            </div>`;
        
                                                                    
        }}                                  


} catch(error) {
    console.log("Unknown error", error);
    newArrivalsContent.innerHTML = errorMessage();
   }
}


getData()