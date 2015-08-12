var
   trelloAPI = require('./trelloAPI'),
   util = require('../lib/util')
;

function getHomeBoards() {
   return fetch('json/public-boards.json')
      .then(util.checkResponse)
      .then(response => response.json())
      //.then(json => { console.log(json); return json; })
   ;
}

function getBoard(id) {
   return trelloAPI.getBoard(id)
      .then(processBoardJSON)
   ;
}

function processBoardJSON(b) {
   var board = {
      id: b.id,
      name: b.name,
      url: b.url,
      shortUrl: b.shortUrl,
      lists: [],
      permissionLevel: b.prefs.permissionLevel
   };

   if (b.prefs.backgroundImage)
      board.backgroundImage = {
         full: b.prefs.backgroundImage,
         scaled: b.prefs.backgroundImageScaled
      };

   if (b.organization)
      board.organization =  {
         name: b.organization.displayName,
         url: b.organization.url
      };

   var listHash = {};
   board.lists = b.lists.map(function(l) {
      var l1 =  {
         id: l.id,
         name: l.name,
         closed: l.closed,
         cards: []
      };

      listHash[l.id] = l1;

      return l1;
   });

   b.cards.forEach(function(c) {
      var c1 = {
         id: c.id,
         name: c.name,

         attachmentCount: c.badges.attachments,
         commentCount: c.badges.comments,
         voteCount: c.badges.votes,

         dateLastActivity: util.formatDate(c.dateLastActivity),

         url: c.url
      };

      if (c.badges.description)
         c1.description =  c.desc;


      if (c.idAttachmentCover) {
         var i, l, atts = c.attachments, att;
         for (i = 0, l = atts.length; i < l; ++i) {
            att = atts[i];
            if (att.id === c.idAttachmentCover) {
               c1.coverUrl = att.previews[1].url;
               break;
            }
         }
      }

      if (!c.idList)
         console.log(`Card #${c.id} has with falsy idList(${c.idList}, ${typeof c.idList})`);
      if (!(c.idList in listHash))
         console.log(`Card #${c.id} has an idList not present in listHash: ${c.idList}`);
      listHash[c.idList].cards.push(c1);
   });

   return board;
}

module.exports = {
   getHomeBoards: getHomeBoards,
   getBoard: getBoard
};
