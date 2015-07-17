var App = React.createClass({

   getInitialState: function() {
      return {
         user: {
            username: 'mgiulio',
            avatarUrl: 'img/avatar.png'
         },
         lists: []
      };
   },

   render: function() {
      return (
         <div className="app">
            <Toolbar user={this.state.user} />

            <div className="board-info">
               <h2 className="board-title">Test Board</h2>
            </div>

            <CardLists />

            <div className="sidebar">
            </div>
         </div>
      );
   }

});
