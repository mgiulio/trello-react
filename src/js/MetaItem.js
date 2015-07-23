var MetaItem = React.createClass({

   render: function() {
         var label = this.props.label ? <span className="meta-item__label">{this.props.label}</span> : null;

         return (
            <span className={ this.props.className ? 'meta-item ' + this.props.className : 'meta-item' }>
               <svg
                  className={'meta-item__icon ' + this.props.icon}
                  dangerouslySetInnerHTML={{ __html: '<use xlink:href="img/sprite.svg#' + this.props.icon + '" />' }}
               />
               {label}
            </span>
         );
   }

});
