import { API } from "../../backend";

export const createOrder = (userId, token, orderInfo) => {
  return fetch(`${API}/order/create/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ order: orderInfo })
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};
