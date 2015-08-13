var
   React = require('react'),
   trelloAPI = require('./data/trelloAPI'),
   gotoPage = require('./gotoPage')
;

bootstrap();

function bootstrap() {
   trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

   gotoPage('home');
}
