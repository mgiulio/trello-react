var
   React = require('react'),
   settings = require('../settings')
;

var Icon = React.createClass({

   render: function() {
      return (
         <svg
            className={'icon ' + this.props.which}
            dangerouslySetInnerHTML={{ __html: `<use xlink:href="${settings.basepath}/img/sprite.svg#${this.props.which}" />` }}
         />
      );
   }

});

module.exports = Icon;
