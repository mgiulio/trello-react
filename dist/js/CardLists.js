var CardLists = React.createClass({

   getInitialState: function() {
      return {
         listMaxHeight: null
      };
   },

   componentDidMount: function() {
      window.addEventListener('resize', debounce(function() {
         this.setState({listMaxHeight: this.computeListMaxHeight()});
      }.bind(this), 100));

      this.setState({listMaxHeight: this.computeListMaxHeight()});
   },

   computeListMaxHeight: function() {
      var
         cardListsHeight = this.getDOMNode().offsetHeight,
         scrollbarSize = 17,
         gap = 20,
         listHeaderHeight = this.getDOMNode().querySelector('header').offsetHeight,
         listVPadding = 10 + 10
      ;

      return  cardListsHeight - scrollbarSize - gap - listHeaderHeight - listVPadding;
   },

   render: function() {
      var lists = this.props.lists;

      var listComponents = lists.map(function(list) {
         var props = {list: list};

         if (this.state.listMaxHeight != null)
            props.maxHeight = this.state.listMaxHeight;

         return <CardList {...props} key={list.id} /> ;
      }.bind(this));

      return (
         <section className="lists-container">
            {listComponents}
         </section>
      );
   }

});
