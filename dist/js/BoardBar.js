var BoardBar = React.createClass({

   render: function() {
      var b = this.props.board;

      return (
         <div className="boardbar">
            <h2 className="board-name"><a href={b.shortUrl}>{b.name}</a></h2>
            
         </div>
      );
   }

});
