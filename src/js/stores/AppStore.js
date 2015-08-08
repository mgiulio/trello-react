var
   AppDispatcher = require('../dispatcher/AppDispatcher'),
   EventEmitter = require('events').EventEmitter,
   assign = require('object-assign'),
   AppConstants = require('../constants/AppConstants'),
   trelloAPI = require('../api/trelloAPI')
;

var
   ActionTypes = AppConstants.ActionTypes,
   CHANGE_EVENT = 'change',
   appState = 'home',
   board
;

var AppStore = assign({}, EventEmitter.prototype, {

   emitChange: function() {
      this.emit(CHANGE_EVENT);
   },

   addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
   },

   removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
   },

   getAppState: function() {
      return appState;
   },

   getBoards: function() {
      return [
         {
            name:  'Trello Development',
            boards: [
               {
                  name: 'Trello Development Board',
                  id: 'nC8QJJoZ'
               },
               {
                  name: 'Trello Public API',
                  id: 'cI66RoQS'
               },
               {
                  name: 'Trello Development - Shipped!',
                  id: 'mRn3F1pT'
               },
               {
                  name: 'Open Source Libraries',
                  id: 'dpX2j6lT'
               },
               {
                  name: 'Trello iOS App',
                  id: '5tj4qAvo'
               },
               {
                  name: 'Trello Resources',
                  id: 'nPNSBZjB'
               }
            ]
         },
         {
            name: 'Weddings',
            boards: [
               {
                  name: 'Wedding Seating Arrangement',
                  id: 'kw7E5XeZ'
               },
               {
                  name: 'Bridal Party Trello Board',
                  id: 'wFECC39M'
               },
               {
                  name: 'Trello for Wedding Day Timeline',
                  id: 'lHRaeSZ7'
               },
               {
                  name: 'Trello for Sending Thank You Cards',
                  id: 'IuoxVMY1'
               }
            ]
         }
      ];
   },

   getBoard: function() {
      return board;
   }

});

AppStore.dispatchToken = AppDispatcher.register(function(action) {

   switch(action.type) {

      case ActionTypes.GO_HOME:
         appState = 'home';
         //window.history.pushState(action, null, '/');

         AppStore.emitChange();
         break;

      case ActionTypes.LOAD_BOARD:
         trelloAPI.getBoard(action.boardId)
            .then(function(_board) {
               board = _board;
               appState = 'board';
               //window.history.pushState(action, null, `/board/${action.boardId}`);

               setTimeout(() =>{
                  AppStore.emitChange();
               }, 5000);

            })
            .catch(function(reason) {
               console.log(reason);
            })
         ;

         appState = 'loading';
         AppStore.emitChange();
      break;

      default:
  }

});

module.exports = AppStore;
