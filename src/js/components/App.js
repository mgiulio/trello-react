var
   React = require('react'),
   AppStore = require('../stores/AppStore'),
   Toolbar = require('./Toolbar'),
   Board = require('./Board'),
   ActivityIndicator = require('./ActivityIndicator'),
   PageNotFound = require('./PageNotFound'),
   ErrorPanel = require('./ErrorPanel'),
   Welcome = require('./Welcome')
;

var App = React.createClass({

   getInitialState: function() {
      // here we should call appStates['home']
      return {
         template: 'home',
         templateProps: null
      }
   },

   componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
   },

   componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
   },

   _onChange: function() {
      //this.setState(getTodoState());
      this.appStates[AppStore.getAppState()]();
   },

   appStates: {
      'home': () => {
         this.setState({template: 'home', templateProps: {appVersion: this.props.app}});
      },

      loading: () => {
         this.setState({template: 'loading', templateProps: null);
      },

      loadingError: () => {
         var error = AppStore.getLoadingError();
         this.setState({template: 'loading', templateProps: {error: error}});
      },

      board: () => {
         var board = AppStore.getBoard();
         this.setState({template: 'board', templateProps: {board: board});
      },
   },

   render: function() {
      var root;
      switch (this.state.screen) {
         case 'home':
            root = <Home {...this.state.templateProps} />;
            break;
         case 'loading':
            root = <Loading {...this.state.templateProps} />;
            break;
         case 'board':
            root = <Board {...this.state.templateProps} />;
            break;
      }

      return root;
      //return this.template[this.state.template](this.state.templateProps);
   },

   /*
   template: {
      'home': function() {
         return (
            <div className="app app--home">
               <Toolbar />
               <div className="app__body" >
                  <Welcome appVersion={this.props.appVersion}/>
               </div>
            </div>
         );
      },
      'loading': function(props) {
         var errorPanel;
         if ('error' in props)
            errorPanel = <ErrorPanel title={props.error.title} description={props.error.description} ondismiss={props.onDismiss} />;

         return (
            <div className="app app--loading">
               <Toolbar />
               <div className="app__body" >
                  <ActivityIndicator />
                  {errorPanel}
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
      }

   }
   */

});

module.exports = App;
