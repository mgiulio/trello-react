var
   React = require('react'),
   CardList = require('./CardList'),
   util = require('../../../lib/util')
   ,mixins = require('../../../mixins/mixins')
;

var CardLists = React.createClass({

   mixins: mixins(),

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
         root = React.findDOMNode(this),
         cardListsHeight = root.offsetHeight,
         scrollbarSize = 17,
         gap = 20,
         listHeaderHeight = root.querySelector('header').offsetHeight,
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
