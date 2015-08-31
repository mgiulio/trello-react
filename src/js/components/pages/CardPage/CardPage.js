var
   React = require('react')
   ,settings = require('../../../settings')
   ,data = require('../../../data/data')
   ,Toolbar = require('../../Toolbar')
   ,mixins = require('../../../mixins/mixins')
   ,MetaItem = require('../../MetaItem')
   ,data = require('../../../data/data')
   ,Comments = require('./Comments')
   ,ActivityIndicator = require('../../ActivityIndicator')
   ,Failure = require('../../Failure')
   ,marked = require('marked')
   ,Icon = require('../../Icon')
;

var CardPage = React.createClass({

   mixins: mixins(),

   getInitialState: function() {
      this.loadCard(this.props.params.id);

      return {
         state: 'loading'
      };
   },

   loadCard: function(id) {
      data.getCard(id)
         .then(card => {
            this.setState({state: 'card', card: card});
         })
         .catch(reason => {
            console.log(reason);
            this.setState({state: 'failure', msg: reason.toString()});
         })
      ;
   },

   retry: function() {
      this.loadCard(this.props.params.id);
      this.setState({state: 'loading'});
   },

   render: function() {
      var content;

      switch (this.state.state) {
         case 'loading':
            content = <ActivityIndicator />;
            break;
         case 'failure':
            content = <Failure msg={`Loading failed: ${this.state.msg}`} actionButton={{label: 'Retry', onClick: this.retry}} />;
            break;
         case 'card':
            var c = this.state.card;

            var comments;
            if (c.commentCount > 0)
               comments = <Comments data={c.comments} />;

            content = (
               <div className="wrap">
                  <div className="main">
                     <header>
                        <h1 className="title">{c.title}</h1>
                        <div className="meta">
                           <MetaItem icon="summary" className="parent-list">
                              {c.parentList.name}
                           </MetaItem>
                        </div>
                     </header>
                     <img className="cover" src={c.coverUrl} />
                     <div className="description" dangerouslySetInnerHTML={{__html: marked(c.description ? c.description : 'This card has no decription', {sanitize: true})}}></div>
                     {comments}
                  </div>
                  <div className="aux">
                     <div className="votes">
                        <Icon which="digg"/>
                        <span className="number">{c.votes}</span>
                     </div>
                     <p className="original-card">
                        <a href={c.originalCardUrl}>View this card on Trello</a>
                     </p>
                     <div className="attachments">
                        <h2>{c.attachmentCount} attachments</h2>
                     </div>
                  </div>
               </div>
            );

            break;
         default:
            // throw exception?
      }

      return (
         <div className="page">
            <Toolbar />
            {content}
         </div>
      );
   }

});

module.exports = CardPage;
