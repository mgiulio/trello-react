var
   React = require('react'),

   //trelloAPI = require('./api/trelloAPI'),
   App = require('./components/App'),
   Board = require('./components/Board'),

   Router = require('react-router'),
   Route = Router.Route,
   routes = (
      <Route path="/" handler={App}>
         <Route path="board/:boardId" handler={Board} />
      </Route>
   )
;

/*
trelloAPI.setKeys({
   appKey: '87cfab06a03de3e5d87a6fa9273c4ab4',
   appSecret: '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c'
});
*/

Router.run(routes, Router.HashLocation, (Root, state) => {
   console.log(state);

   var filt = state.routes.filter(route => route.handler.fetch);
   console.log(filt);

   //catch

   React.render(<Root />, document.body);
});
