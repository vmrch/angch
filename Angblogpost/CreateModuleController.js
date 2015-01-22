BlogApp.controller("CreateModuleController",
function CreateModuleController($scope){
$scope.Save = function (Module, ModuleForm)
{
if(ModuleForm.$valid){
alert(Module.Name); 
}
else {
alert("Please enter valid data");
}
}
$scope.Cancel = function (Module)
{
location.href = "home1.html";
}
});