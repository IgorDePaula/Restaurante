/**
 * Restaurante
 * @module Restaurante
 */
angular.module('Restaurante', [
    'Restaurante.config',
    'service.produtos',
    'service.vendas'
])
        .run(function($rootScope, $state, $stateParams) {
            'use strict';

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        })

        .controller('NavigationCtrl', function($scope, NAV_ITEMS) {
            'use strict';

            $scope.navItems = NAV_ITEMS;
        })

        .controller('HomeCtrl', function($scope) {
            'use strict';

            $scope.heading = 'Restaurante';
        })
        .controller('VendasCtrl', function($scope, vendas) {
            'use strict';
            $scope.isLoading = true;
            $scope.produtos = vendas.getAtivo(function() {
                $scope.isLoading = false;
            });
            
            $scope.calcula = function()
            {
                var valor = 0.0;
                angular.forEach($scope.produtos, function(produto) {
                    if (produto.venda)
                    {
                        valor += produto.valorbase;
                    }
                });
                return valor;
            }
        })
        .controller('RelatoriosCtrl', function($scope) {
            'use strict';

            $scope.heading = 'Restaurante';
        });
