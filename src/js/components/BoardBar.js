var
   React = require('react'),
   MetaItem = require('./MetaItem'),
   BoardBar = React.createClass({

      render: function() {
         var b = this.props.board;

         var organization;
         if ('organization' in b)
            organization =
               <MetaItem icon="website" className="organization">
                  <a href={b.organization.url}>
                     {b.organization.name}
                  </a>
               </MetaItem>
         ;

         return (
            <div className="boardbar">
               <h2 className="board-name"><a href={b.url}>{b.name}</a></h2>
               <div className="board-meta">
                  {organization}
                  <MetaItem icon="lock" className="permission-level">{b.permissionLevel}</MetaItem>
                  <MetaItem icon="summary" className="list-count">{b.numLists}</MetaItem>
               </div>
            </div>
         );
      }

   })
;

module.exports = BoardBar;
