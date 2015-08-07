var
   React = require('react'),
   ErrorPanel = React.createClass({

      render: function() {
         return (
            <div className="error-panel">
               <h1 className="error-panel__title">{this.props.title}</h1>
               <p className="error-panel__description">{this.props.description}</p>
               <button className="error-panel__dismiss" onClick={this.props.ondismiss}>Dismiss</button>
            </div>
         );
      }

   })
;

module.exports = ErrorPanel;
