const API_URL = "http://localhost:8000"

export const getAccount = async (path = "") => {
  const data = await fetch(API_URL + `/listAccount${path}`)
  return data;
}


export const fetSlide = async () => {
  const slide = await fetch(API_URL + "/slideShow").then(res => res.json())
  return slide;
}
export const fetProducts = async (path) => {
  const slide = await fetch(API_URL + `/listProduct?_page=${path.page}&_limit=${path.limit}${path.sort}${path.filter}`).then(res => res.json())
  return slide;
}


export const createAccount = (data) => {
  return fetch(API_URL + `/listAccount`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const createProfileAccount = (data) => {
  return fetch(API_URL + `/listProfile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
export const createItemCart = (data) => {
  return fetch(API_URL + `/listCart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const putItemInCart = (id, data) => {
  return fetch(API_URL + `/listCart/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

// export const getItemInCart = (id, data) => {
//   return fetch(API_URL + `/listCart/${id}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(data),
//   });
// };

export const getCartItem = (data = "") => {
  return fetch(API_URL + `/listCart/${data}`);
};
export const updateCartItem = (id, data) => {
  return fetch(API_URL + `/listCart/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}
// export const searchCartItem = async (param) => {
//   const data = await fetch(API_URL + `/listProduct?${param.name}_like=${param.input}`)
//   return data;
// }

export const fetAccount = (id, data) => {
  return fetch(API_URL + `/listAccount/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}