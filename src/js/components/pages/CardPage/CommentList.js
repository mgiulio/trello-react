var
   React = require("react")
   ,Comment = require('./Comment')
;

var CommentList = React.createClass({

   render: function() {
      return (
         <ul className="items">
            {this.commentComponents}
         </ul>
      );
   },

   shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.comments.length === this.props.comments.length)
         return false;

      this.commentComponents = this.generateCommentsComponents(nextProps.comments);
      return true;
   },

   componentWillMount: function() {
      this.commentComponents = this.generateCommentsComponents(this.props.comments);
   },

   generateCommentsComponents: function(comments) {
      return comments.map((c, i) =>
         <Comment
            key={i}
            author={c.author}
            timestamp={c.timestamp}
            defaultAvatarUrl="/img/avatar-placeholder.jpg"
         >
            {c.text}
         </Comment>)
      ;
   }

});

module.exports = CommentList;
