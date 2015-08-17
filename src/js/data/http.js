var errors = require('../errors');

function get(url) {
   return fetch(url)
      .then(
         checkHTTPStatusCode,
         reason => { throw new errors.Network(reason.message); }
      )
   ;
}

function getJSON(url) {
   return get(url)
      .then(
         response => response.json(),
         error => { throw error; }
      )
      .catch(reason => { throw new errors.JSON(); })
      //.then(json => { console.log(json); return json; })
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
