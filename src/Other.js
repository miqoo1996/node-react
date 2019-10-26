(() => {
    var mainNav, sticky = 0,
        stickyChecker = () => {
            mainNav = mainNav || document.getElementById("mainNav");
            sticky = sticky || mainNav.offsetTop;
        },
        stickyRun = () => {
            try {
                if (typeof mainNav != 'undefined' && window.pageYOffset > sticky) {
                    mainNav.classList.add("navbar-shrink");
                } else {
                    mainNav.classList.remove("navbar-shrink");
                }
            } catch (e) {
                stickyChecker();
            }
        };

    window.onload = stickyChecker;

    window.onload = stickyRun;

    window.onscroll = stickyRun;
})();