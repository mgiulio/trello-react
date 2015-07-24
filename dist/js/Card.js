var Card = React.createClass({

   render: function() {
      var c = this.props.card;

      var cover;
      if ('coverUrl' in c)
         cover = <img className="cover" src={c.coverUrl} alt="" />

      var meta = [];
      if ('description' in c)
         meta.push(<MetaItem className="description" icon="standard" key="desc" />);
      if (c.attachmentCount !== 0)
         meta.push(<MetaItem className="attachment" icon="link" label={c.attachmentCount} key="attachment" />);
      if (c.commentCount !== 0)
         meta.push(<MetaItem className="comment" icon="comment" label={c.commentCount} key="comment" />);
      if (c.voteCount !== 0)
            meta.push(<MetaItem className="votes" icon="digg" label={c.voteCount} key="votes" />);
      meta.push(<MetaItem className="latest-activity" icon="clock" label={c.dateLastActivity} key="latest-activity" />);

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
