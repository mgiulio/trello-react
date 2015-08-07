var
   React = require('react'),
   PageNotFound = React.createClass({

      render: function() {
         return (
            <div className="page-not-found">
               <h1 className="page-not-found__title">Page Not Found</h1>
            </div>
         );
      }

   })
;

module.exports = PageNotFound;
