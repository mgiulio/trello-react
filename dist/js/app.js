var App = React.createClass({

   getInitialState: function() {
      return {
         board: {}
      };
   },

   componentDidMount: function() {
      console.log('start activity indicator');

      var
         url = 'https://api.trello.com/1/boards/' + this.props.boardId + '/?key=' + this.props.appKey
      ;

      fetch(url)
         .then(
            function(response) {
               if (response.status != 200)
                  throw new Error('Status error code: ' + response.status );

               response.json()
                  .then(this.processBoardJSON)
                  .then(function(processedBoard) { return {board: processedBoard}; })
                  .then(this.setState.bind(this))
                  .catch(function() {
                     throw new Error('Cannot parse the board JSON');
                  })
               ;
            }.bind(this),
            function() {
               throw new Error('Connection error');
            }
      );
      console.log('stop activity indicator');
   },

   processBoardJSON: function(b) {
      return {
         id: b.id,
         name: b.name,
         url: b.url,
         shortUrl: b.shortUrl
      };
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
