var BoardBar = React.createClass({

   render: function() {
      var b = this.props.board;

      return (
         <div className="boardbar">
            <h2 className="board-name"><a href={b.shortUrl}>{b.name}</a></h2>
            <span><a href={b.organization.url}>{b.organization.name}</a></span>
            <span>{b.permissionLevel}</span>
            <span>{b.lists.length}</span>
         </div>
      );
   }

});
