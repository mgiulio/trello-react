var
   React = require('react')
   ,moment = require('moment')
;

var Timestamp = React.createClass({

   render: function() {
      var
         dt = this.props.dateTime,
         mdt = moment(dt)
      ;

      var content = typeof this.props.format === 'object' ?
         mdt.from(this.props.format) :
         mdt.format(this.props.format)
      ;

      var absTime = mdt.format('dddd, MMMM Do YYYY, h:mm:ss a');

      return (
         <time
            className="timestamp"
            dateTime={dt}
            title={absTime}
         >
            {content}
         </time>
      );
   }

});

module.exports = Timestamp;
