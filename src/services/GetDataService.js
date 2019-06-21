export const getData = function() {
  return fetch("./userData.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
