require('_css/main.less');

var angular = require('angular');
require('angular-gravatar');

angular.module('ui.gravatar').config(function(gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
        size      : 30,
        "default" : 'mm'
    };
});

var ngModule = angular.module('app', [
    'ui.gravatar'
]);

require('./components')(ngModule);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});