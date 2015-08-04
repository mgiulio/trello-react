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
   trelloAPI.setKeys({
      appKey: '87cfab06a03de3e5d87a6fa9273c4ab4',
      appSecret: '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c'
   });


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
