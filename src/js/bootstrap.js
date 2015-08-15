var
   React = require('react'),

   HomePage = require('./components/Pages/HomePage/HomePage'),
   BoardPage = require('./components/Pages/BoardPage/BoardPage'),
   AboutPage = require('./components/Pages/AboutPage'),
   NotFoundPage = require('./components/Pages/NotFoundPage'),

   Router = require('react-router'),
   Route = Router.Route,
   RouteHandler = Router.RouteHandler,
   DefaultRoute = Router.DefaultRoute,
   NotFoundRoute = Router.NotFoundRoute,

   trelloAPI = require('./data/trelloAPI')
;

var App = React.createClass({

   render: function() {
      return (
         <div className='app'>
            <RouteHandler />
         </div>
      );
   }

});

bootstrap();

function bootstrap() {
   trelloAPI.setAppKey('dc529cce071b9272f0226c46515d78e5');

   var routes = (
      <Route name="home" path="/dist/" handler={App}>
         <DefaultRoute handler={HomePage} />
         <NotFoundRoute handler={NotFoundPage}/>
         <Route name="about" path="about" handler={AboutPage} />
         <Route name="board" path="board/:id" handler={BoardPage} />
      </Route>
   );

   Router.run(routes, Router.HistoryLocation, (Root) => {
      React.render(<Root/>, document.body);
   })
}
