require('_css/main.less');

var angular = require('angular');
var ngModule = angular.module('app', []);

require('./components')(ngModule);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});