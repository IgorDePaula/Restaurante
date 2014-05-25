/**
 * Restaurante
 * @module service.vendas
 */
angular.module('service.vendas', ['ngResource'])
        .factory('vendas', function($resource) {
            'use strict';
            return $resource('http://localhost:4000/venda', {}, {
                getAtivo: {url:'http://localhost:4000/venda/produtos',method: 'GET', isArray: true},
                query: {method: 'GET', params: {produto: 'produto'}},
                save: {method: 'POST'}
            });
        });