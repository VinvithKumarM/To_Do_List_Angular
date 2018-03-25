(function(){
  angular.module('app')
    .controller('TaskListController', function (APIFactory, $timeout) {
      var vm = this;
      vm.toggelComplete = function(item){
        APIFactory.patch(item.id, { task: { completed: item.completed }}).then(function(result){
          Object.assign(item, result.data);
        }).catch(function(){
          console.log(err);
        })
      }
      vm.remove = function (id) {
        APIFactory.deleteTodo(id).then(function(){
          vm.getList();
        }).catch(function(err){
          console.log(err);
        });
      };
    })
})()
