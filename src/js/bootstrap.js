var
   appVersion = '0.3',
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   ActionCreators = require('./actions/ActionCreators'),
   AppDispatcher = require('./dispatcher/AppDispatcher')
;

bootstrap();

function bootstrap() {
   trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

   /*
   window.addEventListener('popstate', function(e) {
      var action = e.state;
      AppDispatcher.dispatch(action);
   });
   */

   React.render(<App version={appVersion} />, document.body);

   setTimeout(() => { ActionCreators.goHome(); }, 500);

}
