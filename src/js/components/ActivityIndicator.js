var
   React = require('react')
   ,mixins = require('../mixins/mixins')
;


var ActivityIndicator = React.createClass({

   mixins: mixins(),

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
