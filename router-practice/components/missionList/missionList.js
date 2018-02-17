// 參考資料 : http://l-lin.github.io/angular-datatables/archives/#!/angularDirectiveInDOM
var duplicateApp = angular.module('missionList',['datatables', 'ngResource']);

duplicateApp.component('missionListComp', {
    templateUrl: './components/missionList/missionList.html',
    controller: missionListComponent
});

function missionListComponent($resource) {

    var self = this ;

    /*
    self.products=[
        {name:"FRH-38H-10",id:"A0010080030",rowIndex:"33",price:{type:"工廠價",price:750,date:"20170801"},type:"對照光纖",comment:""},
        {name:"FT-0813-67",id:"A0020020412",rowIndex:"86",price:{type:"工廠價",price:15000,date:"20170509"},type:"對照光纖",comment:"塑膠光纖+蛇管"},
        {name:"RMF-20NK",id:"A0030040090",rowIndex:"102",price:{type:"工廠價",price:610,date:"20171022"},type:"光電",comment:"201211月 10pcs 156.1 min(需聚焦, 製作較慢)"}
    ];

    */

    $resource('data.json').query().$promise.then(function(products) {
        self.products = products;
    });

}