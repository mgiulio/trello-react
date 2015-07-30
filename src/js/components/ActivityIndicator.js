var React = require('react');

var ActivityIndicator = React.createClass({

   render: function() {
      return (
         <div className="activity-indicator">
            <div className="fg hola-bars">
            	<div></div>
            	<div></div>
            	<div></div>
            	<div></div>
            	<div></div>
            </div>
         </div>
      );
   }

});

module.exports = ActivityIndicator;
