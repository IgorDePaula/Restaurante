/**
 * Restaurante
 * @module user.dashboard
 */
angular.module('produtos.lista', [])
        .controller('ProdutosListaCtrl', function($scope, produtos) {
            'use strict';
            $scope.produtos = produtos.get();
        });
