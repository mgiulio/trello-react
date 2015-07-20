var App = React.createClass({

   getInitialState: function() {
      return {
         board: null
      };
   },

   componentDidMount: function() {
      this.loadBoard(this.props.boardId);
   },

   loadBoard: function(boardId) {
      console.log('start activity indicator');

      trelloAPI.getBoard(boardId)
         .then(function(processedBoard) { return {board: processedBoard}; })
         .then(this.setState.bind(this))
         .catch(function() { console.log(arguments); })
      ;

      console.log('stop activity indicator');
   },

   render: function() {
      return this.state.board !== null ? (
         <div className="app" style={{backgroundImage: 'url(' + this.state.board.backgroundImage.scaled[0].url + ')'}}>
            <Toolbar />
            <BoardBar board={this.state.board} />
            <CardLists />
            <Sidebar />
         </div>
      ) : (
         <div className="app">
            <h1>activity idicator mask</h1>
         </div>
      );
   }

});
