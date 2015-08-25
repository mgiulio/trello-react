var
   React = require('react'),
   Icon = require('./Icon')
   ,mixins = require('../mixins/mixins')
;

var MetaItem = React.createClass({

   mixins: mixins(),

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
