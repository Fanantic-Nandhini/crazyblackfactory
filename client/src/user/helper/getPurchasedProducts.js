import { API } from "../../backend";

export const purchasedProduct = (userId, token) => {
  return fetch(`${API}/orders/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};
