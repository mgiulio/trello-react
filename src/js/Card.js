var Card = React.createClass({

   render: function() {
         return (
            <li className="item">
               <h2 className="title">{this.props.card.name}</h2>
               <div className="meta">
                  some meta here...
               </div>
            </li>
         );
   }

});
