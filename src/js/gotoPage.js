var
   React = require('react')
   App = require('./components/App')
;

function gotoPage(pageName, pageProps) {
   var props = {pageName: pageName};

   if (typeof pageProps !== 'undefined' /* && isObject(pageProps) */)
      props.pageProps = pageProps;

   React.render(<App {...props} />, document.body);
}

module.exports = gotoPage;
