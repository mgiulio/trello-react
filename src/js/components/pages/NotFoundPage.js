var
   React = require('react'),

   Icon = require('../Icon'),

   Router = require('react-router'),
   Link = Router.Link
   ,mixins = require('../../mixins/mixins')
;

var NotFoundPage = React.createClass({

   mixins: mixins(),

   render: function() {
      return (
         <div className="notfound-page">
            <header>
               <h1 className="title">Page Not Found</h1>
            </header>

            <p className="home">
               <Link to="home"><Icon which="home"/></Link>
            </p>
         </div>
      );
   }

});

module.exports = NotFoundPage;
