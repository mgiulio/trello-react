var
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   gotoPage = require('./gotoPage')
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
   gotoPage('home');
}
