
angular
    .module('enigma.auth', [])
    .controller('Auth', Auth);

Auth.$inject = ['authFactory'];

function Auth(authFactory) {
    var auth = this;
    auth.forgotPassword = forgotPassword;
    auth.forgotPasswordFeedback = '';

    auth.reg = {
        user: {
            email: 'a@a.com'
        }
    };

    function forgotPassword(email) {
        if(email) {
            authFactory.forgotPassword({ email: email })
                .then(function(res) {
                    auth.forgotPasswordFeedback = res.message; // auth.forgotPasswordFeedback is set to the correct value now, however this isn't reflected in the directive.
                    $('#forgotPassword').modal();
                });
        }
    };
}