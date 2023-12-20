import { url } from "./script.js";


export async function getApiProducts() {

    const response = await fetch(url);
    const products = await response.json(); 
    return products;
};
