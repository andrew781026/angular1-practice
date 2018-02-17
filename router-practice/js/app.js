
var app = angular.module('app', ['ngComponentRouter','uploadApp','chooseSheet','getApp','duplicateApp','missionList']);

// 讓 html5mode 啟用 , 路由不需要 hash 的模式
/*
app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});
*/

// 設定 <app> 為根組件
app.value('$routerRootComponent', 'app');

app.component('app', {
    template: '<div>' +
                  '  <a ng-link="[\'UpLoadLink\']">上傳檔案</a>\n' +
                  '  <a ng-link="[\'ChooseSheetLink\']">選擇分頁</a>\n' +
                  '  <a ng-link="[\'GetLink\']">查詢產品歷史定價</a>\n' +
                  '  <a ng-link="[\'Duplicate\']">顯示重複資料</a>\n' +
                  '  <a ng-link="[\'MissionList\']">MissionList</a>\n' +
              '</div>\n'+
              '<div class="pl-5"><ng-outlet></ng-outlet></div>\n', /* 子 component 會灌到 ng-outlet 中 */
    $routeConfig:[
        {path: '/upload', name: 'UpLoadLink', component: 'uploadComp' },
        {path: '/chooseSheet', name: 'ChooseSheetLink', component: 'chooseSheetComp' },
        {path: '/get', name: 'GetLink', component: 'getProductComp' },
        {path: '/duplicate', name: 'Duplicate', component: 'duplicateComp' },
        {path: '/missionList', name: 'MissionList', component: 'missionListComp' }
    ]
});