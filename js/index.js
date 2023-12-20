import { errorMessage } from "./errormessage.js";
import { url } from "./script.js";

const saleContent = document.querySelector(".salecontent");
const newArrivalsContent = document.querySelector(".newarrivalscontent");
const contentX = document.querySelector(".content-x");



async function getData() {
    try {
        const response = await fetch(url);
        const jacket = await response.json();
         
        console.log(jacket);
        saleContent.innerHTML = "";
        newArrivalsContent.innerHTML = "";
        contentX.innerHTML += `<nav>
                                <ol>
                                  <div class="linkwoman">
                                    <li class="women"><a href="women.html"><img class="linkphoto" src="images/Other/womaninjacket.jpeg" alt="womaninjacket">
                                    WOMEN</a></li>
                                  </div>
                                </ol> 
                              </nav>
                              <nav>
                                <ol>
                                  <div class="linkmen">
                                    <li class="men"><a href="men.html"><img class="linkphoto" src="images/Other/meninjacket.jpeg" alt="meninjacket">
                                    MEN</a></li>
                                  </div>
                                </ol>
                              </nav>`;        
 

        for (let i = 0; i <jacket.length; i++) {
          if ((jacket[i].favorite === false) && (jacket[i].onSale === false)) {
            
            newArrivalsContent.innerHTML += `<div class="saleInfo2">   
                                              <a href="product.html?id=${jacket[i].id}"class="salejacket>
                                                <div class="saleBox2"> 
                                                  <div class="saleimage2" style="background-image: url(${jacket[i].image})" alt"${jacket[i].title}"></div>
                                                  <div><h2 class="salename">${jacket[i].title}</h2></div>
                                                  <p class="salepricefull-na">${"$" + jacket[i].price}</p><div>
                                                </div>   
                                              </a>  
                                            </div>`;
        
                                                                    
        }}                                  
                                      
        for (let i = 0; i <jacket.length; i++) {
            if ((jacket[i].onSale === true) && (jacket[i].discountedPrice > 100) && (jacket[i].discountedPrice < 140)) {
              jacket[i].price=  "<strike>" + "(" + jacket[i].price + ")" + "</strike>"
               saleContent.innerHTML += `<div class="saleInfo">   
                                        <a href="product.html?id=${jacket[i].id}"class="salejacket>
                                          <div class="saleBox"> 
                                            <div class="saleimage" style="background-image: url(${jacket[i].image})" alt"${jacket[i].title}"></div>
                                            <div><h2 class="salename">${jacket[i].title}</h2></div>
                                            <div class= prices">
                                              <p class="salepricefull">${"$" + jacket[i].price}</p><div>
                                              <p class="saleprice">${"$" + jacket[i].discountedPrice}</p><div>
                                          </div>   
                                        </a>  
                                      </div>`;                                                               
         }}


} catch(error) {
    console.log("Unknown error", error);
    saleContent.innerHTML = errorMessage();
    newArrivalsContent.innerHTML = errorMessage();

   }
}


getData()