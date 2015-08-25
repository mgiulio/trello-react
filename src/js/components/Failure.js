var
   React = require('react')
   ,mixins = require('../mixins/mixins')
;

var Failure = React.createClass({

   mixins: mixins(),

   componentDidUpdate: function() {
      React.findDOMNode(this).querySelector('.action .button').focus();
   },

   render: function() {
      var button;
      if (this.props.actionButton) {
         var b = this.props.actionButton;
         button = <button className="button action" onClick={b.onClick}>{b.label}</button>;
      }

      return (
         <div className="failure">
            <h1 className="title">Oops...Something Went Wrong!</h1>
            <p className="msg">{this.props.msg}</p>
            <p className="action">{button}</p>
         </div>
      );
   }

});

module.exports = Failure;
