var CardList = React.createClass({

   render: function() {
      var d = this.props.data;

      return (
         <article className="list">
            <header>
               <h2 className="name">{d.name}</h2>
            </header>
            <ul className="items">
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
               <li>foo</li>
            </ul>
            <footer>
            </footer>
         </article>
      );
   }

});
