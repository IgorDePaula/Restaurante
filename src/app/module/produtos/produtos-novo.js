/**
 * Restaurante
 * @module user.profile
 */
angular.module('produtos.novo', [])
        .controller('ProdutosNovoCtrl', function($scope, produtos) {//controller
            'use strict';
            $scope.add = function() {
                $scope.result = produtos.save($scope.produto);//servico onde busca o rest
            };
        })
        .controller('ProdutosEditCtrl', function($scope, produtos, $stateParams) {//controller
            'use strict';
            $scope.produto = produtos.query({produto: $stateParams.id});//servico onde faz a busca do rest
            console.log(produtos.query({produto: $stateParams.id}));
            $scope.add = function() {
                $scope.result = produtos.save($scope.produto);
            };
        }).filter('toActive', function() {
             'use strict';
            return function(input) {
                return input === 1 ? '<span class="label label-success">Sim</span>' : '<span class="label label-danger">Não</span>';
            };
        });






