
class ContentHomeController {
    public pages: pip.admin.shell.HomePage[] = [
        {
            Items: [
                {
                    Name: 'Files',
                    State: 'files',
                    Color: 'bg-color-7',
                    ColorBadge: '',
                },
                {
                    Name: 'Blobs',
                    State: 'blobs',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Quotes',
                    State: 'quotes',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Tips',
                    State: 'tips',
                    Color: 'bg-color-7',
                    ColorBadge: '',
                }, {
                    Name: 'Guides',
                    State: 'guides',
                    Color: 'bg-color-8',
                    ColorBadge: '',
                },
                {
                    Name: 'Imagesets',
                    State: 'imagesets',
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
        this.pipNavService.breadcrumb.text = 'Content Home';
        this.pipNavService.actions.hide();
    }

    public onRetry() {
        this.$window.history.back();
    }
}

function configureContentHomeRoute(
    $injector: angular.auto.IInjectorService,
    $stateProvider//: ng.ui.IStateProvider
) {
    "ngInject";

    $stateProvider
        .state('content', {
            url: '/content',
            controller: ContentHomeController,
            auth: false,
            controllerAs: '$ctrl',
            templateUrl: 'content_home/ContentHomePage.html'
        });
}

(() => {

    angular
        .module('pipContentHomePage', ['pipNav'])
        .config(configureContentHomeRoute)

})();
