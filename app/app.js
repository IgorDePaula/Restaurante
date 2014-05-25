
/**
 * Restaurante
 * @module Restaurante
 */
angular.module('Restaurante', [
    'Restaurante.config',
    'service.produtos',
    'service.vendas',
    'service.socket'
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
      .controller('VendasCtrl', function($scope, vendas,socket) {
            'use strict';
            $scope.isLoading = true;
            $scope.produtos = vendas.getAtivo(function() {
                $scope.isLoading = false;
            });
            socket.on('toclient',function(data){
                $scope.produto = data.produto;
            });
           
            
            $scope.calcula = function()
            {

                $scope.pedido = [];
                var valor = 0.0;
                var prods = $scope.produtos;
                angular.forEach(prods, function(prod) {
                    if (prod.add)
                    {
                        valor += prod.valorbase;
                        $scope.pedido.push(prod);
                    }
                });
                return valor;
            };
        })
        .controller('RelatoriosCtrl', function($scope) {
            'use strict';

            $scope.heading = 'Restaurante';
        });
