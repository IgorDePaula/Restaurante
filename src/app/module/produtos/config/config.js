/**
 * Restaurante
 * @module produtos.config
 */
angular.module('produtos.config', [
        'produtos.lista',
        'produtos.novo',
        'ui.router'
    ])
.constant('PROD_MODULES', [
        {title: 'lista', state: 'produtos.lista', sref: 'produtos.lista', icon: ''},
        {title: 'Novo', state: 'produtos.novo', sref: 'produtos.novo', icon: ''}
    ])
    
    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/produtos');

        $stateProvider
            .state('produtos', {
                url: '/produtos',
                templateUrl: 'app/module/produtos/view/produtos.tpl.html',
                controller: 'ProdutosCtrl',
                abstract: true
            })
            .state('produtos.lista', {
                url: '/lista',
                templateUrl: 'app/module/produtos/view/produto-lista.tpl.html',
                controller: 'ProdutosListaCtrl'
            })
            .state('produtos.novo', {
                url: '/novo',
                templateUrl: 'app/module/produtos/view/produto-novo.tpl.html',
                controller: 'ProdutosNovoCtrl'
            })
            .state('produtos.edit', {
                url: '/edit/:id',
                templateUrl: 'app/module/produtos/view/produto-edit.tpl.html',
                controller: 'ProdutosEditCtrl'
            });
    });
