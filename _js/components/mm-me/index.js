module.exports = function(ngModule) {

    ngModule.directive('mmMe', mmMe);

    function mmMe() {
        return {
            restrict: 'A',
            replace: true,
            template: require('./mm-me.html')
        }
    }

}