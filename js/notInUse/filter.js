// This JS is not a part of my CA - But i wanted to  try out for learning - code is only at MEN.HTML:)

/*
import { errorMessage } from ".js/errormessage.js";
import { url } from "../product.js";

async function getData() {  
  try {
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    let filterJacket = data;  
    
    
function renderData () {
  const productContainer = document.querySelector(".productContainer");
  productContainer.innerHTML = "";

  filterJacket.forEach(function (jacketName){  
    productContainer.innerHTML +=`<div class="jacketName"
                                    <h3>${jacketName.title}</h2>
                                  </div>`;

  });
}
renderData();


function searchJacket(filterJacket){
  const search = document.getElementById("search");

  search.onkeyup = function (event) {

    const searchName = event.target.value.trim().toLowerCase();

        const filteredJacket = filterJacket.filter(function (jackName) {
            if (jackName.title.toLowerCase().startsWith(searchName)) {
            return true;
            }
        });
  
        renderData(filteredJacket);
  }}
searchJacket(filteredJacket);

} catch(error) {
    console.log("Unknown error", error);
    productContainer.innerHTML = errorMessage();
    }
  

}

getData();

*/

  