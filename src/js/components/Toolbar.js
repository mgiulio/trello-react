var
   React = require('react')
;

var Toolbar = React.createClass({

   render: function() {
      return (
         <header className="toolbar">
            <a className="logo" href="/">App Logo</a>
         </header>
      );
   }

});

module.exports = Toolbar;
