/**
 * Created by arjun on 12/15/2016.
 */
/*code for directive which will be used to add steps dynamically in the flows*/
(function() {

    angular.module('myApp')
        .directive('myDirective', myDirective);

    myDirective.$inject = ['$compile'];

    function myDirective($compile) {

        var directive = {
            templateUrl: "addSteps.templ.html"
        };
        return directive;

    }

})();