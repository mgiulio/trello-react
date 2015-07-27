var
   React = require('../lib/react/react'),
   Icon = require('./Icon')
;

var MetaItem = React.createClass({

   render: function() {
         var label;
         if (this.props.children)
            label = <span className="meta-item__label">{this.props.children}</span>;

         return (
            <span className={ this.props.className ? 'meta-item ' + this.props.className : 'meta-item' }>
               <Icon which={this.props.icon} />
               {label}
            </span>
         );
   }

});

module.exports = MetaItem;
