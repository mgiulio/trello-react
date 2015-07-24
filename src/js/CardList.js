var CardList = React.createClass({

   render: function() {
      var l = this.props.list;
      var cards = l.cards.map(function(c) { return <Card card={c} />;});

      var props = {className: 'cards'};
      if ('maxHeight' in this.props)
         props.style = {maxHeight: this.props.maxHeight + 'px'};

      return (
         <article className="list">
            <header>
               <h2 className="list__name">{l.name}</h2>
            </header>
            <ul {...props}>
               {cards}
            </ul>
            <footer>
            </footer>
         </article>
      );
   }

});
