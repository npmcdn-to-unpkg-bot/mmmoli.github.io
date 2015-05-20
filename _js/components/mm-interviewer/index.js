module.exports = function(ngModule) {

    ngModule.directive('mmInterviewer', mmInterviewer);

    function mmInterviewer() {
        return {
            restrict: 'A',
            replace: true,
            template: require('./mm-interviewer.html')
        }
    }

}