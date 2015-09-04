var
   React = require('react')
   ,datetime = require('../lib/datetime')
   ,moment = require('moment')
   ,Icon = require('./Icon')
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
            <Icon which="clock" />
            {relativeTime}
         </time>
      );
   }

});

module.exports = Timestamp;
