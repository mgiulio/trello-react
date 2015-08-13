function get(url) {
   return fetch(url);
}

function getJSON(url) {
   return get(url)
      .then(checkResponse)
      .then(response => response.json())
      //.then(json => { console.log(json); return json; })
   ;
}

function checkResponse(response) {
   if (response.status == 200)
      return response;
   else
      throw Error('HTTP response status error code: ' + response.status);
}


module.exports = {
   get: get,
   getJSON: getJSON
};
