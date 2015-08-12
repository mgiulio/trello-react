var
   appKey,
   settings = require('../settings'),
   util = require('../lib/util')
;

function getBoard(id) {
   var
      url = settings['fake json'] ?
         'json/trello-development.json'
         :
         `https://api.trello.com/1/boards/${id}/?key=${appKey}&lists=open&cards=visible&card_attachments=cover&organization=true&organization_fields=displayName,url`
   ;

   return fetch(url)
      .then(util.checkResponse)
      .then(response => response.json())
      //.then(json => { console.log(json); return json; })
   ;
}

function setAppKey(k) {
   appKey = k;
}

module.exports = {
   setAppKey: setAppKey,
   getBoard: getBoard
};
