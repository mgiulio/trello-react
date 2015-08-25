var
   React = require('react'),
   settings = require('../settings')
   ,mixins = require('../mixins/mixins')
;

var Icon = React.createClass({

   mixins: mixins(),

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
