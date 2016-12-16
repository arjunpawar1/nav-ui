(function () {

    'use strict';

    angular.module('myApp')
        .service('myService',myService);

        myService.$inject = ['$http','$q','CONFIG'];

    function myService($http,$q,CONFIG) {


        var self =this;
        self.getData = getData;
        self.postData = postData;


        function getData() {
            var bucketName = window.prompt("Please Enter Flow Name:","");
            return $http.get(CONFIG.API_HOST+bucketName+'.json')
                .then(successFn,errorFn);
        }

        function successFn(response) {
            console.log(response.data);
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }


        function postData(data) {
          //  console.log('data received from controller'+data);
           /* var dataObj = {
                
                "id": data.flowName,
                target : data.target,
                title : data.title,
                content:data.content,
                placement: data.placement
            
            };*/
            return $http.put(CONFIG.API_HOST+data.flowName+'.json',data)
                .then(function (data) {
                    return data.statusText;
                },function (data) {
                    return $q.reject('ERROR'+data.statusText);
                    //alert("failure message: " + JSON.stringify({data: data}));
                })
        }

    }

})();