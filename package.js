Package.describe({
  name: 'overture8:dynamic-inputs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['jquery', 'tracker', 'templating'], 'client');
  api.addFiles(['overture8:dynamic-inputs.html', 'overture8:dynamic-inputs.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('overture8:dynamic-inputs');
  api.addFiles('overture8:dynamic-inputs-tests.js');
});
