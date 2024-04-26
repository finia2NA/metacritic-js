const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Retrieves the score for a given name from Metacritic.
 * @param {string} name - The name to search for.
 * @returns {Promise<string>} The score of the first search result. From my experience, either a number or "tbd".
 * @throws {Error} If an error occurs during the retrieval process.
 * 
 * @example
 * getScore('Cyberpunk 2077').then(console.log).catch(console.error);
 */
async function getScore(name) {
  const encodedName = name.replace(' ', '-');
  try {
    const response = await axios.get(`https://www.metacritic.com/search/${encodedName}`);
    const $ = cheerio.load(response.data);
    const firstDiv = $('.c-siteReviewScore').first().text();
    return firstDiv;
  } catch (error) {
    throw error;
  }
}

module.exports = getScore;