var
   //React = require('../lib/react/react'),
   Router = require('react-router'),
   RouteHandler = Router.RouteHandler
   trelloAPI = require('../api/trelloAPI'),
   ActivityIndicator = require('./ActivityIndicator'),
   Toolbar = require('./Toolbar'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists')
;

var App = React.createClass({

   /*
   getInitialState: function() {
      return {
         board: null,
         loading: true
      };
   },
   */

   /*
   componentDidMount: function() {
      this.loadBoard(this.props.boardId);
   },
   */

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
      return (
         <div className="app">
            <RouteHandler />
         </div>
      );
   }

});

module.exports = App;
