var
   React = require('react'),
   Board = require('./Board'),
   Toolbar = require('./Toolbar')
;

var BoardPage = React.createClass({

      render: function() {
         return (
      		<div className="page board">
      			<Toolbar />
      			<div className="app__body" >
      				<Board board={this.props.board} />
      			</div>
      		</div>
      	);
      }

   })
;

module.exports = BoardPage;
