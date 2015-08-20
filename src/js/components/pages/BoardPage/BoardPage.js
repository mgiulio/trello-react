var
   React = require('react'),

   settings = require('../../../settings'),
   data = require('../../../data/data'),

   Toolbar = require('../../Toolbar'),
   BoardInfo = require('./BoardInfo'),
   CardLists = require('./CardLists'),
   ActivityIndicator = require('../../ActivityIndicator'),
   Failure = require('../../Failure')
;

var BoardPage = React.createClass({

   loadBoard: function(id) {
      data.getBoard(id)
         .then(board => {
            this.replaceState({state: 'board', board: board});
         })
         .catch(reason => { this.replaceState({state: 'failure', reason: reason}); })
   },

   getInitialState: function() {
      this.loadBoard(this.props.params.id);

      return {
         state: 'loading'
      }
   },

   render: function() {
      var
         content,
         rootProps = {className: 'board-page'}
      ;

      switch (this.state.state) {
         case 'loading':
            content = <ActivityIndicator />;
            break;
         case 'board':
            var b = this.state.board;

            var boardMeta = this.extractBoardMeta(b);

            if (settings['board background'] && 'backgroundImage' in b) {
               rootProps.style = {backgroundImage: `url(${b.backgroundImage.full})`};
               var toolbarProps = {translucent: true};
            }

            content = [
               <BoardInfo board={boardMeta} key={1} />,
               <CardLists lists={this.state.board.lists} key={2} />
            ];
            break;
         case 'failure':
            var
               reason = this.state.reason,
               props = {}
            ;

            switch (reason.type) {
               case 'network':
                  props.msg = reason.message;
                  props.actionButton = {label: 'Retry', onClick: this.retry};
                  break;
               case 'resource not found':
                  props.msg = `Board #${this.props.params.id} not found`;
                  break;
               default:
                  props.msg = reason.message || 'Unknown error';
                  props.actionButton = {label: 'Retry', onClick: this.retry};
            }

            content = <Failure {...props} />;
            break;
         default:
            // throw exception?
      }

      return (
   		<div  {...rootProps}>
   			<Toolbar {...toolbarProps} />
            {content}
   		</div>
   	);
   },

   retry: function() {
      this.loadBoard(this.props.params.id);
      this.replaceState({state: 'loading'});
   },

   extractBoardMeta: function(b) {
      var bm = {
         name: b.name,
         url: b.shortUrl,
         permissionLevel: b.permissionLevel,
         numLists: b.lists.length
      };

      if ('organization' in b) {
         bm.organization = {
            name: b.organization.name,
            url: b.organization.url
         };
      }

      return bm;
   }

});

module.exports = BoardPage;
