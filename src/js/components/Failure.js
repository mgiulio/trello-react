var
   React = require('react')
;

var Failure = React.createClass({

   render: function() {
      var button;
      if (this.props.actionButton) {
         var b = this.props.actionButton;
         button = <button onClick={b.onClick}>{b.label}</button>;
      }

      return (
         <div>
            <p>{this.props.msg}</p>
            {button}
         </div>
      );
   }

});

module.exports = Failure;
