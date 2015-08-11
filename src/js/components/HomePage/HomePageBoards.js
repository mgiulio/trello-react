var
   React = require('react'),
   boards = require('../../boards'),
   gotoPage = require('../../gotopage')
;

var Board = React.createClass({

   render: function() {
      return (
         <li className="item" onClick={this.onBoardSelection}>
            <h2 className="title">{this.props.name}</h2>
         </li>
      );
   },

   onBoardSelection: function() {
      gotoPage('board', {boardId: this.props.id});
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

   getInitialState: function() {
      return {
         boards: boards
      };
   },

   componentDidMount: function() {
   },

   render: function() {
      var groups = this.state.boards.map((group, i) => <BoardGroup key={i} name={group.name} boards={group.boards} />);

      return (
         <div className="boards">
            {groups}
         </div>
      );
   }

});

module.exports = HomePageBoards;
