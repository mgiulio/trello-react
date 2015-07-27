var
   trelloAPI = require('./api/trelloAPI'),
   React = require('./lib/react/react'),
   App = require('./components/App'),
   boards = {
      'Trello Development': '4d5ea62fd76aa1136000000c'
   },
   boardId = boards['Trello Development']
;

trelloAPI.setKeys({
   appKey: '87cfab06a03de3e5d87a6fa9273c4ab4',
   appSecret: '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c'
});

React.render(<App boardId={boardId} />, document.body);
