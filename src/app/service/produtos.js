/**
 * Restaurante
 * @module service.produtos
 */
angular.module('service.produtos', ['ngResource'])
        .factory('produtos', ['$resource', function($resource) {
                'use strict';
                return $resource('http://localhost:4000/produtos', {}, {
                    get:{method:'GET',isArray:true},
                    query:{method:'GET',params:{produto:'produto'}},
                    save:{method:'POST'}
                });
            }]);
