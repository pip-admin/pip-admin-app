
class UsersHomeController {
    public pages: pip.admin.shell.HomePage[] = [
        {
            Items: [
                {
                    Name: 'Users',
                    State: 'users',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Activities',
                    State: 'activities',
                    Color: 'bg-color-7',
                    ColorBadge: '',
                }
            ]
        }
    ];
    constructor(
        private $window: ng.IWindowService,
        $scope: ng.IScope,
        $state: ng.ui.IStateService,
        $rootScope: ng.IRootScopeService,
        $mdMedia: angular.material.IMedia,
        $injector: angular.auto.IInjectorService,
        private pipNavService: pip.nav.INavService
    ) {
        "ngInject";

        let pipMedia = $injector.has('pipMedia') ? $injector.get('pipMedia') : null;
        this.appHeader();

    }

    private appHeader(): void {
        this.pipNavService.appbar.parts = {
            logo: false,
            icon: false,
            title: 'breadcrumb'
        };
        this.pipNavService.appbar.addShadow();
        this.pipNavService.icon.showMenu();
        this.pipNavService.breadcrumb.text = 'Users Home';
        this.pipNavService.actions.hide();
    }

    public onRetry() {
        this.$window.history.back();
    }
}

function configureUsersHomeRoute(
    $injector: angular.auto.IInjectorService,
    $stateProvider//: ng.ui.IStateProvider
) {
    "ngInject";

    $stateProvider
        .state('users', {
            url: '/users',
            controller: UsersHomeController,
            auth: false,
            controllerAs: '$ctrl',
            templateUrl: 'users_home/UsersHomePage.html'
        });
}

(() => {

    angular
        .module('pipUsersHomePage', ['pipNav'])
        .config(configureUsersHomeRoute)

})();
