angular
    .module('enigma.forgotPasswordDirective', [])
    .directive('forgotPasswordDirective', forgotPasswordDirective);

function forgotPasswordDirective() {
    return {
        bindToController: true, // I thought this told the directive to use the controllers scope instead of an isolated scope...
        controller: 'Auth',
        controllerAs: 'auth',
        templateUrl: 'templates/forgotPassword.html'
    }
}
