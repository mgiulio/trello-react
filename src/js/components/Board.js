var
   React = require('react'),
   BoardBar = require('./BoardBar'),
   CardLists = require('./CardLists'),
   Board = React.createClass({

      render: function() {
         var boardMeta = this.extractBoardMeta(this.props.board);

         return (
            <div className="board">
               <h1>board</h1>
               <p>foo</p>
               {/*
               <BoardBar board={boardMeta} />
               <CardLists lists={this.props.board.lists} />
               */}
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
