// ====================================
// mustache
// ====================================

angular.module('template', [])
.run(function () {
  if( !window.Mustache ) { throw new Error("Mustache missing."); }
})
.factory('template', function () {
  return {
    render: Mustache.render,
    of: {
      javascript: [
        'window._alert = window.alert;',
        'window.alert = function () { window.console.log.apply(console, [].slice.call(arguments, 0)); };',
        '(function () {',
        '  {{{source}}}',
        '}());'
      ].join('\n')
    }
  };
});