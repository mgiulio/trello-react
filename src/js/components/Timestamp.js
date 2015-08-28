var
   React = require('react')
   ,datetime = require('../lib/datetime')
;

var Timestamp = React.createClass({

   render: function() {
      var
         dt = this.props.dateTime,
         formattedDt = this.props.onlyDate ? datetime.formatDate(dt) : datetime.formatDateTime(dt)
      ;

      return (
         <time className="timestamp" dateTime={dt}>{formattedDt}</time>
      );
   }

});

module.exports = Timestamp;
