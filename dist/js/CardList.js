var CardList = React.createClass({

   render: function() {
      var l = this.props.list;

      return (
         <article className="list">
            <header>
               <h2 className="name">{l.name}</h2>
            </header>
            <ul className="items">
            </ul>
            <footer>
            </footer>
         </article>
      );
   }

});
