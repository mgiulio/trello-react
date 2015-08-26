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
            avatarUrl: '/img/avatar.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-00',
            avatarUrl: '/img/avatar.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-01',
            avatarUrl: '/img/avatar.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-02',
            avatarUrl: '/img/avatar.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         },
         {
            username: 'user-03',
            avatarUrl: '/img/avatar.png',
            commentText: "@hostilefork Interesting thought, I'll pass that on! For now, you might want to manually add a visual indicator to the card at the top of the list to make that more apparent(e.g. attach a pic and use as card cover)",
            timestamp: 'Aug 12 at 6:56 PM'
         }
      ];

      var commentItems = comments.map(c => (
         <li className="comment">
            <h2 className="username">{c.username}</h2>
            <img className="avatar" src={c.avatarUrl} />
            <div className="content">
               {c.commentText}
            </div>
            <p className="meta">
               <time className="timestamp">{c.timestamp}</time>
            </p>
         </li>
      ));

      return (
   		<div className="page">
   			<Toolbar />
            <div className="wrap">
               <div className="main">
                  <header>
                     <h1 className="title">What can you expect from this board</h1>
                     <div className="meta">
                        <MetaItem icon="summary" className="parent-list">
                           <a href="#">Foo List</a>
                        </MetaItem>
                     </div>
                  </header>
                  <img className="cover" src="/img/avatar.png" />
                  <div className="description">
                     <p>This is the description for card #{this.props.params.id}</p>
                     Why is this board here?
The primary purpose of this board is to communicate with our customers what the Trello team is working on, what’s potentially coming up, and to listen to the insights our customers have about what they’d like to see in Trello.

Regular updates to cards that are In Progress
If a card is “In Progress,” that means we’re working on it. You can expect to see regular updates to cards that are on the In Progress list in Trello. The Trello support team will update this list on a regular basis and read the comments frequently.

Customer comments on cards
We review the comments to learn how our users can get the most out of Trello. This information is really helpful! We may not get to respond to all of the comments on this board, but please keep the feedback coming.

The best place to get support isn’t on this board, but rather via help.trello.com. If you can't find what you're looking for, contact us. We can provide much better support via email than via public comments on this board.

We want cards to be a place where you can read the history of updates from the team without needing to try to figure out what’s a comment from the Trello team and what’s a comment from a customer. Since the primary purpose of public comments is an input stream of insights from our customers, we’ll be deleting public comments after seven days. This will cause comments from Trello team members to be much more visible. (We may not implement this immediately, but expect this change to happen eventually).


                  </div>
                  <div className="activity">
                     <header>
                        <h1 className="title">Activity</h1>
                        <div className="meta">
                           <p>999 Comments</p>
                        </div>
                     </header>
                     <ul className="comments">
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
