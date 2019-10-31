const { resolve: resolvePath, join: joinPath } = require('path');

const folders = {
  build: resolvePath('.', 'build'),
  build_assets: resolvePath('.', 'build', 'assets'),
  build_components: resolvePath('.', 'build', 'components'),
  build_views: resolvePath('.', 'build', 'views'),
  src: resolvePath('.', 'src'),
  src_assets: resolvePath('.', 'assets'),
  src_components: resolvePath('.', 'src', 'components'),
  src_views: resolvePath('.', 'src', 'views'),
};

const files = {
  main: joinPath(folders.src, 'index.js'),
  src_index: resolvePath('.', 'index.html'),
  build_index: joinPath(folders.build, 'index.html'),
  manifest: resolvePath('.', 'manifest.json'),
  sw: resolvePath('.', 'sw.js')
}

module.exports = {
  folders,
  files
};


