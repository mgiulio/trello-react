var
   React = require('react'),

   Toolbar = require('../Toolbar'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists'),
   settings = require('../../settings')
;

var BoardPage = React.createClass({

      render: function() {
         return (
            <div>
               {this.props.boardId}
            </div>
         );

         var b = this.props.board;

         var boardMeta = this.extractBoardMeta(b);

         var props = {className: 'board-page'};
         if (settings['board background'] && 'backgroundImage' in b)
            props.style = {backgroundImage: `url(${b.backgroundImage.full})`};


         return (
      		<div  {...props}>
      			<Toolbar />
      			<BoardBar board={boardMeta} />
               <CardLists lists={this.props.board.lists} />
      		</div>
      	);
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

   })
;

module.exports = BoardPage;
