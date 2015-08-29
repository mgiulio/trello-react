var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,Comment = require('./Comment')
;

var Comments = React.createClass({

   mixins: mixins(),

   render: function() {
      var commentItems = this.props.data.map((c,i) =>
         <Comment
            key={i}
            author={c.author}
            timestamp={c.timestamp}
            defaultAvatarUrl="/img/avatar-placeholder.jpg"
         >
            {c.text}
         </Comment>)
      ;

      return (
         <div className="comments">
            <header className="topbar">
               <p>{this.props.data.length} Comments</p>
            </header>
            <ul className="items">
               {commentItems}
            </ul>
         </div>
      );
   }

});

module.exports = Comments;
