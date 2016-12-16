(function() {

    'use strict';

    var number  = 0;
    angular.module('myApp')
        .controller('dataController', dataController);

    dataController.$inject = ['myService', '$scope', '$compile'];

    function dataController(myService, $scope, $compile) {

        var dataCtrl = this;
        dataCtrl.getData = getData;
        dataCtrl.upload = upload;
        dataCtrl.test = test;
        dataCtrl.addDiv = addDiv;
        dataCtrl.trash = trash;
        //function to check weather the data is coming from the front end or not.

       // dataCtrl.number = 'step1';
        function test() {
            var fin = angular.merge(dataCtrl.obj,dataCtrl.step1);
            console.log(fin);
            upload(fin);
        }


        //function to append elements into DOM
        function addDiv() {
            var element = angular.element(document.createElement('my-Directive'));
            var el = $compile(element)($scope);

            //where to place the element
            angular.element($('#add')).append(element);
            $scope.insertHere = el;
            var objName = 'step'+number;
            var id = 'id'+number;
            dataCtrl.id =id;
            console.log(objName);
            number++;
        };

        function upload() {
           var finalJson = angular.merge(dataCtrl.obj,dataCtrl.step1);
            console.log(finalJson);
            myService.postData(finalJson)
                .then(function(data) {
                    console.log(data)
                }, function(data) {
                    console.log('ERROR:' + data);
                    alert("failure message: " + JSON.stringify({
                            data: data
                        }));
                })
        }

        function getData() {
            myService.getData()
                .then(function(data) {
                    console.log('got Data from service' + data);
                }, function(error) {
                    console.log(error);
                    window.alert('Flow Not Found')
                })
        }


        //click on trash icon : to remove step
                function trash() {
                console.log('step deleted');
                    console.log('element '+$(('#id'+number--)))
                var elementToRemove = angular.element($(('#id'+number--)));
                elementToRemove.remove();
        };

  }
})();