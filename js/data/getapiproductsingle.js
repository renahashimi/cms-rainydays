export async function getApiProduct () {

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");
const urlApi = "https://api.noroff.dev/api/v1/rainy-days/" + id;

      const response = await fetch(urlApi);
      const product = await response.json();

    return product;
}; 




