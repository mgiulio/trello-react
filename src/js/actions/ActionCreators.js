var
   AppDispatcher = require('../dispatcher/AppDispatcher'),
   AppConstants = require('../constants/AppConstants')
;

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

   loadBoard: function(boardId) {
      AppDispatcher.dispatch({
         type: ActionTypes.LOAD_BOARD,
         boardId: boardId
      });
  }

};
