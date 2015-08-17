function AppError(msg) {
   this.message = msg || 'No message provided';
}
//toString?

function NetworkError(msg) {
   AppError.apply(this, arguments);
}
NetworkError.prototype = Object.create(AppError.prototype);
NetworkError.prototype.constructor = NetworkError;

function HttpError(statusCode, statusText) {
   this.statusCode = statusCode;
   this.statusText = statusText;

   AppError.call(this, '...');
}
NetworkError.prototype = Object.create(AppError.prototype);
NetworkError.prototype.constructor = NetworkError;


function get(url) {
   return fetch(url)
      .catch(handleNetworkError)
      .then(checkHTTPStatusCode)
   ;
}


function getJSON(url) {
   return fetch(url)
      .catch(handleNetworkError)
      .then(checkHTTPStatusCode)
      .then(response => response.json())
      //json catch
      //.then(json => { console.log(json); return json; })

   ;
}

function handleNetworkError(response) {
      console.log('handleNetworkError:', response);
      throw new NetworkError(response.message);
}

function checkHTTPStatusCode(response) {
   console.log('checkHTTPStatusCode');

   if (200 <= response.status && response.status < 300)
      return response;
   else
      throw new /*Http*/Error(`${response.status} ${response.statusText}`);
}

get('https://www.googlex.it')
   .then(
      response => {
         console.log('Success');
         console.log(response);
      },
      err => {
         console.log('Failure');

         if (err instanceof NetworkError) {
            console.log(`Network error: ${err.message}`);
            console.log(err);
         }
         else if(err instanceof Error)
            console.log(`Generic error: ${err.message}`);
         else
            console.log('???');
      }
   )
;
