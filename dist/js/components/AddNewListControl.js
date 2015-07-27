var AddNewListControl = React.createClass({

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
         <div className="list placeholder">
            <button className="button" onClick={this.open}>Add New List Here</button>
         </div>
      ) : (
         <div className="list placeholder open">
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
