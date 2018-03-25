(function(){
  angular.module('app')
    .controller('TaskFormController', function (APIFactory, DataFactory) {
      var vm = this;
      // vm.toDos = DataFactory.getData() || [];
vm.getList = function(){
  APIFactory.getDataFromApi().then(function(result){
    vm.toDos = result.data;
  });
}

vm.getList();

vm.addToDo = function () {
  if (!vm.newTask) {
      return;
  }
  APIFactory.post({task: vm.newTask}).then(function(result) {
    vm.toDos.push(result.data);
    DataFactory.setData(vm.toDos);
    vm.newTask = '';
  }).catch(function(err){
    console.log(err);
  })
};  
 });

})();
