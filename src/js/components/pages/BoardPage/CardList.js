var
   React = require('react'),
   Card = require('./Card')
   ,mixins = require('../../../mixins/mixins')
;

var CardList = React.createClass({

   mixins: mixins(),

   render: function() {
      var l = this.props.list;
      var cards = l.cards.map(c => <Card card={c} key={c.id} />);

      var props = {className: 'cards'};

      return (
         <div className="list">
            <header>
               <h2 className="list__name">{l.name}</h2>
            </header>
            <ul ref="cards" {...props}>
               {cards}
            </ul>
            <footer>
            </footer>
         </div>
      );
   },

   componentDidUpdate: function() {
      if ('maxHeight' in this.props) {
         var cardsEl = React.findDOMNode(this.refs.cards);
         cardsEl.style.height = 'auto';
         var cardsElNaturalHeight = cardsEl.offsetHeight;

         if (cardsElNaturalHeight > this.props.maxHeight)
            cardsEl.style.height = this.props.maxHeight + 'px';
      }
   }

});

module.exports = CardList;
