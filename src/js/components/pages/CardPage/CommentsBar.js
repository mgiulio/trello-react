var
   React = require('react')
;

var CommentsBar = React.createClass({

   render: function() {
      return (
         <header className="comments__bar">
            <p className="comments__bar__counters">
               <span className="comments__bar__counters__label">Comments</span>
               <span className="comments__bar__counters__value">{this.props.shownComments}/{this.props.totalComments}</span>
            </p>
         </header>
      );
   }

});

module.exports = CommentsBar;
