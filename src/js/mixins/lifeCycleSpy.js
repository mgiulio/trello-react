var lifeCycleSpy = [
   'componentWillMount',
   'componentDidMount',
   'componentWillUnmount',
   'componentWillReceiveProps'
   ].reduce(
      (o, m) => { o[m] = function() { console.log(`${m}: `, arguments, this); }; return o; },
      {}
   );
console.log(lifeCycleSpy);

module.exports = lifeCycleSpy;
