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

   /*
   componentDidMount: function() {
      window.addEventListener('resize', util.debounce(function() {
         this.setState({listMaxHeight: this.computeListMaxHeight()});
      }.bind(this), 100));

      this.setState({listMaxHeight: this.computeListMaxHeight()});
   },
   */

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

      var listComponents = lists.map(list => {
         var props = {list: list};

         if (this.state.listMaxHeight != null)
            props.maxHeight = this.state.listMaxHeight;

         return <CardList {...props} key={list.id} /> ;
      });

      return (
         <section className="lists-container">
            {/*listComponents*/}
            <article>
               <h1>Title</h1>
               <p>foo is better than baz</p>
            </article>
            <article>
               <h1>Title</h1>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
            </article>
            <article>
               <h1>Title</h1>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
               <p>foo is better than baz</p>
            </article>

         </section>
      );
   }

});

module.exports = CardLists;
