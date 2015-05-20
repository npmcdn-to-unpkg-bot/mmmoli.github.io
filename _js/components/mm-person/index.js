module.exports = function(ngModule) {

    require('./mm-person.less');

    ngModule.directive('mmPerson', mmPerson);

    function mmPerson() {
        return {
            restrict: 'EA',
            scope: {
                gravatar: '@?',
                profile: '@?',
                name: '@',
                link: '@'
            },
            template: require('./mm-person.html'),
            link: function(scope, elem, attrs) {

                if (!attrs.name) {
                    throw new Error('Please specify a name');
                };

                if (!attrs.link) {
                    throw new Error('Please specify a link');
                };

                if (!attrs.gravatar && !attrs.profile) {
                    throw new Error('Please specify a gravatar or a profile');
                };

            }
        }
    }

}