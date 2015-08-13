var
   React = require('react'),
   assign = require('object-assign'),

   HomePage = require('./Pages/HomePage/HomePage'),
   BoardPage = require('./Pages/BoardPage/BoardPage'),
   AboutPage = require('./Pages/AboutPage')
;

var App = React.createClass({

   pageComponent: { // Maps a page name string to the relative React component
      'home':  HomePage,
      'board': BoardPage,
      'about': AboutPage
   },

   render: function() {
      var page = React.createElement(
         this.pageComponent[this.props.pageName],
         this.props.pageProps
      );

      return (
         <div className='app'>
            {page}
         </div>
      );
   }

});

module.exports = App;
