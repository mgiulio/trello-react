var
   trelloAPI = null,
   homeBoards = require('../boards')
;

function getHomeBoards() {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
         if (Math.random() > 0.5)
            resolve(homeBoards);
         else
            reject();
      }, 2000);
   });
}

module.exports = {
   getHomeBoards: getHomeBoards
};
