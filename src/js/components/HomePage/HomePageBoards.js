var
   React = require('react')
;

var Board = React.createClass({

   render: function() {
      return (
         <li className="item" /*onClick={ActionCreators.loadBoard.bind(ActionCreators, this.props.id)}*/>
            <h2 className="title">{this.props.name}</h2>
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
      //var groups = this.props.boards.map((group, i) => <BoardGroup key={i} name={group.name} boards={group.boards} />);

      return (
         <div className="boards">
            No boards yet
            <a href="#" onClick={this.onBoardSelection.bind(this, 'trellodev-id')} >Trello Development</a>
            <a href="#" onClick={this.onBoardSelection.bind(this, 'trelloteam-id')}>Trello Team</a>
            {/* groups */}
         </div>
      );
   },

   onBoardSelection: function(boardId) {
      this.props.onPageSwitch('board', {boardId: boardId});
   }

});

module.exports = HomePageBoards;
