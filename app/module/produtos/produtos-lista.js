/**
 * Restaurante
 * @module user.dashboard
 */
angular.module('produtos.lista', [])
        .controller('ProdutosListaCtrl', function($scope, produtos) {
            'use strict';
            $scope.isLoading = true;
            $scope.produtos = produtos.get(function(){
                $scope.isLoading = false;
            });
            
        });
