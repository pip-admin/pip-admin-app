
class SystemHomeController {
    public pages: pip.admin.shell.HomePage[] = [
        {
            Items: [
                {
                    Name: 'Logging',
                    State: 'logging',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Events',
                    State: 'events',
                    Color: 'bg-color-7',
                    ColorBadge: '',
                },
                {
                    Name: 'Errors',
                    State: 'errors',
                    Color: 'bg-color-7',
                    ColorBadge: '',
                },
                {
                    Name: 'Settings',
                    State: 'registry',
                    Color: 'bg-color-2',
                    ColorBadge: '',
                }, {
                    Name: 'Statistics',
                    State: 'statistics',
                    Color: 'bg-color-4',
                    ColorBadge: '',
                }, {
                    Name: 'Counters',
                    State: 'counters',
                    Color: 'bg-color-3',
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
        this.pipNavService.breadcrumb.text = 'System Home';
        this.pipNavService.actions.hide();
    }

    public onRetry() {
        this.$window.history.back();
    }
}

function configureSystemHomeRoute(
    $injector: angular.auto.IInjectorService,
    $stateProvider//: ng.ui.IStateProvider
) {
    "ngInject";

    $stateProvider
        .state('system', {
            url: '/system',
            controller: SystemHomeController,
            auth: false,
            controllerAs: '$ctrl',
            templateUrl: 'system_home/SystemHomePage.html'
        });
}

(() => {

    angular
        .module('pipSystemHomePage', ['pipNav'])
        .config(configureSystemHomeRoute)

})();
