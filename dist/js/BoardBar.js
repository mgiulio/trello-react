var BoardBar = React.createClass({

   render: function() {
      return (
         <div className="boardbar">
            <h2 className="board-name">{this.props.board.name}</h2>
         </div>
      );
   }

});
