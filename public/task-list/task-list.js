(function(){
  angular.module('app')
    .component('taskList', {
      controller: 'TaskListController',
      templateUrl: 'task-list/task-list.html',
      bindings: {
        toDos: '<',
        search: '<',
        getList: '<'
      }
    })
})()
