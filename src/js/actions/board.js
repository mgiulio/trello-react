var
   trelloAPI = require('../api/trelloAPI'),
   renderApp = require('../renderApp'),

   retryCounter = 0,
   dismiss = false,
   onDismiss = function() { dismiss = true; }
;

function loadBoard(ctx) {
   console.log(ctx);
   trelloAPI.getBoard(boardId)
      .then(function(board) {
         renderApp({state: 'board', board: board});
      })
      .catch(function(reason) {
         if (dismiss) {
            window.location.hash = 'error';
            return;
         }

         retryCounter++;

         var desc = /*stringify readon*/'';
         desc += 'Retry #' + retryCounter;

         var error = {
            title: 'Failed to load the board',
            description: desc //reason
         };

         renderApp({state: 'loading', error: error, onDismiss: onDismiss});

         loadBoard(boardId);
      })
   ;

   return {state: 'loading'};
}

module.exports = loadBoard;
