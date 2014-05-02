/**
 * Restaurante
 * @module Restaurante
 */
angular.module('Restaurante', [
        'Restaurante.config',
        'service.produtos'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    })

    .controller('HomeCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'Restaurante';
    })
    .controller('VendasCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'Restaurante';
    })/*
    .controller('ProdutosCtrl', ['$scope','produtos',function ($scope,produtos) {
        'use strict';

        $scope.heading = 'Restaurante';
        $scope.produtos = produtos.query();
        console.log(produtos.query());
    }])*/
    .controller('RelatoriosCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'Restaurante';
    });
