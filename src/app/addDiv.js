/**
 * Created by arjun on 12/15/2016.
 */

/* neat jQuery function to add dynamic steps into the DOM*/

$(document).ready(function () {
    $('#addDiv').click(function () {
        console.log('step added');
        var str = '<hr><br><div class="form-group"> ' +
            '<div class="col-xs-4">' +
            '<label for="target">Target: </label>' +
            '</div>'  +
            '<div class="col-xs-8"> ' +
            '<input type="text" id="target1" placeholder="Target" ng-model="dataCtrl.ptr" class="form-control"/>' +
            '</div>'+
            '</div>'+
            '<br><div class="form-group"> ' +
            '<div class="col-xs-4">' +
            '<label for="title">Title: </label>' +
            '</div>'  +
            '<div class="col-xs-8"> ' +
            '<input type="text" placeholder="Title" ng-model="dataCtrl.obj.title1" class="form-control"/>' +
            '</div>'+
            '</div>'+
            '<br><div class="form-group"> ' +
            '<div class="col-xs-4">' +
            '<label for="content">Content: </label>' +
            '</div>'  +
            '<div class="col-xs-8"> ' +
            '<input type="text" placeholder="Content" ng-model="dataCtrl.obj.content1" class="form-control"/>' +
            '</div>'+
            '</div>'+
            '<br><div class="form-group"> ' +
            '<div class="col-xs-4">' +
            '<label for="placement">Placement: </label>' +
            '</div>'  +
            '<div class="col-xs-8"> ' +
            '<input type="text" placeholder="Placement" ng-model="dataCtrl.obj.placement1" class="form-control"/>' +
            '</div>'+
            '</div>';
         html = $.parseHTML(str);
          $('#add').append(html);

    })
});


