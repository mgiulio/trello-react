var
   React = require('react'),
   gotoPage = require('../gotopage')
;

var Toolbar = React.createClass({

   render: function() {
      var headerProps = {
         className: "toolbar",
         onClick: this.handleCLick
      };

      if (this.props.translucent)
         headerProps.className += " translucent";

      return (
         <header {...headerProps}>
            <nav>
               <a className="logo" href="./" data-page="home">App Logo</a>
               <a href="./about" className="about" data-page="about">About</a>
            </nav>
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
