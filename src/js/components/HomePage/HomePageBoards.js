var
   React = require('react'),
   ActionCreators = require('../../actions/ActionCreators')
;

var Board = React.createClass({

   render: function() {
      return (
         <li className="item">
            <h2 className="title"><a href={`/boards/${this.props.id}`}>{this.props.name}</a></h2>
         </li>
      );
   }

});

var BoardGroup = React.createClass({

   render: function() {
      var items = this.props.boards.map((board, i) => <Board key={i} name={board.name} id={board.id} />);

      return (
         <section className="group">
            <h2 className="title">{this.props.name}</h2>
            <ul className="items">
               {items}
            </ul>
         </section>
      );
   }

});

var HomePageBoards = React.createClass({

   render: function() {
      var groups = this.props.boards.map((group, i) => <BoardGroup key={i} name={group.name} boards={group.boards} />);

      return (
         <div className="boards" onClick={this.handleBoardClick}>
            {groups}
         </div>
      );
   },

   handleBoardClick: function(e) {
      if (e.target.tagName.toLowerCase() != 'a')
         return;

      e.stopPropagation();
      e.preventDefault();

      var boardUrl = e.target.href;
      var boardId = boardUrl.slice(boardUrl.lastIndexOf('/') + 1);

      ActionCreators.loadBoard(boardId);
   }

});

module.exports = HomePageBoards;
