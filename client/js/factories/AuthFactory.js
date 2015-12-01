
angular.module('enigma.auth')
    .factory('authFactory', ['$q', function ($q) {
        return {
            forgotPassword: function(par) {
                var deferred = $q.defer();

                deferred.resolve({ message: 'a message' });

                return deferred.promise;
            }
        }
    }]);
