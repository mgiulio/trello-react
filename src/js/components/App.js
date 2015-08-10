var
   React = require('react'),

   AppStore = require('../stores/AppStore'),

   HomePage = require('./HomePage/HomePage'),
   BoardPage = require('./BoardPage/BoardPage'),
   ActivityIndicator = require('./ActivityIndicator')
   //PageNotFound = require('./PageNotFound'),
   //ErrorPanel = require('./ErrorPanel'),

;

var App = React.createClass({

   getInitialState: function() {
      this.defineAppStates();

      return {rootId: null, props: null};
   },

   defineAppStates: function() {
      this.appStates = {
         'home': () => {
            this.replaceState({rootId: 'home', props: {appVersion: this.props.version, boards: AppStore.getBoards()}});
         },

         'loading': () => {
            this.setState({loading: true});
         },

         'board': () => {
            var board = AppStore.getBoard();
            this.replaceState({rootId: 'board', props: {board: board}});
         }

         /*
         'loadingError': () => {
            var error = AppStore.getLoadingError();
            this.setState({rootId: 'loading', props: {error: error}});
         },
         */
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
      'home':  HomePage,
      'board': BoardPage
   },

   render: function() {
      var activityIndicator;
      var className = 'app';
      if (this.state.loading) {
         className += ' loading';
         //activityIndicator = <ActivityIndicator />;
      }
      activityIndicator = <ActivityIndicator />; // <ActivityIndicator visible=... />

      var page;
      if (this.state.rootId)
         page = React.createElement(this.roots[this.state.rootId], React.__spread({},  this.state.props));

      return (
         <div className={className}>
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
