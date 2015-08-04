var
   appVersion = '0.2',
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   //page = require('page')
;

bootstrap();

function bootstrap() {
   trelloAPI.setKeys({
      appKey: '87cfab06a03de3e5d87a6fa9273c4ab4',
      appSecret: '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c'
   });

   React.render(<App version={appVersion} />, document.body);

   /*
   page('/', home);
   page('/about', about);
   page('/board/:id', board);
   page('*', notFound);
   page();
   */
}

/*
function home() {
   renderApp({state: 'home'});
}

function about() {
   console.log('foo');
   console.log(arguments);
}

function notFound() {
   renderApp({state: 'not found'});
}
*/
