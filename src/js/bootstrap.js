var
   appVersion = '0.2',
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   //page = require('page')
;

bootstrap();

function bootstrap() {
   trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

   React.render(<App version={appVersion} />, document.body);

   /*
   page('/', home);
   page('/board/:id', board);
   page('*', notFound);
   page();
   */
}

/*
function home() {
   renderApp({state: 'home'});
}

function  board(ctx) {
   loadBoard(ctx.params.id);
}

function notFound() {
   renderApp({state: 'not found'});
}
*/
