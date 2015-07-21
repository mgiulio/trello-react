var CardLists = React.createClass({

   /*
   createList: function(listName) {
      this.setState({lists: this.state.lists.concat({name: listName})});
   },
   */

   render: function() {
      var lists = this.props.lists;

      var listComponents = lists.map(function(list) { return <CardList list={list} /> ;});

      var
         listWidth = 300,
         margin = 20,
         scrollableWidth = (lists.length /*+ 1*/ ) * (listWidth + margin);

      return (
         <section className="lists-container">
            <div className="lists" style={{width: scrollableWidth + 'px'}}>
               {listComponents}
               { /* <AddNewListControl onUserInput={this.createList} /> */ }
            </div>
         </section>
      );
   }

});
