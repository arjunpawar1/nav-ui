(function() {

    'use strict';
    
    var number  = 1;
    var finalJson;
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
        function test(a) {
          //  var fin = angular.merge(dataCtrl.obj,dataCtrl.step1);
            console.log('test'+a);
          //  upload(fin);
        }

        //function to append elements into DOM
        function addDiv() {
            var element = angular.element(document.createElement('my-Directive'));
            var el = $compile(element)($scope);

            //where to place the element
            angular.element($('#add')).append(element);
            $scope.insertHere = el;

            //giving unique id to div element.
            var objName = 'step'+number;
            dataCtrl.tbt = {
                "val": objName,
                "tes":"arjun"
            }
            $(element).attr("id",objName);
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

        //request for data from myService Service.
        function getData(flowName) {
            myService.getData(flowName)
                .then(function(data) {
                    console.log('got Data from service' + data);
                }, function(error) {
                    console.log(error);
                    window.alert('Flow Not Found')
                })
        }


        //gets the id based on the user click
        $('#tabs').on("click", "li", function (event) {
            var activeTab = $(this).find('a').attr('id');
            //alert(activeTab);
           // console.log('flow called  '+activeTab);
            setTimeout(getData(activeTab),2000);
        });

        //click on trash icon : to remove step
                function trash() {
                console.log('step deleted');
                console.log('element '+$(('#id'+number--)))
                var elementToRemove = angular.element($(('#step'+number--)));
                elementToRemove.remove();
                number++;
        };

  }
})();