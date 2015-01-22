BlogApp.controller("CommentsController",
function CommentsController($scope, CommentsService){
$scope.temp ="sffergre";
CommentsService.GetComments(function (commentData){
$scope.Comments = commentData; });

});