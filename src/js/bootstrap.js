var
   trelloAPI = require('./api/trelloAPI'),
   React = require('react'),
   App = require('./components/App'),
   boards = {
      'Trello Development': '4d5ea62fd76aa1136000000c'
   },
   boardId = boards['Trello Development']
;

trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

React.render(<App boardId={boardId} />, document.body);
