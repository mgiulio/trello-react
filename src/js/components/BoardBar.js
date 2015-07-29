var
   React = require('react'),

   MetaItem = require('./MetaItem'),

   BoardBar = React.createClass({

      render: function() {
         //var b = this.props.board;
         var b = {
            shortUrl: 'foo',
            name: 'foo',
            permisionLevel: 'public',
            lists: [1,2,3]
         };

         /*
         var organization;
         if ('organization' in b)
            organization =
               <MetaItem icon="website" className="organization">
                  <a href={b.organization.url}>
                     {b.organization.name}
                  </a>
               </MetaItem>
         ;
         */

         return (
            <div className="boardbar">
               <h2 className="board-name"><a href={b.shortUrl}>{b.name}</a></h2>
               <div className="board-meta">
                  {/*organization*/}
                  <MetaItem icon="lock" className="permission-level">{b.permissionLevel}</MetaItem>
                  <MetaItem icon="summary" className="list-count">{b.lists.length}</MetaItem>
               </div>
            </div>
         );
      }

   })
;

module.exports = BoardBar;
