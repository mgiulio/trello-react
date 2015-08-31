var
   http = require('./http'),
   trelloAPI = require('./trelloAPI'),
   util = require('../lib/util'),
   settings = require('../settings')
;

function getHomeBoards() {
   return http.getJSON(`${settings.basepath}/json/public-boards.json`);
}

function getBoard(id) {
   return id.indexOf('board-') === 0 ?
      http.getJSON(`${settings.basepath}/json/${id}.json`)
         .then(processBoard)
   :
      trelloAPI.getBoard(id)
         .then(processBoard)
   ;
}

function processBoard(b) {
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

         dateLastActivity: c.dateLastActivity,

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

function getCard(id) {
   return trelloAPI.getCard(id)
      .then(processCard)
   ;
}

function processCard(c) {
   var card = {
      title: c.name,
      votes: c.badges.votes,
      originalCardUrl: c.url
   };

   card.parentList = {
      name: c.list.name
   };

   card.boardId = c.idBoard;

   if (c.badges.description && c.desc)
      card.description = processMarkdown(c.desc);

   card.attachmentCount = c.attachments.length;
   if (card.attachmentCount > 0) {
      if (c.idAttachmentCover) {
         var attachmentCover = findById(c.idAttachmentCover, c.attachments);
         if (attachmentCover)
            card.coverUrl = attachmentCover.url;
      }

      // Process attachments here
   }

   card.commentCount = c.badges.comments;
   if (card.commentCount > 0)
      card.comments = c.actions.map(a => {
         var comment = {
            author: {
               username: a.memberCreator.username,
               profilePageUrl: a.memberCreator.url
            },
            text: processMarkdown(a.data.text),
            timestamp: a.date
         };

         var avatarHash = a.memberCreator.avatarHash
         if (avatarHash)
            comment.author.avatarUrl = `https://trello-avatars.s3.amazonaws.com/${avatarHash}/30.png`;

         return comment;
      });

   return card;
}

function findById(id, arr) {
   var o = null;
   for (var i = 0, l = arr.length; i < l; ++i)
      if (arr[i].id === id) {
         o = arr[i];
         break;
      }
   return o;
}

function processMarkdown(md) {
   return md.replace(/^(#+)(\w+)/mg, '$1 $2');
}

module.exports = {
   getHomeBoards: getHomeBoards,
   getBoard: getBoard,
   getCard: getCard
};
