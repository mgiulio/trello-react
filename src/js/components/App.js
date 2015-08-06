var
   React = require('react'),
   Home = require('./Home')
   //AppStore = require('../stores/AppStore')//,
   //Toolbar = require('./Toolbar'),
   //Board = require('./Board'),
   //ActivityIndicator = require('./ActivityIndicator'),
   //PageNotFound = require('./PageNotFound'),
   //ErrorPanel = require('./ErrorPanel'),

;

var App = React.createClass({

   getInitialState: function() {
      return this.getHomeState();
   },

   componentDidMount: function() {
      //AppStore.addChangeListener(this._onChange);
   },

   componentWillUnmount: function() {
      //AppStore.removeChangeListener(this._onChange);
   },

   _onChange: function() {
      //this.appStates[AppStore.getAppState()]();
   },

   getHomeState: function() {
      return {rootId: 'home', props: {appVersion: this.props.version}};
   },

   appStates: {
      'home': () => {
         this.setState(this.getHomeState());
      },

      /*
      'loading': () => {
         this.setState({rootId: 'loading', props: null});
      },
      */

      /*
      'loadingError': () => {
         var error = AppStore.getLoadingError();
         this.setState({rootId: 'loading', props: {error: error}});
      },
      */

      /*
      'board': () => {
         var board = AppStore.getBoard();
         this.setState({rootId: 'board', props: {board: board}});
      },
      */
   },

   roots: {
      'home':  Home
   },

   render: function() {
      return React.createElement(this.roots[this.state.rootId], React.__spread({},  this.state.props));
   }

});

module.exports = App;
