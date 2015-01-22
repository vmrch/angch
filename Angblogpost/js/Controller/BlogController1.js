BlogApp.controller("BlogController",
function BlogController($scope){
$scope.DemoHTML = '<b style="color:red;"> This is a sample data</b>';
//$scope.OrderByValue = "PostedOn";
$scope.Module = ModulesData.Modules;

$scope.VoteUp = function (Post) {
    Post.VoteCount++;
    };
      $scope.VoteDown = function (Post) {
    Post.VoteCount--;
    }
});