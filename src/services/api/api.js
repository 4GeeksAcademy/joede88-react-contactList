export const baseUrl = `https://playground.4geeks.com/contact/`;

export const genericFetch = (url, config) => {
  return fetch(`${baseUrl}${url}`, config)
    .then((res) => {
      if (res.status === 204) {
        return null;
      }
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};
