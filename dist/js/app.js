var App = React.createClass({

   getInitialState: function() {
      return {
         board: null,
         loading: true
      };
   },

   componentDidMount: function() {
      this.loadBoard(this.props.boardId);
   },

   loadBoard: function(boardId) {
      this.setState({loading: true});

      trelloAPI.getBoard(boardId)
         .then(function(board) {
            this.setState({loading: false, board: board});
         }.bind(this))
         .catch(function(reason) {
            // Notify user
            console.log(reason);
            alert('Board loading failed(see console)...retrying...')
            // Retry
            //this.loadBoard(this.props.boardId);
         }.bind(this))
      ;
   },

   render: function() {
      return !this.state.loading ? (
         <div className="app"> {/*<div className="app" style={{backgroundImage: 'url(' + this.state.board.backgroundImage.scaled[0].url + ')'}}>*/}
            <Toolbar />
            <BoardBar board={this.state.board} />
            <CardLists ref="cardLists" lists={this.state.board.lists} />
         </div>
      ) : (
         <div className="app loading">
            <ActivityIndicator />
         </div>
      );
   }

});
