
(() => {

    function pipAdminAppConfig(
        $mdIconProvider,
        $urlRouterProvider,
        $stateProvider,
        pipEntryProvider,
        pipTranslateProvider,
        pipSideNavProvider,
        pipNavMenuProvider,
        pipRestProvider,
        pipAuthStateProvider) {

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
        $urlRouterProvider.otherwise(($injector, $location) => {
            return $location.$$path === '' ? '/' : '/system';
        });
        // Configure default states
        pipAuthStateProvider.unauthorizedState = 'signin';
        pipAuthStateProvider.authorizedState = 'system';

    }
    angular.module('pipAdminConfig',
        [
            'pipEntry', 'pipLayout', 'pipNav', 'pipDialogs', 'pipTheme',
            'pipShell',
            'pipSystem.Templates', 'pipSystem', 'pipAdminContent.Templates','pipContent'
        ])
        .config(pipAdminAppConfig)

})();

