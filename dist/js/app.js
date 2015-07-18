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
            <BoardBar board={{name: 'Test Board'}} />
            <CardLists />
            <Sidebar />
         </div>
      );
   }

});
