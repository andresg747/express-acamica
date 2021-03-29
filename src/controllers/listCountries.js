const axios = require('axios');

const listCountries = async (req, res) => {
  try {
    const result = await axios.get(`${process.env.API_BASE_URL}`);
    return res.send(result.data);
  } catch (error) {
    console.log(error)
    return res.status(400).send();
  }
}

module.exports = listCountries;
