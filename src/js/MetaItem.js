var MetaItem = React.createClass({

   render: function() {
         var label;
         if (this.props.label)
            label = <span className="meta-item__label">{this.props.label}</span>;

         return (
            <span className={ this.props.className ? 'meta-item ' + this.props.className : 'meta-item' }>
               <Icon which={this.props.icon} />
               {label}
            </span>
         );
   }

});
