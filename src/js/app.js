var App = React.createClass({

   getInitialState: function() {
      return {
         user: {
            username: 'mgiulio',
            avatarUrl: 'img/avatar.png'
         },
         board: {}
      };
   },

   componentDidMount: function() {
      console.log('start activity indicator');

      console.log(this.props);
      var
         url = 'https://api.trello.com/1/boards/' + this.props.boardId + '/?key=' + this.props.appKey
      ;

      fetch(url)
         .then(
            function(response) {
               if (response.status != 200)
                  throw new Error('Status error code: ' + response.status );

               response.json().then(function(boardJSON) {
                  this.setState({board: this.processBoardJSON(boardJSON)});
               }.bind(this));
            }.bind(this),
            function() {
               console.log('error');
            }.bind(this)
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
            <Toolbar user={this.state.user} />
            <BoardBar board={this.state.board} />
            <CardLists />
            <Sidebar />
         </div>
      );
   }

});
