
var getApp = angular.module('getApp', [] );

getApp.component('getProductComp', {
    templateUrl: './components/getProduct/get.html',
    controller: getProductComponent
});

function getProductComponent() {

    var $ctrl = this;

    $ctrl.product = {
        price : 55 ,
        id : 'A0010050003',
        name : 'PSC2016-NP'
    };

    $ctrl.products = [
        $ctrl.product ,
        {
            price : 22 ,
            id : 'A0010050007',
            name : 'OAP2016-S'
        },
        {
            price : 500 ,
            id : 'A00100702145',
            name : 'SN20-P'
        },
        {
            price : 67 ,
            id : 'A0050050203',
            name : 'TSC0602-N'
        }
    ];


    $ctrl.editState = false ;

    $ctrl.editPrice = function () {
        $ctrl.editState = true ;
    };

    $ctrl.confirmPrice = function () {
        $ctrl.editState = false ;
    };

};