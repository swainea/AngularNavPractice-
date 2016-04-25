(function() {
  'use strict';

  angular
    .module('shop')
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ["$stateParams"];

  function ItemDetailController ($stateParams){
    this.id = "Item Detail" + $stateParams.id;
    this.item = {
      name: "Audrey II",
      price: "$1,000",
      variety: "Carnivorous",
      similar: "Venus II"
    };


  }

}());
