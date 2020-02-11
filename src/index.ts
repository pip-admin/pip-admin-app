class AdminAppController {
    constructor($scope, $state: ng.ui.IStateService) {
        $scope.isEntryPage = () => {
            return $state.current.name === 'signin' || $state.current.name === 'signup' ||
                $state.current.name === 'recover_password' || $state.current.name === 'post_signup';
        };
    }
}
(() => {

    angular
        .module('pipAdminApp', [
            'pipDates',
            'pipAdminConfig',
            'pipAdminApp.Templates',

            'pipSystemHomePage',
            'pipSupportHomePage',
            'pipContentHomePage',
            'pipUsersHomePage'
        ])
        .controller('pipAdminAppController', AdminAppController)

})();