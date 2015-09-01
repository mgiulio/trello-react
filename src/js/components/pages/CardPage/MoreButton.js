var
   React = require('react')
;

var MoreButton = React.createClass({

   render: function() {
      var content = this.props.spin === true ? 'holabars' : 'more';

      return (
         <button
            className="button"
            onClick={this.handleClick}
         >
            {content}
         </button>
      );
   },

   handleClick: function(e) {
      e.stopPropagation();
      e.preventDefault();

      this.props.onClick();
   }

});

module.exports = MoreButton;
