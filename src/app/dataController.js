

(function () {

    'use strict';

    angular.module('myApp')
        .controller('dataController',dataController);

    dataController.$inject = ['myService','$scope'];

    function dataController(myService,$scope) {

        var dataCtrl = this;
        dataCtrl.getData = getData;
        dataCtrl.upload = upload;
        //dataCtrl.check =check;

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