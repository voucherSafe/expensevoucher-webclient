// Karma configuration
// Generated on Sat Feb 13 2016 14:09:31 GMT+0530 (IST)

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath : '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks : [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files : [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-print/angularPrint.js',
      'bower_components/ng-table-to-csv/dist/ng-table-to-csv.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'test/spec/**/*.js',
      'app/scripts/**/*.js',
      // view templates
      'app/views/**/*.html'
    ],

    // list of files / patterns to exclude
    exclude : [],

    // pre-process matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors : {
      // pre-process HTML files into AngularJS templates.
      'app/views/**/*.html' : ['ng-html2js'],
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js' : ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // coverage reporter generates the coverage
    reporters : ['spec', 'coverage'],

    // web server port
    port : 9876,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers : [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : false,

    // enable / disable colors in the output (reporters and logs)
    colors : true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel : config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    specReporter : {maxLogLines : 10},

    // configure the html2js preprocessor
    ngHtml2JsPreprocessor : {
      //// strip this from the file path
      //stripPrefix   : 'public/',
      //stripSuffix   : '.ext',
      //// prepend this to the
      //prependPrefix : 'served/',

      // or define a custom transform function
      //cacheIdFromPath : function (filepath) {
      //  return cacheId;
      //},

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      // moduleName : 'calendarViews'
    },

    // configure the reporter
    coverageReporter : {
      dir       : 'coverage/',
      reporters : [
        // reporters not supporting the `file` property
        {type : 'html', subdir : 'report-html'},
        {type : 'text'},
        {type : 'text-summary'}
      ]
    }
  });
};

