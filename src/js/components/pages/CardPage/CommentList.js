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
      if (nextProps.comments.length === this.props.comments.length && nextState.now === this.state.now)
         return false;

      this.commentComponents = this.generateCommentsComponents(nextProps.comments);
      return true;
   },

   componentWillMount: function() {
      this.commentComponents = this.generateCommentsComponents(this.props.comments);
   },

   componentDidMount: function() {
      this.interval = setInterval(() => { this.setState({now: new Date()}); }, this.timeagoRefreshPeriod);
   },

   componentWillUnmount: function() {
      clearInterval(this.interval);
   },

   generateCommentsComponents: function(comments) {
      return comments.map((c, i) =>
         <Comment
            key={i}
            author={c.author}
            timestamp={c.timestamp}
            defaultAvatarUrl="/img/avatar-placeholder.jpg"
            now={this.state.now}
         >
            {c.text}
         </Comment>)
      ;
   },

   getInitialState: function() {
      this.timeagoRefreshPeriod = 5 * 60 * 1000;

      return {
         now: new Date()
      };
   }

});

module.exports = CommentList;
