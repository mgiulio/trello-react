var
   appKey,
   http = require('./http')
;

function getBoard(id) {
   var
      url = `https://api.trello.com/1/boards/${id}/?key=${appKey}&lists=open&cards=visible&card_attachments=cover&organization=true&organization_fields=displayName,url`
   ;

   return http.getJSON(url)
      .catch(reason => {
         switch (reason.type) {
            case 'http':
               switch (reason.statusCode) {
                  case 400:
                     throw {type: 'resource not found'};
                  break;
                  default:
                     throw reason;
               }
               break;
            default:
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
