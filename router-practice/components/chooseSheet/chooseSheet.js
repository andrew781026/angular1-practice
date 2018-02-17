
var chooseSheet = angular.module('chooseSheet',['duplicateApp']);

chooseSheet.service('sheetService', [ '$http', function ($http) {

} ]);

chooseSheet.component('chooseSheetComp', {
    // templateUrl 要算出 index.html 到 upload.html 的相對路徑
    templateUrl: './components/chooseSheet/chooseSheet.html',
    controller: chooseSheetComponent
});

function chooseSheetComponent(sheetService) {

    var $ctrl = this;

    $ctrl.sheets=[
        {name:"對照光纖",selected:false},
        {name:"反射光纖",selected:false},
        {name:"玻璃光纖",selected:false}
    ];

    $ctrl.myLog = function () {
        console.log(self.sheets);
    };

    $ctrl.submit = function () {
        // sheetService
    };


};


