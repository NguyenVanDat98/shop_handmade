export const getAccount = async (path = "") => {
    const data = await fetch(`http://localhost:8000/listAccount${path}`)
    return data;
}

export const fetSlide = async () => {
    const slide = await fetch("http://localhost:8000/slideShow").then(res => res.json())
    return slide;
}
export const fetProducts = async (path) => {
    const slide = await fetch(`http://localhost:8000/listProduct?_page=1&_limit=${path.limit}${path.sort}${path.filter}`).then(res => res.json())
    return slide;
}
  
export const createAccount = (data) => {
  return fetch(`http://localhost:8000/listAccount`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const createProfileAccount = (data) => {
 return fetch(`http://localhost:8000/listProfile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
