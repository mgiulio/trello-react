var
   React = require('react'),
   trelloAPI = require('../api/trelloAPI'),
   ActivityIndicator = require('./ActivityIndicator'),
   Toolbar = require('./Toolbar'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists')
;

var App = React.createClass({

   getInitialState: function() {
      return {
         board: null,
         loading: true
      };
   },

   componentDidMount: function() {
      this.loadBoard(this.props.boardId);
   },

   loadBoard: function(boardId) {
      this.setState({loading: true});

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
   },

   render: function() {
      return !this.state.loading ? (
         <div className="app"> {/*<div className="app" style={{backgroundImage: 'url(' + this.state.board.backgroundImage.scaled[0].url + ')'}}>*/}
            <Toolbar />
            <BoardBar board={this.state.board} />
            <CardLists ref="cardLists" lists={this.state.board.lists} />
         </div>
      ) : (
         <div className="app loading">
            <ActivityIndicator />
         </div>
      );
   }

});

module.exports = App;
