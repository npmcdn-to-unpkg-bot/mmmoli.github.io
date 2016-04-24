require('_css/_base.scss');

var angular = require('angular');
require('angular-gravatar');

angular.module('ui.gravatar').config(function(gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
        size      : 30,
        "default" : 'identicon'
    };
});

var ngModule = angular.module('app', [
    'ui.gravatar'
]);

require('./components')(ngModule);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});