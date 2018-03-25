(function(){
  angular.module('app')
    .factory('DataFactory', function(){
      var data;
      return {
        setData,
        getData
      };

      function setData (newData) {
        data = newData;
      }

      function getData () {
        return data;
      }

    });
})();