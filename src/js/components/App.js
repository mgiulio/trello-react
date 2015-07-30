var
   React = require('react'),
   Toolbar = require('./Toolbar'),
   Board = require('./Board'),
   ActivityIndicator = require('./ActivityIndicator'),
   PageNotFound = require('./PageNotFound')
;

var App = React.createClass({

   render: function() {
      return this.tmpl[this.props.state](this.props);
   },

   tmpl: {
      'home': function(args) {
         return (
            <div className="app app--home">
               <Toolbar />
            </div>
         );
      },
      'board': function(args) {
         return (
            <div className="app app--board">
               <Toolbar />
               <Board board={args.board} />
            </div>
         );
      },
      'not found': function(args) {
         return (
            <div className="app app--not-found">
               <Toolbar />
               <PageNotFound />
            </div>
         );
      },
      'loading': function() {
         return (
            <div className="app app--loading">
               <Toolbar />
               <ActivityIndicator />
            </div>
         );
      }
   }

});

module.exports = App;
