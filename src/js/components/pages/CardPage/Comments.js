var
   React = require('react')
   ,mixins = require('../../../mixins/mixins')
   ,data = require('../../../data/data')
   ,Comment = require('./Comment')
   ,MoreButton = require('./MoreButton')
   ,CommentsBar = require('./CommentsBar')
;

var Comments = React.createClass({

   mixins: mixins(),

   render: function() {
      var
         itemComponents,
         moreBtn,
         btnProps = {
            onClick: this.loadNextPage
         }
      ;

      if (this.state.loading) {
         btnProps.spin = true;
         moreBtn = <MoreButton {...btnProps} />;

         itemComponents = this.itemComponents;
      }
      else {
         itemComponents = this.itemComponents = this.state.items.map((i, id) =>
            <Comment
               key={id}
               author={i.author}
               timestamp={i.timestamp}
               defaultAvatarUrl="/img/avatar-placeholder.jpg"
            >
               {i.text}
            </Comment>)
         ;

         if (this.state.items.length < this.props.length)
            moreBtn = <MoreButton {...btnProps} />;
      }

      var moreSection;
      if (moreBtn)
         moreSection = <p className="more">{moreBtn}</p>;

      return (
         <div className="comments">
            <CommentsBar totalComments={this.props.length} shownComments={this.state.items.length} />
            <ul className="items">
               {itemComponents}
            </ul>
            <footer className="comments__footer">
               {moreSection}
            </footer>
         </div>
      );
   },

   getInitialState: function() {
      this.pageIterator = data.cardCommentPageIterator(this.props.cardId, this.props.pageSize, 2);

      return {
         items: this.props.firstPage,
         loading: false
      };
   },


   loadNextPage: function() {
      this.setState({loading: true});

      this.pageIterator.next()
         .then(
            page => {
               this.setState({
                  items: this.state.items.concat(page),
                  loading: false
               });
            },
            (reason) => {
               console.log('cannot load comment page', reason);
               //throw reason
            }
         )
      ;
   }

});

module.exports = Comments;
