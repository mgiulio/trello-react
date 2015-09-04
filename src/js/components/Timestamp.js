var
   React = require('react')
   ,datetime = require('../lib/datetime')
   ,moment = require('moment')
;

var Timestamp = React.createClass({

   render: function() {
      var
         dt = this.props.dateTime
      ;

      var relativeTime = moment(this.props.dateTime).from(this.props.now);
      var absTime = moment(this.props.dateTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
      
      return (
         <time
            className="timestamp"
            dateTime={dt}
            title={absTime}
         >
            {relativeTime}
         </time>
      );
   }

});

module.exports = Timestamp;
