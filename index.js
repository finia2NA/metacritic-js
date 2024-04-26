const axios = require('axios');
const cheerio = require('cheerio');

async function getGameScore(name) {
  const encodedName = name.replace(' ', '-');
  try {
    const response = await axios.get(`https://www.metacritic.com/search/${encodedName}?page=1&category=13`);
    const $ = cheerio.load(response.data);
    const firstDiv = $('.c-siteReviewScore').first().text();
    console.log(firstDiv);
  } catch (error) {
    console.error(error);
  }
}

// getGameScore('Persona 5');