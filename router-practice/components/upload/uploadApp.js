
var uploadApp = angular.module('uploadApp',['chooseSheet']);

uploadApp.component('uploadComp', {
    // templateUrl 要算出 index.html 到 upload.html 的相對路徑
    templateUrl: './components/upload/upload.html',
    controller: uploadAppComponent
});

function uploadAppComponent() {
    // var selectedId = null;
    var $ctrl = this;

    $ctrl.inputDate = {
        value: new Date(2013, 9, 22)
    };

    $ctrl.dateChange = function () {
        console.log('$ctrl.inputDate.value = ',$ctrl.inputDate.value);
    };

};

$( document ).ready(function() {

    // Handler for .ready() called.
    $('#fileToUpload').on('change',function () {
        console.log('change!!');

        var ext = this.value.match(/\.([^\.]+)$/)[1];
        switch(ext){
            case 'xls':
            case 'xlsx':
                break;
            default:
                alert('請選擇EXCEL檔案');
                this.value='';
        }

    });

    // Handler for .ready() called.
    $('#uploadFile').on('click',function () {
        console.log('click!!');

        var formData = new FormData();
        jQuery.each(jQuery('#fileToUpload')[0].files, function(i, file) {
            formData.append('files', file);
            // console.log('file-'+i);
        });

        jQuery.ajax({
            url: '/uploadMulti.do',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data){
                // window.location.href = '/uploadStatus.do';

                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'myfile.pdf';
                a.click();
                window.URL.revokeObjectURL(url);
            }
        });

    });

});

