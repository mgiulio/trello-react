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
