var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,util = require('../../../lib/util')
   ,marked = require('marked')
   ,Timestamp = require('../../Timestamp')
;

var Comments = React.createClass({

   mixins: mixins(),

   render: function() {
      var commentItems = this.props.data.map((c,i) => (
         <li className="item" key={i}>
            <h2 className="username"><a href={c.author.profilePageUrl}>{c.author.username}</a></h2>
            <img className="avatar" src={ 'avatarUrl' in c.author ? c.author.avatarUrl : '/img/avatar-placeholder.jpg' } />
            <div className="text" dangerouslySetInnerHTML={{__html: marked(c.text, {sanitize: true})}}></div>
            <p className="meta">
               <Timestamp dateTime={c.timestamp} />
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
