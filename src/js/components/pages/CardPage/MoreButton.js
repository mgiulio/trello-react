var
   React = require('react'),
   HolaBars = require('./HolaBars')
;

var MoreButton = React.createClass({

   render: function() {
      var
         btnProps = {
            className: 'more-button'
         },
         hbProps = {
         }
      ;

      if (this.props.spin) {
         hbProps.show = true;
         btnProps.className += ' more-button--spinning';
      }
      else {
         hbProps.show = false;
         btnProps.onClick = this.handleClick;
   }

      return (
         <button {...btnProps}>
            <span className="more-button__label">more</span>
            <HolaBars {...hbProps} />
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
