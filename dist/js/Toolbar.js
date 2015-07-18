var Toolbar = React.createClass({

   getInitialState: function() {
      return {
         visibleMenu: ''
      };
   },

   handleMenuClick: function(clickedMenu) {
      var newVisibleMenu = clickedMenu === this.state.visibleMenu ? '' : clickedMenu;

      this.setState({visibleMenu: newVisibleMenu});
   },

   render: function() {
      return (
         <header className="toolbar">
            <div className="section search">
               <button>Boards</button>
               <input type="search" placeholder="Sarch..." />
            </div>
            <div className="section misc">
               <div className={this.state.visibleMenu === 'create' ? 'create visible' : 'create'}>
                  <button className="button" onClick={this.handleMenuClick.bind(this, 'create')}>+</button>
                  <nav className="menu">
                     <ul className="items">
                        <li className="item"><a href="#">Create Board</a></li>
                        <li className="item"><a href="#">Create Personal Organization</a></li>
                        <li className="item"><a href="#">Create Business Organization</a></li>
                     </ul>
                  </nav>
               </div>
               <div className={this.state.visibleMenu === 'user' ? 'user visible' : 'user'}>
                  <button className="button" onClick={this.handleMenuClick.bind(this, 'user')}>
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
               <div className={this.state.visibleMenu === 'notifications' ? 'notifications visible' : 'notifications'}>
                  <button className="button" onClick={this.handleMenuClick.bind(this, 'notifications')}>+</button>
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

});
