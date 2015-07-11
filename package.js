Package.describe({
  name: 'tosbourn:dynamic-inputs',
  summary: 'Creates dynamic inputs for use in forms',
  version: '1.0.0',
  git: 'git://github.com/tosbourn/dynamic-inputs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['jquery', 'tracker', 'templating'], 'client');
  api.addFiles(['tosbourn:dynamic-inputs.html', 'tosbourn:dynamic-inputs.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tosbourn:dynamic-inputs');
  api.addFiles('tosbourn:dynamic-inputs-tests.js');
});
