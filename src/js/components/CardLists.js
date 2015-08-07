var
   React = require('react'),
   CardList = require('./CardList'),
   util = require('../lib/util')
;

var CardLists = React.createClass({

   getInitialState: function() {
      return {
         listMaxHeight: null
      };
   },

   componentDidMount: function() {
      window.addEventListener('resize', util.debounce(() => {
         this.setState({listMaxHeight: this.computeListMaxHeight()});
      }, 100));

      this.setState({listMaxHeight: this.computeListMaxHeight()});
   },

   computeListMaxHeight: function() {
      var
         cardListsHeight = React.findDOMNode(this).offsetHeight,
         scrollbarSize = 17,
         gap = 20,
         listHeaderHeight = React.findDOMNode(this).querySelector('header').offsetHeight,
         listVPadding = 10 + 10
      ;

      return  cardListsHeight - scrollbarSize - gap - listHeaderHeight - listVPadding;
   },

   render: function() {
      var lists = this.props.lists;

      var listComponents = lists.map(list => {
         var props = {list: list};

         if (this.state.listMaxHeight != null)
            props.maxHeight = this.state.listMaxHeight;

         return <CardList {...props} key={list.id} /> ;
      });

      return (
         <div className="card-lists">
            {listComponents}
         </div>
      );
   }

});

module.exports = CardLists;
