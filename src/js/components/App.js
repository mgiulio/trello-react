var
   React = require('react'),

   //ActivityIndicator = require('./ActivityIndicator'),
   Toolbar = require('./Toolbar')
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

   render: function() {
      return this.tmpl[this.props.state](this.props);
   },

   tmpl: {
      'home': function(args) {
         return (
            <div className="app home">
               <Toolbar />
            </div>
         );
      },
      'board': function(args) {
         return (
            <div className="app board">
               <Toolbar />
               <div className="board">
                  <h1>Board #: {args.boardId}</h1>
               </div>
            </div>
         );
      },
      'not found': function(args) {
         return (
            <div className="app not-found">
               <Toolbar />
               <h1>Not Found</h1>
            </div>
         );
      }
   }

});

module.exports = App;
