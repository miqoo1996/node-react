var interval = setInterval(() => IntervalChecker(), 20);

const ImportNode = ({ tag, srcs, id = 'root' }) => {
    for (var i in srcs) {
        var script = document.createElement(tag);

        script.src = srcs[i];
        script.async = true;

        document.getElementById(id).appendChild(script);
    }
};

var importEl = () => {
    ImportNode({
        tag: 'script',
        id: 'root',
        srcs: [
            '/asset/vendor/jquery/jquery.min.js',
            '/asset/vendor/bootstrap/js/bootstrap.bundle.min.js',
            '/asset/vendor/jquery-easing/jquery.easing.min.js',
            '/asset/js/jqBootstrapValidation.js',
            '/asset/js/contact_me.js',
            '/asset/js/agency.min.js'
        ]
    });
};

var IntervalChecker = () => {
    if (Boolean(document.getElementById('head'))) {
        importEl();

        clearInterval(interval);
        return false;
    }
};
