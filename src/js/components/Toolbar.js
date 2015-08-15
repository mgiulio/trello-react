var
   React = require('react'),
   Router = require('react-router'),
   Link = Router.Link
;

var Toolbar = React.createClass({

   render: function() {
      var headerProps = {
         className: "toolbar"
      };

      if (this.props.translucent)
         headerProps.className += " translucent";

      return (
         <header {...headerProps}>
            <nav>
               <Link to="home" className="logo">App Logo</Link>
               <Link to="about" className="about">About</Link>
            </nav>
         </header>
      );
   }

});

module.exports = Toolbar;
