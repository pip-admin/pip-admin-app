
class SupportHomeController {
    public pages: pip.admin.shell.HomePage[] = [
        {
            Items: [
                {
                    Name: 'Feedback',
                    State: 'feedback',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Announcements',
                    State: 'announce',
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
        this.pipNavService.breadcrumb.text = 'Support Home';
        this.pipNavService.actions.hide();
    }

    public onRetry() {
        this.$window.history.back();
    }
}

function configureSupportHomeRoute(
    $injector: angular.auto.IInjectorService,
    $stateProvider//: ng.ui.IStateProvider
) {
    "ngInject";

    $stateProvider
        .state('support', {
            url: '/support',
            controller: SupportHomeController,
            auth: false,
            controllerAs: '$ctrl',
            templateUrl: 'support_home/SupportHomePage.html'
        });
}

(() => {

    angular
        .module('pipSupportHomePage', ['pipNav'])
        .config(configureSupportHomeRoute)

})();
