(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).admin = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function () {
    pipAdminAppConfig.$inject = ['$mdIconProvider', '$urlRouterProvider', '$stateProvider', 'pipEntryProvider', 'pipTranslateProvider', 'pipSideNavProvider', 'pipNavMenuProvider', 'pipRestProvider', 'pipAuthStateProvider'];
    function pipAdminAppConfig($mdIconProvider, $urlRouterProvider, $stateProvider, pipEntryProvider, pipTranslateProvider, pipSideNavProvider, pipNavMenuProvider, pipRestProvider, pipAuthStateProvider) {
        $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
        pipNavMenuProvider.sections = [
            {
                links: [
                    { title: 'System', url: '/system' },
                    { title: 'Content', url: '/content' },
                    { title: 'Users', url: '/users' },
                    { title: 'Support', url: '/support' }
                ]
            },
            {
                links: [
                    { title: 'SIGNOUT', url: '/signout' }
                ]
            }
        ];
        pipSideNavProvider.part('user', true);
        pipSideNavProvider.part('links', true);
        pipSideNavProvider.type = 'sticky';
        pipEntryProvider.isPostSignup = false;
        pipRestProvider.serverUrl = 'http://api.positron.stage.iquipsys.net:30001';
        $urlRouterProvider.otherwise(function ($injector, $location) {
            return $location.$$path === '' ? '/' : '/system';
        });
        pipAuthStateProvider.unauthorizedState = 'signin';
        pipAuthStateProvider.authorizedState = 'system';
    }
    angular.module('pipAdminConfig', [
        'pipEntry', 'pipLayout', 'pipNav', 'pipDialogs', 'pipTheme',
        'pipShell',
        'pipSystem.Templates', 'pipSystem', 'pipAdminContent.Templates', 'pipContent'
    ])
        .config(pipAdminAppConfig);
})();
},{}],2:[function(require,module,exports){
configureContentHomeRoute.$inject = ['$injector', '$stateProvider'];
var ContentHomeController = (function () {
    ContentHomeController.$inject = ['$window', '$scope', '$state', '$rootScope', '$mdMedia', '$injector', 'pipNavService'];
    function ContentHomeController($window, $scope, $state, $rootScope, $mdMedia, $injector, pipNavService) {
        "ngInject";
        this.$window = $window;
        this.pipNavService = pipNavService;
        this.pages = [
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
        var pipMedia = $injector.has('pipMedia') ? $injector.get('pipMedia') : null;
        this.appHeader();
    }
    ContentHomeController.prototype.appHeader = function () {
        this.pipNavService.appbar.parts = {
            logo: false,
            icon: false,
            title: 'breadcrumb'
        };
        this.pipNavService.appbar.addShadow();
        this.pipNavService.icon.showMenu();
        this.pipNavService.breadcrumb.text = 'Content Home';
        this.pipNavService.actions.hide();
    };
    ContentHomeController.prototype.onRetry = function () {
        this.$window.history.back();
    };
    return ContentHomeController;
}());
function configureContentHomeRoute($injector, $stateProvider) {
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
(function () {
    angular
        .module('pipContentHomePage', ['pipNav'])
        .config(configureContentHomeRoute);
})();
},{}],3:[function(require,module,exports){
var AdminAppController = (function () {
    AdminAppController.$inject = ['$scope', '$state'];
    function AdminAppController($scope, $state) {
        $scope.isEntryPage = function () {
            return $state.current.name === 'signin' || $state.current.name === 'signup' ||
                $state.current.name === 'recover_password' || $state.current.name === 'post_signup';
        };
    }
    return AdminAppController;
}());
(function () {
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
        .controller('pipAdminAppController', AdminAppController);
})();
},{}],4:[function(require,module,exports){
configureSupportHomeRoute.$inject = ['$injector', '$stateProvider'];
var SupportHomeController = (function () {
    SupportHomeController.$inject = ['$window', '$scope', '$state', '$rootScope', '$mdMedia', '$injector', 'pipNavService'];
    function SupportHomeController($window, $scope, $state, $rootScope, $mdMedia, $injector, pipNavService) {
        "ngInject";
        this.$window = $window;
        this.pipNavService = pipNavService;
        this.pages = [
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
        var pipMedia = $injector.has('pipMedia') ? $injector.get('pipMedia') : null;
        this.appHeader();
    }
    SupportHomeController.prototype.appHeader = function () {
        this.pipNavService.appbar.parts = {
            logo: false,
            icon: false,
            title: 'breadcrumb'
        };
        this.pipNavService.appbar.addShadow();
        this.pipNavService.icon.showMenu();
        this.pipNavService.breadcrumb.text = 'Support Home';
        this.pipNavService.actions.hide();
    };
    SupportHomeController.prototype.onRetry = function () {
        this.$window.history.back();
    };
    return SupportHomeController;
}());
function configureSupportHomeRoute($injector, $stateProvider) {
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
(function () {
    angular
        .module('pipSupportHomePage', ['pipNav'])
        .config(configureSupportHomeRoute);
})();
},{}],5:[function(require,module,exports){
configureSystemHomeRoute.$inject = ['$injector', '$stateProvider'];
var SystemHomeController = (function () {
    SystemHomeController.$inject = ['$window', '$scope', '$state', '$rootScope', '$mdMedia', '$injector', 'pipNavService'];
    function SystemHomeController($window, $scope, $state, $rootScope, $mdMedia, $injector, pipNavService) {
        "ngInject";
        this.$window = $window;
        this.pipNavService = pipNavService;
        this.pages = [
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
        var pipMedia = $injector.has('pipMedia') ? $injector.get('pipMedia') : null;
        this.appHeader();
    }
    SystemHomeController.prototype.appHeader = function () {
        this.pipNavService.appbar.parts = {
            logo: false,
            icon: false,
            title: 'breadcrumb'
        };
        this.pipNavService.appbar.addShadow();
        this.pipNavService.icon.showMenu();
        this.pipNavService.breadcrumb.text = 'System Home';
        this.pipNavService.actions.hide();
    };
    SystemHomeController.prototype.onRetry = function () {
        this.$window.history.back();
    };
    return SystemHomeController;
}());
function configureSystemHomeRoute($injector, $stateProvider) {
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
(function () {
    angular
        .module('pipSystemHomePage', ['pipNav'])
        .config(configureSystemHomeRoute);
})();
},{}],6:[function(require,module,exports){
configureUsersHomeRoute.$inject = ['$injector', '$stateProvider'];
var UsersHomeController = (function () {
    UsersHomeController.$inject = ['$window', '$scope', '$state', '$rootScope', '$mdMedia', '$injector', 'pipNavService'];
    function UsersHomeController($window, $scope, $state, $rootScope, $mdMedia, $injector, pipNavService) {
        "ngInject";
        this.$window = $window;
        this.pipNavService = pipNavService;
        this.pages = [
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
        var pipMedia = $injector.has('pipMedia') ? $injector.get('pipMedia') : null;
        this.appHeader();
    }
    UsersHomeController.prototype.appHeader = function () {
        this.pipNavService.appbar.parts = {
            logo: false,
            icon: false,
            title: 'breadcrumb'
        };
        this.pipNavService.appbar.addShadow();
        this.pipNavService.icon.showMenu();
        this.pipNavService.breadcrumb.text = 'Users Home';
        this.pipNavService.actions.hide();
    };
    UsersHomeController.prototype.onRetry = function () {
        this.$window.history.back();
    };
    return UsersHomeController;
}());
function configureUsersHomeRoute($injector, $stateProvider) {
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
(function () {
    angular
        .module('pipUsersHomePage', ['pipNav'])
        .config(configureUsersHomeRoute);
})();
},{}],7:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipAdminApp.Templates');
} catch (e) {
  module = angular.module('pipAdminApp.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('content_home/ContentHomePage.html',
    '<pip-simple><div ng-class="{\'p16\': !pipMedia(\'xs\')}"><pip-admin-home-panel pip-pages="$ctrl.pages"></pip-admin-home-panel></div></pip-simple>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipAdminApp.Templates');
} catch (e) {
  module = angular.module('pipAdminApp.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('support_home/SupportHomePage.html',
    '<pip-simple><div ng-class="{\'p16\': !pipMedia(\'xs\')}"><pip-admin-home-panel pip-pages="$ctrl.pages"></pip-admin-home-panel></div></pip-simple>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipAdminApp.Templates');
} catch (e) {
  module = angular.module('pipAdminApp.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('system_home/SystemHomePage.html',
    '<pip-simple><div ng-class="{\'p16\': !pipMedia(\'xs\')}"><pip-admin-home-panel pip-pages="$ctrl.pages"></pip-admin-home-panel></div></pip-simple>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipAdminApp.Templates');
} catch (e) {
  module = angular.module('pipAdminApp.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('users_home/UsersHomePage.html',
    '<pip-simple><div ng-class="{\'p16\': !pipMedia(\'xs\')}"><pip-admin-home-panel pip-pages="$ctrl.pages"></pip-admin-home-panel></div></pip-simple>');
}]);
})();



},{}]},{},[7,1,2,3,4,5,6])(7)
});

//# sourceMappingURL=pip-admin-app.js.map
