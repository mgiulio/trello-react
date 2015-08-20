var
   React = require('react'),
   MetaItem = require('../../MetaItem')
;

var BoardInfo = React.createClass({

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
            <div className="board-info">
               <h2 className="name"><a href={b.url}>{b.name}</a></h2>
               <ul className="meta">
                  <li>{organization}</li>
                  <li><MetaItem icon="lock" className="permission-level">{b.permissionLevel}</MetaItem></li>
                  <li><MetaItem icon="summary" className="list-count">{b.numLists}</MetaItem></li>
               </ul>
            </div>
         );
      }

   })
;

module.exports = BoardInfo;
