module.exports = function (acetate) {
  acetate.layout('docs/**/*', 'layouts/_default');

  acetate.data('pkg', '../package.json');
  acetate.data('table_of_contents', 'data/table_of_contents.yml');

  // acetate.layout('examples/**/*', 'layouts/_examples');


  // acetate.data('stats', '../../dist/css/stats.json');
  // acetate.data('icons', 'icon-social.js');
  // acetate.data('font', 'icon-font.js');
  // acetate.data('repo', './repo.js');
};
