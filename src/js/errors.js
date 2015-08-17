function Generic(msg) {
   this.message = msg || 'No message provided';
}

Generic.prototype.toString = function() {
   return this.message;
};

function Network(msg) {
   Generic.call(this, msg);
}

Network.prototype = Object.create(Generic.prototype);
Network.prototype.constructor = Network;

function Http(statusCode, statusText) {
   this.statusCode = statusCode;
   this.statusText = statusText;

   Generic.call(this, `${statusCode} ${statusText}`);
}

Http.prototype = Object.create(Generic.prototype);
Http.prototype.constructor = Http;

function JSON(msg) {
   Generic.call(this, msg);
}

JSON.prototype = Object.create(Generic.prototype);
JSON.prototype.constructor = JSON;

function ResourceNotFound(msg) {
   Generic.call(this, msg);
}

ResourceNotFound.prototype = Object.create(Generic.prototype);
ResourceNotFound.prototype.constructor = ResourceNotFound;

module.exports = {
   Generic: Generic,
   Network: Network,
   Http: Http,
   JSON: JSON,
   ResourceNotFound: ResourceNotFound
};
