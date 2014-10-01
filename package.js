Package.describe({
  summary: 'port of node-msgpack',
  version: "0.1.0",
  git: "https://github.com/fermuch/meteor-msgpack"
});

Npm.depends({
  "msgpack": "0.2.4"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('msgpack.js', 'server');
  api.export('msgpack', "server");
});
