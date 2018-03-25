(function(){
  angular.module('app')
    .factory('APIFactory', function($http){
      var data;
      return {
        getDataFromApi,
        deleteTodo,
        patch,
        post
      };
      function getDataFromApi () {
        return $http.get('/api/todos');
      }
      function deleteTodo(id){
        return $http.delete('/api/todos/' + id);
      }
      function patch(id, data){
        return $http.patch('/api/todos/'+ id, data);
      }
      function post (data) {
        return $http.post('/api/todos', data);
      }

    });
})();
