var
   React = require('react'),
   Router = require('react-router'),
   RouteHandler = Router.RouteHandler,

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
      return (
         <div className="app">
            <Toolbar />
            <RouteHandler />
         </div>
      );
   }

});

module.exports = App;
