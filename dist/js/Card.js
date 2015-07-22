var Card = React.createClass({

   render: function() {
      var c = this.props.card;

      var cover;
      if (false)
         cover = <img className="cover" src="" alt="" />

      var meta = [];
      if (c.desc !== '')
         meta.push(<span className="desc">D</span>);
      if (c.attachmentCount !== 0)
            meta.push(<span className="attachments">{c.attachmentCount}</span>);
      if (c.commentCount !== 0)
         meta.push(<span className="comments">{c.commentCount}</span>);
      if (c.voteCount !== 0)
            meta.push(<span className="votes">{c.voteCount}</span>);
      meta.push(<span className="latestActivity">{c.dateLastActivity}</span>);

      return (
         <li className="card">
            {cover}
            <h2 className="name">{c.name}</h2>
            <p className="meta">
               {meta}
            </p>
         </li>
      );
   }

});
