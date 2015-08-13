var
   React = require('react')
   App = require('./components/App')
;

function gotoPage(pageName, pageProps) {
   var props = {pageName: pageName};

   if (pageProps !== undefined)
      props.pageProps = pageProps;

   React.render(<App {...props} />, document.body);
}

module.exports = gotoPage;
