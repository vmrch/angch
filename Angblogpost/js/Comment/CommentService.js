BlogApp.factory("CommentsService", function($http) {
return{
GetComments: function (commentData) {
$http({ method: 'GET', url: 'file:///Users/vmraochev/Desktop/anjbst/Jcomment.html'
}), success ( function (data, status , headers , config) {
//alert('s');
//$log.info(data)
commentData(data);

}),
error(function(data, status , headers , config) {
alert('error');
});
};

});