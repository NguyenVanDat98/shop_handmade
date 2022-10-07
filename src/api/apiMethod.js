export const getAccount = async (path = "") => {
  const data = await fetch(`http://localhost:8000/listAccount${path}`);
  return data;
};
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
