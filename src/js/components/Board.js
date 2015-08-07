var
   React = require('react'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists'),
   settings = require('../settings'),
   Board = React.createClass({

      render: function() {
         var b = this.props.board;

         var boardMeta = this.extractBoardMeta(b);

         var props = {className: 'board'};

         if (settings['board background'] && 'backgroundImage' in b)
            props.style = {backgroundImage: `url(${b.backgroundImage.full})`};

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
