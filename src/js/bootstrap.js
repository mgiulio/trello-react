var
   React = require('react'),
   trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App')
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
         //props.state = 'board';
         //props.boardId = parts[1];
         props = loadBoard(parts[1]);
      } else {
         props.state = 'not found';
      }
   } else
      props.state = 'not found';

   renderApp(props);
}

function renderApp(props) {
   React.render(<App {...props} />, document.body);
}

function loadBoard(boardId) {
   trelloAPI.getBoard(boardId)
      .then(function(board) {
         renderApp({state: 'board', board: board});
      })
      .catch(function(reason) {
         // Notify user
         console.log('Failed to load the board: ', reason);
         // Retry
         //this.loadBoard(this.props.boardId);
      })
   ;

   return {state: 'loading'};
}
