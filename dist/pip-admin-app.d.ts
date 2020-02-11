declare module pip.admin {

class AdminAppController {
    constructor($scope: any, $state: ng.ui.IStateService);
}

class ContentHomeController {
    private $window;
    private pipNavService;
    pages: pip.admin.shell.HomePage[];
    constructor($window: ng.IWindowService, $scope: ng.IScope, $state: ng.ui.IStateService, $rootScope: ng.IRootScopeService, $mdMedia: angular.material.IMedia, $injector: angular.auto.IInjectorService, pipNavService: pip.nav.INavService);
    private appHeader();
    onRetry(): void;
}
function configureContentHomeRoute($injector: angular.auto.IInjectorService, $stateProvider: any): void;

class SupportHomeController {
    private $window;
    private pipNavService;
    pages: pip.admin.shell.HomePage[];
    constructor($window: ng.IWindowService, $scope: ng.IScope, $state: ng.ui.IStateService, $rootScope: ng.IRootScopeService, $mdMedia: angular.material.IMedia, $injector: angular.auto.IInjectorService, pipNavService: pip.nav.INavService);
    private appHeader();
    onRetry(): void;
}
function configureSupportHomeRoute($injector: angular.auto.IInjectorService, $stateProvider: any): void;

class SystemHomeController {
    private $window;
    private pipNavService;
    pages: pip.admin.shell.HomePage[];
    constructor($window: ng.IWindowService, $scope: ng.IScope, $state: ng.ui.IStateService, $rootScope: ng.IRootScopeService, $mdMedia: angular.material.IMedia, $injector: angular.auto.IInjectorService, pipNavService: pip.nav.INavService);
    private appHeader();
    onRetry(): void;
}
function configureSystemHomeRoute($injector: angular.auto.IInjectorService, $stateProvider: any): void;

class UsersHomeController {
    private $window;
    private pipNavService;
    pages: pip.admin.shell.HomePage[];
    constructor($window: ng.IWindowService, $scope: ng.IScope, $state: ng.ui.IStateService, $rootScope: ng.IRootScopeService, $mdMedia: angular.material.IMedia, $injector: angular.auto.IInjectorService, pipNavService: pip.nav.INavService);
    private appHeader();
    onRetry(): void;
}
function configureUsersHomeRoute($injector: angular.auto.IInjectorService, $stateProvider: any): void;

}
