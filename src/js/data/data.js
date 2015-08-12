var
   trelloAPI = require('./trelloAPI'),
   util = require('../lib/util')
;

function getHomeBoards() {
   return fetch('json/public-boards.json')
      .then(util.checkResponse)
      .then(response => response.json())
   ;
}

module.exports = {
   getHomeBoards: getHomeBoards
};
