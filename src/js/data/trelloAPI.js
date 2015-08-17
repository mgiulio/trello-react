var
   appKey,
   http = require('./http'),
   errors = require('../errors')
;

function getBoard(id) {
   var
      url = `https://api.trello.com/1/boards/${id}/?key=${appKey}&lists=open&cards=visible&card_attachments=cover&organization=true&organization_fields=displayName,url`
   ;

   return http.getJSON(url)
      .catch(reason => {
         if (reason instanceof errors.Http) {
            switch (reason.status) {
               case 400:
                  throw new errors.ResourceNotFound(`Board #${id} not found`);
                  break;
               default:
                  throw reason;
            }
         }
         else {
            throw reason;
         }
      });
}

function setAppKey(k) {
   appKey = k;
}

module.exports = {
   setAppKey: setAppKey,
   getBoard: getBoard
};
