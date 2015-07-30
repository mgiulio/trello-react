var
   React = require('react'),
   Toolbar = require('./Toolbar'),
   Board = require('./Board'),
   ActivityIndicator = require('./ActivityIndicator')
;

var App = React.createClass({

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
               <Board board={args.board} />
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
      },
      'loading': function() {
         return (
            <div className="app loading">
               <Toolbar />
               <ActivityIndicator />
            </div>
         );
      }
   }

});

module.exports = App;
