export const sendRequest = ({ url, method = "GET", headers, body }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = "json";

    for (const key in headers) {
      const value = headers[key];
      xhr.setRequestHeader(key, value);
    }

    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });

    xhr.addEventListener("error", () => {
      reject(new Error("Something went wrong..."));
    });
    xhr.send(body);
  });
};
