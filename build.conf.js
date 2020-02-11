module.exports = {
    module: {
        name: 'pipAdminApp',
        styles: 'index',
        export: 'pip.admin',
        standalone: 'pip.admin'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: true
    },
    file: {
        lib: [
            '../node_modules/pip-webui-all/dist/**/*',
            '../node_modules/pip-suite-all/dist/**/*',
            '../pip-admin-shell/dist/**/*',
            '../pip-admin-system/dist/**/*',
            '../pip-admin-content/dist/**/*'
        ]
    },
    samples: {
        port: 8197,
        https: false
    },
    api: {
        port: 8198
    },
      app: {
        port: 8900,
        https: false}
};
