var
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   loadBoard = require('./actions/board'),
   renderApp = require('./renderApp'),
   page = require('page')
;

bootstrap();

function bootstrap() {
   trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

   page('/', home);
   page('/board/:id', board);
   page('*', notFound);
   page();
}

function home() {
   renderApp({state: 'home'});
}

function  board(ctx) {
   loadBoard(ctx.params.id);
}

function notFound() {
   renderApp({state: 'not found'});
}
