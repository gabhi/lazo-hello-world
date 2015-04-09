define(['lazoSyncher', 'json!./data.json'], function (LazoSyncher, data) {

    'use strict';

    return LazoSyncher.extend({

        fetch: function (options) {
            options.success(data);
        }

    });

});