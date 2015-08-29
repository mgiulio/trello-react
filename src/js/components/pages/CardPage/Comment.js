var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,marked = require('marked')
   ,Timestamp = require('../../Timestamp')
;

var Comment = React.createClass({

   mixins: mixins(),

   render: function() {
      var
         a = this.props.author,
         avatarUrl = 'avatarUrl' in a ? a.avatarUrl : this.props.defaultAvatarUrl
      ;

      return (
         <li className="item">
            <h2 className="username"><a href={a.profilePageUrl}>{a.username}</a></h2>
            <img className="avatar" src={avatarUrl} />
            <div className="text" dangerouslySetInnerHTML={{__html: marked(this.props.children.toString(), {sanitize: true})}}></div>
            <p className="meta">
               <Timestamp dateTime={this.props.timestamp} />
            </p>
         </li>
      );
   }

});

module.exports = Comment;
