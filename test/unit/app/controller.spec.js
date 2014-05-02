/**
 * Restaurante
 * Unit Testing: Application/Controller
 */

describe('Unit Testing: Application/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('Restaurante'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('HomeCtrl', function () {
        it('should set the correct heading text "Restaurante"', function () {
            var expected = {
                heading: 'Restaurante'
            };

            var params = {
                $scope: $scope
            };

            $controller('HomeCtrl', params);

            expect($scope.heading).toBe(expected.heading);
        });
    });
});

