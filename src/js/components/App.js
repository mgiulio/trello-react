var
   React = require('react'),
   assign = require('object-assign'),

   HomePage = require('./HomePage/HomePage'),
   BoardPage = require('./BoardPage/BoardPage')
;

var App = React.createClass({

   getInitialState: function() {
      return {
         pageName: 'home',
         pageProps: {}
      };
   },

   pageComponent: { // Maps a page name string to the relative React component
      'home':  HomePage,
      'board': BoardPage
   },

   gotoPage: function(pageName, pageProps) {
      this.setState({pageName: pageName, pageProps: pageProps});
   },

   render: function() {
      var page = React.createElement(
         this.pageComponent[this.state.pageName],
         assign({}, this.state.pageProps, {onPageSwitch: this.gotoPage})
      );

      return (
         <div className='app'>
            {page}
         </div>
      );
   }

});

module.exports = App;
