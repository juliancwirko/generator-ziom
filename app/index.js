'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ZiomGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('dist');
    this.mkdir('app/views');
    this.copy('_main.html', 'app/views/main.html');
    this.copy('_about.html', 'app/views/about.html');
    this.mkdir('app/images');
    this.mkdir('app/fonts');
    this.mkdir('app/scripts');
    this.mkdir('app/scripts/controllers');
    this.copy('_app.js', 'app/scripts/app.js');
    this.copy('_main_ctrl.js', 'app/scripts/controllers/main.js');
    this.copy('_about_ctrl.js', 'app/scripts/controllers/about.js');
    this.mkdir('app/css');
    this.mkdir('app/scss');
    this.copy('_style.scss', 'app/scss/style.scss');

    this.copy('_gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_index.html', 'app/index.html');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ZiomGenerator;