export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");
export const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;
export const url = "https://api.noroff.dev/api/v1/rainy-days/";
