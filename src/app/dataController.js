

(function () {

    'use strict';

    angular.module('myApp')
        .controller('dataController',dataController);

    dataController.$inject = ['myService','$scope','$compile'];

    function dataController(myService,$scope,$compile) {

        var dataCtrl = this;
        dataCtrl.getData = getData;
        dataCtrl.upload = upload;
        dataCtrl.test =test;
        dataCtrl.addDiv = addDiv;
        //function to check weather the data is coming from the front end or not.

       function test()
        {  
            console.log(dataCtrl.obj);
        }



        //function to append elements into DOM
         function addDiv() {
              var element = angular.element(document.createElement('my-Directive'));
              var el = $compile( element )( $scope );

            //where to place the element
            angular.element(document.querySelector('[id="add"]')).append(element);
             $scope.insertHere = el;
        };

        function upload() {
                 myService.postData(dataCtrl.obj)
                .then(function (data) {
                    console.log(data)
                },function (data) {
                    console.log('ERROR:'+data);
                    alert("failure message: " + JSON.stringify({data: data}));
                })

          }

        function getData() {
            myService.getData()
                .then(function (data) {
                    console.log('got Data from service'+data);
                },function (error) {
                    console.log(error);
                    window.alert('Flow Not Found')
                })
        }

    }
})();