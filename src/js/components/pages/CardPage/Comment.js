var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,marked = require('marked')
   ,Timestamp = require('../../Timestamp')
;

var Comment = React.createClass({

   mixins: mixins(),

   render: function() {
      var author;
      if (this.props.author) {
         author = this.props.author;
         if (!author.avatarUrl)
            author.avatarUrl = this.props.defaultAvatarUrl;
      }
      else {
         author = {
            avatarUrl: this.props.defaultAvatarUrl,
            profilePageUrl: null,
            username: 'unknown user'
         };
      }

      return (
         <li className="item">
            <h2 className="username">{author.profilePageUrl ? <a href={author.profilePageUrl}>{author.username}</a> : author.username}</h2>
            <img className="avatar" src={author.avatarUrl} />
            <div className="text" dangerouslySetInnerHTML={{__html: marked(this.props.children.toString(), {sanitize: true})}}></div>
            <p className="meta">
               <Timestamp dateTime={this.props.timestamp} now={this.props.now} />
            </p>
         </li>
      );
   }

});

module.exports = Comment;
