const axios = require("axios");

const PI = 3.1416

const saludar = (name) => {
  return "Hola" + name;
};

const users = async () => {
  try {
    let URL = "https://jsonplaceholder.typicode.com/posts";
    let response = await axios.get(URL);
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = {
    saludar,
    users,
    PI
}

