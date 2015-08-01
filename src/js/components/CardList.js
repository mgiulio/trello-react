var
   React = require('react'),
   Card = require('./Card')
;

var CardList = React.createClass({

   render: function() {
      var l = this.props.list;
      var cards = l.cards.map(c => <Card card={c} key={c.id} />);

      var props = {className: 'cards'};
      if ('maxHeight' in this.props)
         props.style = {maxHeight: this.props.maxHeight + 'px'};

      return (
         <div className="list">
            <header>
               <h2 className="list__name">{l.name}</h2>
            </header>
            <ul {...props}>
               {cards}
            </ul>
            <footer>
            </footer>
         </div>
      );
   }

});

module.exports = CardList;
