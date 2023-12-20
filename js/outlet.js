import { errorMessage } from "./errormessage.js";
import { url } from "./script.js";

const outletContent = document.querySelector(".outletcontent");

async function getSaleData() {
    try {
        const response = await fetch(url);
        const sale = await response.json();
         
        outletContent.innerHTML = "";
  
        for (let i = 0; i <sale.length; i++) {
            if (sale[i].onSale === true){
                sale[i].price=  "<strike>" + "(" + sale[i].price + ")" + "</strike>"
                outletContent.innerHTML += `<div class="saleInfo-outlet">   
                                            <a href="product.html?id=${sale[i].id}"class="outletjacket>
                                                <div class="outletbox"> 
                                                    <div class="outletname">${sale[i].title}</div>
                                                    <div class="outletimage" style="background-image: url(${sale[i].image})" alt"${sale[i].title}"></div>
                                                    <p class="outletpricefull">${"$" + sale[i].price}</p><div>
                                                    <p class="outletprice">${"$" + sale[i].discountedPrice}</p><div>
                                                    <div class="bnBox"><a href="product.html?id=${sale[i].id}" id="bn">READ MORE</a></div> 
                                                </div>   
                                            </a>  
                                        </div>`;                                                               
       }}
               
} catch(error) {
    console.log("Unknown error", error);
    outletContent.innerHTML = errorMessage();
   }
}
getSaleData()