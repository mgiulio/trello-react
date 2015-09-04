var
   React = require('react')
   ,datetime = require('../lib/datetime')
   ,moment = require('moment')
;

var Timestamp = React.createClass({

   render: function() {
      var
         dt = this.props.dateTime//,
         //formattedDt = this.props.onlyDate ? datetime.formatDate(dt) : datetime.formatDateTime(dt)
      ;

      var content = moment(this.props.dateTime).from(this.props.now);
      
      return (
         <time
            className="timestamp"
            dateTime={dt}>
               {content}
         </time>
      );
   }

});

module.exports = Timestamp;
