var
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
   <CardLists />,
   document.body.querySelector('.lists')
);
