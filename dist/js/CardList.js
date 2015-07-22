var CardList = React.createClass({

   render: function() {
      var l = this.props.list;
      var cardComponents = l.cards.map(function(c) { return <Card card={c} />;});

      return (
         <article className="list">
            <header>
               <h2 className="list__name">{l.name}</h2>
            </header>
            <ul className="cards">
               {cardComponents}
            </ul>
            <footer>
            </footer>
         </article>
      );
   }

});
