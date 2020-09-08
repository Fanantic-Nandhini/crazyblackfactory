import { API } from "../../backend";

const getProduct = () => {
  return fetch(`${API}/products`, { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export default getProduct;
