import { errorMessage } from "./errormessage.js";
import { url } from "./script.js";

export async function likeJackets () {

const productsYouMayLike = document.querySelector(".productsyoumaylike");
const likeTitle = document.querySelector(".liketitle");

    try {
        const response = await fetch(url);
        const jackets = await response.json();
  
        productsYouMayLike.innerHTML = "";
        likeTitle.innerHTML = "";


        likeTitle.innerHTML += `Other jacket you may like`;
      
for (let i = 0; i <jackets.length; i++) {
    if ((jackets[i].favorite === true) && (jackets[i].price > 110)) {
      productsYouMayLike.innerHTML += ` <div class="likeInfo">
                                        <div class="likeContainer">
                                            <a href="product.html?id=${jackets[i].id}">
                                                <div class="likename">--&#8476;--</div>
                                                <div class="likeImage"style="background-image: url(${jackets[i].image})" alt"${jackets[i].title}"></div>
                                                <p class="likePrice">${"$" + jackets[i].price}</p><div>
                                            </a>
                                        </div>
                                    </div>`;
                
}}


} catch(error) {
    console.log("Unknown error", error);
    productsYouMayLike.innerHTML = errorMessage();
}}

likeJackets()