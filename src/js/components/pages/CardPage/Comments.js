var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
;

var Comments = React.createClass({

   mixins: mixins(),

   render: function() {
      var commentItems = this.props.data.map((c,i) => (
         <li className="item" key={i}>
            <h2 className="username"><a href={c.author.profilePageUrl}>{c.author.username}</a></h2>
            <img className="avatar" src={c.author.avatarUrl} />
            <div className="text">
               {c.text}
            </div>
            <p className="meta">
               <time className="timestamp">{c.timestamp}</time>
            </p>
         </li>
      ));

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
