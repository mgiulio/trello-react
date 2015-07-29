var
   React = require('react'),

   trelloAPI = require('../api/trelloAPI'),
   BoardBar = require('./BoardBar'),
   //CardLists = require('./CardLists'),

   Board = React.createClass({

      statics: {
         fetch: function(boardId) {
            //this.setState({loading: true});

            return trelloAPI.getBoard(boardId);

            /*
            trelloAPI.getBoard(boardId)
               .then(board => {
                  this.setState({loading: false, board: board});
               })
               .catch(reason => {
                  // Notify user
                  console.log('Failed to load the board: ', reason);
                  // Retry
                  //this.loadBoard(this.props.boardId);
               })
            ;
            */
         },

      },

      render: function() {
         //console.log(this.props.params.boardId);

         return (
            <div className="board">
               <BoardBar board={this.props.board} />
               {/* <CardLists lists={this.props.board.lists} /> */}
            </div>
         );
      }

   })
;

module.exports = Board;
