var
   React = require('react'),

   HomePage = require('./components/Pages/HomePage/HomePage'),
   BoardPage = require('./components/Pages/BoardPage/BoardPage')
   ,CardPage = require('./components/Pages/CardPage/CardPage'),
   AboutPage = require('./components/Pages/AboutPage'),
   NotFoundPage = require('./components/Pages/NotFoundPage'),

   Router = require('react-router'),
   {Route, RouteHandler, DefaultRoute, NotFoundRoute} = Router,

   trelloAPI = require('./data/trelloAPI'),
   settings = require('./settings')
   ,mixins = require('./mixins/mixins')
;

var App = React.createClass({

   mixins: mixins(),

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

   var bp = '/'; //window.location.pathname;
   settings.basepath = ''; /*bp[bp.length - 1] === '/' ?
      bp.slice(0, bp.length - 1)
   :
      bp
   ;
   */

   var routes = (
      <Route name="home" path={bp} handler={App}>
         <DefaultRoute handler={HomePage} />
         <NotFoundRoute handler={NotFoundPage}/>
         <Route name="about" path="about" handler={AboutPage} />
         <Route name="board" path="board/:id" handler={BoardPage} />
         <Route name="card" path="card/:id" handler={CardPage} />
      </Route>
   );

   Router.run(routes, Router.HistoryLocation, (Root, state) => {
      docElemClasses(state.pathname);

      React.render(<Root/>, document.body);
   })
}

function docElemClasses(path) {
   var pathSegments = path.split(/\//);
   var className = pathSegments[1];
   if (className === '')
      className = 'home';

   document.documentElement.className = className;
}
