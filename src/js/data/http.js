var errors = require('../errors');

function get(url) {
   return fetch(url)
      .catch(reason => { throw new errors.Network(reason.message); })
      .then(checkHTTPStatusCode)
   ;
}

function getJSON(url) {
   return get(url)
      .catch(reason => { console.log(reason); throw reason; })
      .then(response => response.json().catch(reason => { throw new errors.JSON(); }))
   ;
}

function checkHTTPStatusCode(response) {
   if (200 <= response.status && response.status < 300)
      return response;
   else
      throw new errors.Http(response.status, response.statusText);
}


module.exports = {
   get: get,
   getJSON: getJSON
};
