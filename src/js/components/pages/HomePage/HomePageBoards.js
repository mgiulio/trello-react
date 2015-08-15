var
   React = require('react'),

   data = require('../../../data/data'),

   ActivityIndicator = require('../../ActivityIndicator'),
   Failure = require('../../Failure')

   gotoPage = require('../../../gotopage')
;

var HomePageBoards = React.createClass({

   getInitialState: function() {
      this.loadBoards();

      return {
         state: 'loading'
      };
   },

   loadBoards: function() {
      data.getHomeBoards()
         .then(boards => {
            this.setState({state: 'boards', boards: boards});
         })
         .catch(reason => {
            this.setState({state: 'failure'});
         })
      ;
   },

   retry: function() {
      this.loadBoards();
      this.setState({state: 'loading'});
   },

   componentDidUpdate: function() {
      React.findDOMNode(this).querySelector('.group .items .item a').focus();
   },

   render: function() {
      var content;

      switch (this.state.state) {
         case 'loading':
            content = <ActivityIndicator />;
            break;
         case 'boards':
            content = this.state.boards.length > 0 ?
               this.state.boards.map((group, i) => <BoardGroup key={i} name={group.name} boards={group.boards} />)
            :
               <p className="no-boards-msg">No boards</p>
            ;
            break;
         case 'failure':
            content = <Failure msg="Loading failed" actionButton={{label: 'Retry', onClick: this.retry}} />;
            break;
         default:
            // throw exception?
      }

      return (
         <div className="boards">
            {content}
         </div>
      );
   }

});

var BoardGroup = React.createClass({

   render: function() {
      var items = this.props.boards.map((board, i) => <Board key={i} name={board.name} id={board.id} />);

      return (
         <section className="group">
            <h2 className="title">{this.props.name}</h2>
            <ul className="items">
               {items}
            </ul>
         </section>
      );
   }

});

var Board = React.createClass({

   render: function() {
      return (
         <li className="item" onClick={this.onBoardSelection}>
            <a href={`/boards/${this.props.id}`}>
               <h2 className="title">{this.props.name}</h2>
            </a>
         </li>
      );
   },

   onBoardSelection: function(e) {
      e.preventDefault();
      e.stopPropagation();

      gotoPage('board', {boardId: this.props.id});
   }

});

module.exports = HomePageBoards;
