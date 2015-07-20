var trelloAPI = (function() {

   var
      appKey
   ;

   function getBoard(id) {
      var
         url = 'https://api.trello.com/1/boards/' + id + '/?key=' + appKey
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
      return {
         id: b.id,
         name: b.name,
         url: b.url,
         shortUrl: b.shortUrl,
         backgroundImage: {
            full: b.prefs.backgroundImage,
            scaled: b.prefs.backgroundImageScaled
         }
      };
   }

   function setKeys(k) {
      appKey = k.appKey;
   }

   return {
      setKeys: setKeys,
      getBoard: getBoard
   };

})();
