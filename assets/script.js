(function ($) {
    'use strict';

    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 30,
        offset: 300
    });
    header.init();
})(jQuery);
