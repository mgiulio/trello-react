var
   React = require('react'),
   assign = require('object-assign'),

   HomePage = require('./HomePage/HomePage'),
   BoardPage = require('./BoardPage/BoardPage'),
   AboutPage = require('./AboutPage')
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
