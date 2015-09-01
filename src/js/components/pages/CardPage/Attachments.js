var
   React = require('react')
;

var Attachments = React.createClass({

   render: function() {
      return (
         <div className="attachments">
            <h2 className="title">Attachments({this.props.size})</h2>
         </div>
      );
   }

});

module.exports = Attachments;
