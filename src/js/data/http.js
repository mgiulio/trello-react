function get(url) {
   return fetch(url)
      .catch(reason => { throw {type: 'network', message: reason.message}; })
      .then(checkHTTPStatusCode)
   ;
}

function getJSON(url) {
   return get(url)
      .catch(reason => { throw reason; })
      .then(response => response.json().catch(reason => { throw {type: 'JSON'}; }))
   ;
}

function checkHTTPStatusCode(response) {
   if (200 <= response.status && response.status < 300)
      return response;
   else
      throw {type: 'http', statusCode: response.status, statusText: response.statusText};
}


module.exports = {
   get: get,
   getJSON: getJSON
};
