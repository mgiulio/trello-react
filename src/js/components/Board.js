var
   React = require('react'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists'),
   settings = require('../settings'),
   Board = React.createClass({

      render: function() {
         var boardMeta = this.extractBoardMeta(this.props.board);

         var props = {className: 'board'};
         if (settings['board background'])
            props.style = {backgroundImage: 'url(' + this.props.board.backgroundImage.full/*.scaled[0].url*/ + ')'};

         return (
            <div {...props}>
               <BoardBar board={boardMeta} />
               <CardLists lists={this.props.board.lists} />
            </div>
         );
      },

      extractBoardMeta(b) {
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

module.exports = Board;
