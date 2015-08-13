var
   React = require('react'),
   gotoPage = require('../gotopage')
;

var Toolbar = React.createClass({

   render: function() {
      return (
         <header className="toolbar" onClick={this.handleCLick}>
            <a className="logo" href="./" data-page="home">App Logo</a>
            <a href="./about" data-page="about">About</a>
         </header>
      );
   },

   handleCLick: function(e) {
      if (e.target.tagName.toLowerCase() !== 'a')
         return;

      e.preventDefault();

      gotoPage(e.target.dataset.page);
   }

});

module.exports = Toolbar;
