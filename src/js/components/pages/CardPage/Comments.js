var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,Comment = require('./Comment')
   ,data = require('../../../data/data')
;

var Comments = React.createClass({

   mixins: mixins(),

   /*
   //defaultPrps?
   length //   numComments
   firstPage
   pageSize
   */

   getInitialState: function() {
      this.pageIterator = data.cardCommentPageIterator(this.props.cardId, this.props.pageSize, 2);

      return {
         items: this.props.firstPage
      };
   },

   render: function() {
      var itemComponents = this.state.items.map((i, id) =>
         <Comment
            key={id}
            author={i.author}
            timestamp={i.timestamp}
            defaultAvatarUrl="/img/avatar-placeholder.jpg"
         >
            {i.text}
         </Comment>)
      ;

      var moreBtn;
      if (this.state.items.length < this.props.length)
         moreBtn = <MoreButton onClick={this.loadNextPage}/>;


      return (
         <div className="comments">
            <header className="navbar">
               <p>{this.state.items.length}/{this.props.length} Comments</p>
            </header>
            <ul className="items">
               {itemComponents}
            </ul>
            <p className="more">{moreBtn}</p>
         </div>
      );
   },

   loadNextPage: function() {
      this.pageIterator.next()
         .then(
            page => {
               this.setState({items: this.state.items.concat(page)});
            },
            (reason) => {
               console.log('cannot load comment page', reason);
               //throw reason
            }
         )
      ;
   }

});

var MoreButton = React.createClass({

   render: function() {
      return (
         <button className="button" onClick={this.handleClick}>More</button>
      );
   },

   handleClick: function(e) {
      e.stopPropagation();
      e.preventDefault();

      this.props.onClick();
   }

});

module.exports = Comments;
