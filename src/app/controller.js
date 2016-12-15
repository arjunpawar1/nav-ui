(function () {
    'use strict';


    angular.module('myApp')
        .controller('myController',myController);

        myController.$inject = [];

        function myController() {

            var ctrl = this;

            ctrl.check= check;
    
            function check()
            {
                if(ctrl.username =='test' && ctrl.password == 'test')
                {
                    window.alert('welcome');
                    window.location ='getData.html';
                }
                else
                {
                    window.alert("Invalid Credentials, Please try again");
                }
            }

        }
})();