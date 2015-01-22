var app = angular.module("myApp",[]);
app.controller("PersonCtrl",function($scope){
$scope.persons= [
{first:"Henry", middle:"jacob",last:"Mendocino",gender:"M"},
{first:"Ann", middle:"Cecilia",last:"negro",gender:"F"},
{first:"Berta", middle:"Ann",last:"Sallyfield",gender:"F"},
{first:"Rudolf", middle:"John",last:"Waters",gender:"M"},
{first:"Ken", middle:"Adam",last:"Aundry",gender:"M"}

];
})