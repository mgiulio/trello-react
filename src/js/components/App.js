var
   React = require('react'),
   Toolbar = require('./Toolbar'),
   Board = require('./Board'),
   ActivityIndicator = require('./ActivityIndicator'),
   PageNotFound = require('./PageNotFound')
;

var App = React.createClass({

   render: function() {
      var {state, ...props} = this.props;
      return this.tmpl[state](props);
   },

   tmpl: {
      'home': function(props) {
         return (
            <div className="app app--home">
               <Toolbar />
               <div className="app__body" >
                  <h1>Welcome</h1>
               </div>
            </div>
         );
      },
      'board': function(props) {
         return (
            <div className="app app--board">
               <Toolbar />
               <div className="app__body" >
                  <Board board={props.board} />
               </div>
            </div>
         );
      },
      'not found': function(props) {
         return (
            <div className="app app--not-found">
               <Toolbar />
               <div className="app__body" >
                  <PageNotFound />
               </div>
            </div>
         );
      },
      'loading': function(props) {
         return (
            <div className="app app--loading">
               <Toolbar />
               <div className="app__body" >
                  <ActivityIndicator />
               </div>
            </div>
         );
      }
   }

});

module.exports = App;
