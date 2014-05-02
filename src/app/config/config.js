/**
 * Restaurante
 * @module Restaurante.config
 */
angular.module('Restaurante.config', [        
        'produtos',
        'template.app',
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Vendas', state: 'vendas', sref: 'vendas', icon: 'glyphicon-shopping-cart'},
        {title: 'Produtos', state: 'produtos', sref: 'produtos.lista', icon: 'glyphicon-list'},
        {title: 'Relatórios', state: 'relatorios', sref: 'relatorios', icon: 'glyphicon-book'}
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/vendas');

        $stateProvider
            .state('vendas', {
                url: '/vendas',
                templateUrl: 'app/module/vendas/view/vendas.tpl.html',
                controller: 'VendasCtrl'
            })
            .state('relatorios', {
                url: '/relatorios',
                templateUrl: 'app/module/relatorios/view/relatorios.tpl.html',
                controller: 'RelatoriosCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/view/about.tpl.html'
            })
            
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });
