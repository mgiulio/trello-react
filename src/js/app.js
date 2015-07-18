var App = React.createClass({

   getInitialState: function() {
      this.key = '87cfab06a03de3e5d87a6fa9273c4ab4';
      this.secret = '98c5231e7ef24465b02b6d20eb378280ea4b1b1fb5ffc5078a463630610c284c';

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

      var
         boardId = '4d5ea62fd76aa1136000000c',
         url = 'https://api.trello.com/1/boards/' + boardId + '/?key=' + this.key
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
