var
   React = require('react'),
   MetaItem = require('../../MetaItem')
;

var Card = React.createClass({

   render: function() {
      var c = this.props.card;

      var cover;
      if ('coverUrl' in c)
         cover = <img className="cover" src={c.coverUrl} alt="" />;

      var meta = [];
      if ('description' in c)
         meta.push(<MetaItem className="description" icon="standard" key="desc" />);
      if (c.attachmentCount !== 0)
         meta.push(<MetaItem className="attachment" icon="link" key="attachment">{c.attachmentCount}</MetaItem>);
      if (c.commentCount !== 0)
         meta.push(<MetaItem className="comment" icon="comment" key="comment">{c.commentCount}</MetaItem>);
      if (c.voteCount !== 0)
         meta.push(<MetaItem className="votes" icon="digg" key="votes">{c.voteCount}</MetaItem>);
      meta.push(<MetaItem className="latest-activity" icon="clock" key="latest-activity">{c.dateLastActivity}</MetaItem>);

      return (
         <li className="card" onClick={this.showCardDetails}>
            {cover}
            <h2 className="card__name">{c.name}</h2>
            <p className="card__meta">
               {meta}
            </p>
         </li>
      );
   },

   showCardDetails: function() {
      window.open(this.props.card.url  );
   }

});

module.exports = Card;
