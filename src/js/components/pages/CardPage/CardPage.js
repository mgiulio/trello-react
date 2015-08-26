var
   React = require('react')
   ,settings = require('../../../settings')
   ,data = require('../../../data/data')
   ,Toolbar = require('../../Toolbar')
   ,mixins = require('../../../mixins/mixins')
;

var CardPage = React.createClass({

   mixins: mixins(),

   render: function() {
      return (
   		<div>
   			<Toolbar />
            <p>Details for card #{this.props.params.id}</p>
   		</div>
   	);
   }

});

module.exports = CardPage;
