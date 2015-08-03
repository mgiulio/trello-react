var
   React = require('react'),
   Welcome = React.createClass({

      render: function() {
         return (
            <div className="welcome">
               <h1>Welcome</h1>
               <h2>Enter a public board ID</h2>
            </div>
         );
      }

   })
;

module.exports = Welcome;
