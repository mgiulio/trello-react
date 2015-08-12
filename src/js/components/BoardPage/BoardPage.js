var
   React = require('react'),

   settings = require('../../settings'),
   data = require('../../data/data'),

   Toolbar = require('../Toolbar'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists'),
   ActivityIndicator = require('../ActivityIndicator')
;

var BoardPage = React.createClass({

   loadBoard: function(id) {
      data.getBoard(id)
         .then(board => {
            this.setState({state: 'board', board: board});
         })
         .catch(reason => {
            this.setState({state: 'failure'});
         })
      ;
   },

   getInitialState: function() {
      this.loadBoard(this.props.boardId);

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

            if (settings['board background'] && 'backgroundImage' in b)
               rootProps.style = {backgroundImage: `url(${b.backgroundImage.full})`};

            content = [
               <BoardBar board={boardMeta} key={1} />,
               <CardLists lists={this.state.board.lists} key={2} />
            ];
            break;
         case 'failure':
            content = [
               <p>Loading failed.</p>,
               <button onClick={this.retry}>Retry</button>
            ];
            break;
         default:
            // throw exception?
      }

      return (
   		<div  {...rootProps}>
   			<Toolbar />
            {content}
   		</div>
   	);
   },

   retry: function() {
      this.loadBoard();
      this.setState({state: 'loading'});
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
