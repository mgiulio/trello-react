var App = React.createClass({

   getInitialState: function() {
      return {
         board: {}
      };
   },

   componentDidMount: function() {
      console.log('start activity indicator');

      trelloAPI.getBoard(this.props.boardId)
         .then(function(processedBoard) { return {board: processedBoard}; })
         .then(this.setState.bind(this))
         .catch(function() { console.log(arguments); })
      ;

      console.log('stop activity indicator');
   },

   render: function() {
      return (
         <div className="app">
            <Toolbar />
            <BoardBar board={this.state.board} />
            <CardLists />
            <Sidebar />
         </div>
      );
   }

});
