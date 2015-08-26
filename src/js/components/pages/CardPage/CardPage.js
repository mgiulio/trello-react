var
   React = require('react')
   ,settings = require('../../../settings')
   ,data = require('../../../data/data')
   ,Toolbar = require('../../Toolbar')
   ,mixins = require('../../../mixins/mixins')
   ,MetaItem = require('../../MetaItem')
;

var CardPage = React.createClass({

   mixins: mixins(),

   render: function() {
      var comments = [
         {
            username: 'user-00',
            avatarUrl: 'foo.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-00',
            avatarUrl: 'foo.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-01',
            avatarUrl: 'foo.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-02',
            avatarUrl: 'foo.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-03',
            avatarUrl: 'foo.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         }
      ];

      var commentItems = comments.map(c => (
         <li>
            <span className="username">{c.username}</span>
            <img className="avatar" src={c.avatarUrl} />
            <div className="content">
               {c.commentText}
            </div>
            <time>{c.timestamp}</time>
         </li>
      ));

      return (
   		<div className="page">
   			<Toolbar />
            <div className="wrap">
               <div className="main">
                  <header>
                     <h1 className="title">Card Title</h1>
                     <div className="meta">
                        <MetaItem icon="summary" className="list">
                           Foo List
                        </MetaItem>
                     </div>
                  </header>
                  <img className="cover" src="foo.png" />
                  <div className="description">
                     <p>This is the description for card #{this.props.params.id}</p>
                  </div>
                  <div className="activity">
                     <header>
                        <h1 className="title">Activity</h1>
                        <div className="meta">
                           <p>999 Comments</p>
                        </div>
                     </header>
                     <ul>
                        {commentItems}
                     </ul>

                  </div>
               </div>
               <div className="aux">
                  <div className="votes">
                     9999 votes
                  </div>
                  <p>link to original card on Trello: this.props.card.url</p>
                  <div className="attachments">
                     <h2>Attachments</h2>
                  </div>
               </div>
            </div>
   		</div>
   	);
   }

});

module.exports = CardPage;
