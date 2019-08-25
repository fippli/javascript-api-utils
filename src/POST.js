const REQUEST = require('./REQUEST');

/**
 * POST request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const POST = (callback, endpoint, body = undefined, withFile = false) => {
  REQUEST(callback, 'POST', endpoint, body, withFile);
};

module.exports = POST;