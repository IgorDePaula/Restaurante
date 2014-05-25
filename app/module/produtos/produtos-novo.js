/**
 * Restaurante
 * @module user.profile
 */
angular.module('produtos.novo', [])
        .controller('ProdutosNovoCtrl', function($scope, produtos,socket) {
            'use strict';
            $scope.add = function() {
                $scope.result = produtos.save($scope.produto);
                socket.emit('toServer',{produto:$scope.produto});
            };
        })
        .controller('ProdutosEditCtrl', function($scope, produtos, $stateParams) {
            'use strict';
            $scope.produto = produtos.query({produto: $stateParams.id});
            $scope.add = function() {
                $scope.result = produtos.save($scope.produto);
            };
        });






