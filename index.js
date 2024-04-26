const axios = require('axios');
const cheerio = require('cheerio');

async function getScore(name) {
  const encodedName = name.replace(' ', '-');
  try {
    const response = await axios.get(`https://www.metacritic.com/search/${encodedName}`);
    const $ = cheerio.load(response.data);
    const firstDiv = $('.c-siteReviewScore').first().text();
    console.log(firstDiv);
  } catch (error) {
    console.error(error);
  }
}

// Example usage
// getScore('Cyberpunk 2077');

module.exports = getScore;