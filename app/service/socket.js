/**
 * Restaurante
 * @module service.Socket
 */
angular.module('service.socket', [])
        .factory('socket', function($rootScope) {
            'use strict';
            var socket = io.connect('http://localhost:8090');
            return {
                on: function(eventName, callback) {
                    socket.on(eventName, function() {
                        var args = arguments;
                        $rootScope.$apply(function() {
                            callback.apply(socket, args);
                        });
                    });
                },
                emit: function(eventName, data, callback) {
                    socket.emit(eventName, data, function() {
                        var args = arguments;
                        $rootScope.$apply(function() {
                            if (callback) {
                                callback.apply(socket, args);
                            }
                        });
                    });
                }
            };

            // The service logic goes here...
        });
