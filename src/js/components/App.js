var
   React = require('react'),

   AppStore = require('../stores/AppStore'),

   Home = require('./Home')
   BoardPage = require('./BoardPage'),
   LoadingPage = require('./LoadingPage')
   ActivityIndicator = require('./ActivityIndicator')
   //PageNotFound = require('./PageNotFound'),
   //ErrorPanel = require('./ErrorPanel'),

;

var App = React.createClass({

   getInitialState: function() {
      this.defineAppStates();

      return {rootId: 'loading', props: null};
   },

   defineAppStates: function() {
      this.appStates = {
         'home': () => {
            this.replaceState({rootId: 'home', props: this.props.appVersion});
         },

         'loading': () => {
            this.setState({loading: true});
         },

         /*
         'loadingError': () => {
            var error = AppStore.getLoadingError();
            this.setState({rootId: 'loading', props: {error: error}});
         },
         */

         'board': () => {
            var board = AppStore.getBoard();
            this.replaceState({rootId: 'board', props: {board: board}});
         }
      };
   },

   componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
   },

   componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
   },

   _onChange: function() {
      this.appStates[AppStore.getAppState()]();
   },


   roots: {
      'home':  Home,
      'board': BoardPage,
      'loading': LoadingPage
   },

   render: function() {
      var activityIndicator;
      if (this.state.loading)
         activityIndicator = <ActivityIndicator />;

      var page = React.createElement(this.roots[this.state.rootId], React.__spread({},  this.state.props));

      return (
         <div className="app">
            {page}
            {activityIndicator}
         </div>
      );
   }

});

module.exports = App;

/*
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

*/
