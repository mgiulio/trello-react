var trelloAPI = (function() {

   var
      appKey
   ;

   function getBoard(id) {
      var
         url = 'https://api.trello.com/1/boards/' + id + '/?key=' + appKey + '&lists=open&cards=all&card_attachments=cover'
      ;

      return new Promise(function(resolve, reject) {
         fetch(url)
            .then(
               function(response) {
                  if (response.status != 200)
                     reject('Status error code: ' + response.status );

                  response.json()
                     .then(
                        function(boardJSON) { resolve(processBoardJSON(boardJSON)); },
                        function() { reject('Cannot parse the board JSON'); }
                     );
               },
               function() {
                  reject('Connection error');
               }
         );
      });

   }

   function processBoardJSON(b) {
      console.log(b);

      var board = {
         id: b.id,
         name: b.name,
         url: b.url,
         shortUrl: b.shortUrl,
         backgroundImage: {
            full: b.prefs.backgroundImage,
            scaled: b.prefs.backgroundImageScaled
         },
         lists: []
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
            name: c.name,
            desc: c.desc,

            attachmentCount: c.badges.attachments,
            commentCount: c.badges.comments,
            voteCount: c.badges.votes,

            dateLastActivity: c.dateLastActivity,

            url: c.url
         };

         listHash[c.idList].cards.push(c1);
      });

      return board;
   }

   function setKeys(k) {
      appKey = k.appKey;
   }

   return {
      setKeys: setKeys,
      getBoard: getBoard
   };

})();
