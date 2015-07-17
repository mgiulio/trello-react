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
                     <nav className="menu">
                        <ul className="items">
                           <li className="item"><a href="#">Create Board</a></li>
                           <li className="item"><a href="#">Create Personal Organization</a></li>
                           <li className="item"><a href="#">Create Business Organization</a></li>
                        </ul>
                     </nav>
                  </div>
                  <div className="user">
                     <button className="button">
                        <img className="avatar" src={this.props.user.avatarUrl} alt="" />
                        <span className="username">{this.props.user.username}</span>
                     </button>
                     <nav className="menu">
                        <ul className="items">
                           <li className="item"><a href="#">Profile</a></li>
                           <li className="item"><a href="#">Cards</a></li>
                           <li className="item"><a href="#">Billing</a></li>
                           <li className="item last-of-group"><a href="#">Settings</a></li>
                           <li className="item"><a href="#">Help</a></li>
                           <li className="item"><a href="#">Apps</a></li>
                           <li className="item"><a href="#">Shortcuts</a></li>
                           <li className="item last-of-group"><a href="#">Share Trello(for free Trello Gold)</a></li>
                           <li className="item"><a href="#">Getting Started Guide</a></li>
                           <li className="item last-of-group"><a href="#">Trello Blog</a></li>
                           <li className="item last-of-group"><a href="#">Change Language</a></li>
                           <li className="item"><a href="#">Log Out</a></li>
                        </ul>
                     </nav>
                  </div>
                  <div className="notifications">
                     <button class="button">+</button>
                     <nav className="menu">
                        <ul className="items">
                           <li className="item"><a href="#">Notification #1</a></li>
                           <li className="item"><a href="#">Notification #2</a></li>
                           <li className="item"><a href="#">Notification #3</a></li>
                           <li className="item"><a href="#">Notification #4</a></li>
                           <li className="item"><a href="#">Notification #5</a></li>
                           <li className="item"><a href="#">Notification #6</a></li>
                        </ul>
                     </nav>
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
