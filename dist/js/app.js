var
   App = React.createClass({
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

                  <section className="lists">
               		<CardLists />
               	</section>

               	<div className="sidebar">
                  </div>
               </div>
            );
         }
   }),

   Toolbar = React.createClass({
      render: function() {
         return (
            <header className="toolbar">
               <div className="section search">
                  <button>Boards</button>
                  <input type="search" placeholder="Sarch..." />
               </div>
               <div className="section misc">
                  <div className="create">
                     <button className="add-new">+</button>
                  </div>
                  <div className="user">
                     <button className="button">
                        <img className="avatar" src={this.props.user.avatarUrl} alt="" />
                        <span className="username">{this.props.user.username}</span>
                     </button>
                  </div>
                  <div className="notifications">
                     <button>N</button>
                  </div>
               </div>
               <a className="logo" href="/">Trello</a>
            </header>
         );
      }
   }),

   CardLists = React.createClass({
      getInitialState: function() {
         return {
            lists: []
         };
      },
      createList: function(listName) {
         this.setState({lists: this.state.lists.concat({name: listName})});
      },
      render: function() {
         var lists = this.state.lists.map(function(list) { return <CardList data={list} /> ;});

         return (
            <div className="lists-container">
               {lists}
               <AddNewListControl onUserInput={this.createList} />
            </div>
         );
      }
   }),

   CardList = React.createClass({
      render: function() {
         var d = this.props.data;

         return (
            <article className="list">
               <header>
                  <h2 className="name">{d.name}</h2>
               </header>
               <ul className="items">
               </ul>
               <footer>
               </footer>
            </article>
         );
      }
   }),

   AddNewListControl = React.createClass({
      getInitialState: function() {
         return {
            open: false
         };
      },
      open: function() {
         this.setState({open: true});
      },
      close: function() {
         this.setState({open: false});
      },
      save: function() {
         var listName = this.refs.listName.getDOMNode().value.trim();

         if (listName === '')
            return;

         this.close();
         this.props.onUserInput(listName);
      },
      render: function() {
         return !this.state.open ? (
            <div className="add-new-list">
               <button onClick={this.open}>Add New</button>
            </div>
         ) : (
            <div className="add-new-list">
               <input
                  type="text"
                  placeholder="List title here..."
                  ref="listName"
               />
               <button onClick={this.save}>Save</button>
               <button onClick={this.close}>Cancel</button>
            </div>
         );
      }
   })
;

React.render(
   <App />,
   document.body
);
