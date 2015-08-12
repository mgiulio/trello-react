var
   React = require('react'),
   ActivityIndicator = require('../ActivityIndicator'),
   data = require('../../data/data'),
   gotoPage = require('../../gotopage')
;

var HomePageBoards = React.createClass({

   getInitialState: function() {
      this.loadBoards();

      return {
         state: 'loading'
      };
   },

   loadBoards: function() {
      data.getHomeBoards()
         .then(boards => {
            this.setState({state: 'boards', boards: boards});
         })
         .catch(reason => {
            this.setState({state: 'failure'});
         })
      ;
   },

   componentDidMount: function() {
   },

   retry: function() {
      this.loadBoards();
      this.setState({state: 'loading'});
   },

   render: function() {
      var content;

      switch (this.state.state) {
         case 'loading':
            content = <ActivityIndicator />;
            break;
         case 'boards':
            content = this.state.boards.map((group, i) => <BoardGroup key={i} name={group.name} boards={group.boards} />);
            break;
         case 'failure':
            content = [
               <p>Loading failed.</p>,
               <button onClick={this.retry}>Retry</button>
            ];
            break;
         default:
            // throw exception?
      }

      return (
         <div className="boards">
            {content}
         </div>
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

module.exports = HomePageBoards;
