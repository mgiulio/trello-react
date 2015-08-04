var
   appKey
;

function getBoard(id) {
   var
      url =
         'https://api.trello.com/1/boards/' + id + '/?key=' + appKey + '&lists=open&cards=visible&card_attachments=cover&organization=true&organization_fields=displayName,url'
         //'/board.json'//board.json'//'../board.json'
   ;

   return fetch(url)
      .then(checkResponse)
      .then(response => response.json())
      //.then(json => { console.log(json); return json; })
      .then(processBoardJSON)
   ;
}

function checkResponse(response) {
   if (response.status == 200)
      return response;
   else
      throw Error('HTTP response status error code: ' + response.status);
}

function processBoardJSON(b) {
   var board = {
      id: b.id,
      name: b.name,
      url: b.url,
      shortUrl: b.shortUrl,
      backgroundImage: {
         full: b.prefs.backgroundImage,
         scaled: b.prefs.backgroundImageScaled
      },
      lists: [],
      permissionLevel: b.prefs.permissionLevel
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

         dateLastActivity: formatDate(c.dateLastActivity),

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

function setKeys(k) {
   appKey = k.appKey;
}

function formatDate(str) {
   var d = new Date(str);

	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
	year = String(year).substr(-2);

	//return `${day} ${month} ${year}`;
   return day + ' ' + month + ' ' + year;
}

module.exports = {
   setKeys: setKeys,
   getBoard: getBoard
};
