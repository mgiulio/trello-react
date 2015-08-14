var
   React = require('react'),
   Icon = require('./Icon')
;

var MetaItem = React.createClass({

   render: function() {
         var label;
         if (this.props.children)
            label = <span className="label">{this.props.children}</span>;

         return (
            <span className={ this.props.className ? `meta-item ${this.props.className}` : 'meta-item' }>
               <Icon which={this.props.icon} />
               {label}
            </span>
         );
   }

});

module.exports = MetaItem;
