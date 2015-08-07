var
   React = require('react')
;

var Icon = React.createClass({

   render: function() {
      return (
         <svg
            className={'meta-item__icon ' + this.props.which}
            dangerouslySetInnerHTML={{ __html: '<use xlink:href="/img/sprite.svg#' + this.props.which + '" />' }}
         />
      );
   }

});

module.exports = Icon;
