var CardLists = React.createClass({

   getInitialState: function() {
      return {
         lists: [
            {name: 'list 1'},
            {name: 'list 2'},
            {name: 'list 3'},
            {name: 'list 4'},
            {name: 'list 5'}
         ]
      };
   },

   createList: function(listName) {
      this.setState({lists: this.state.lists.concat({name: listName})});
   },

   render: function() {
      var lists = this.state.lists.map(function(list) { return <CardList data={list} /> ;});

      var
         listWidth = 300,
         margin = 20,
         scrollableWidth = (this.state.lists.length + 1 ) * (listWidth + margin);

      return (
         <section className="lists-container">
            <div className="lists" style={{width: scrollableWidth + 'px'}}>
               {lists}
               <AddNewListControl onUserInput={this.createList} />
            </div>
         </section>
      );
   }

});
