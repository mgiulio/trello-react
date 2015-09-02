var
   React = require('react')
;

var HolaBars = React.createClass({

   render: function() {
      var props = {className: 'holabars'};
      if (!this.props.show)
         props.className += ' holabars--hidden';

      return (
         <div {...props}>
            <div className="holabars__bar"></div>
            <div className="holabars__bar"></div>
            <div className="holabars__bar"></div>
            <div className="holabars__bar"></div>
            <div className="holabars__bar"></div>
         </div>
      );
   }

});

module.exports = HolaBars;
