var
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   loadBoard = require('./actions/load-board'),
   renderApp = require('./renderApp')
;

bootstrap();

function bootstrap() {
   trelloAPI.setKeys({
      appKey: '87cfab06a03de3e5d87a6fa9273c4ab4',
      appSecret: '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c'
   });

   window.addEventListener('hashchange', doRouting);

   doRouting();
}

function doRouting() {
   var url = window.location.hash;
   if (url !== '')
      url = url.substring(1);

   var props = {};
   if (url === '')
      props.state ='home';
   else if (url.indexOf('/') !== -1) {
      var parts = url.split('/');
      if (parts[0] === 'board') {
         props = loadBoard(parts[1]);
      } else {
         props.state = 'not found';
      }
   } else
      props.state = 'not found';

   renderApp(props);
}
