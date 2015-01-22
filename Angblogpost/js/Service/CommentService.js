BlogApp.factory("CommentService", function() {
return{
GetComments: function (sucdata) {
$http({ method: 'GET', url: 'file:///Users/vmraochev/Desktop/anjbst/Jcomment.html'
}), success ( function (data, status , headers , config){
sucdata(data);
}),
error(function(data, status , headers , config){
});
};

});